import React, { useEffect, useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/App.css";
import MyModal from "./components/UI/MyModal/MyModal";

import Button from '@mui/material/Button';
import { usePosts } from "./components/hooks/usePosts";
import TodoService from "./services/todosService"
import { Todo } from "./types";

function App() {
  const [posts, setPosts] = useState<Todo[] | []>([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newTodo: Todo) => {
    setPosts([...posts, newTodo]);
    TodoService.addTodo(newTodo)
    setModal(false);
  };
  useEffect(() => {
    const todos = TodoService.getTodo();    
    setPosts(todos);
  }, [])

  const removePost = (id: string) => {
    const todoList = TodoService.removeTodo(id);
    setPosts(todoList)
  };
  const toggleImportantPost = (id: string, value: boolean) => {
    const todos = TodoService.toggleImportantTodo(id, value)
    setPosts(todos)
  };
  const doneTodoPost = (id: string, value: boolean) => {
    const todos = TodoService.checkDoneTodo(id, value)
    setPosts(todos)
  };
  
  
  return (
    <div className="App">
      <Button variant="contained" className="add" onClick={() => setModal(true)}>
        Add Todo
      </Button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="My Todos"
        toggleImportant={toggleImportantPost}
        doneTodo={doneTodoPost}
      />
    </div>
  );
}
export default App;
