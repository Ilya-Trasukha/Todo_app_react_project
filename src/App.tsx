import React, { useEffect, useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/App.css";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
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
  console.dir(sortedAndSearchedPosts);
  
  return (
    <div className="App">
      {/* <button onClick={fetchPosts}>GET POSTS</button> */}
      <MyButton className="add" onClick={() => setModal(true)}>
        Добавить пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
    </div>
  );
}
export default App;
