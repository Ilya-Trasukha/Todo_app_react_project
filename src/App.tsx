import {useEffect, useState} from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import MyModal from "./components/UI/MyModal/MyModal";

import Button from '@mui/material/Button';
import { useTodos } from "./hooks/useTodos";
import TodoService from "./services/todosService"
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedTodos = useTodos(todos, filter.sort, filter.query);

  const createTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    TodoService.addTodo(newTodo)
    setModal(false);
  };
  useEffect(() => {
    const todos = TodoService.getTodo();
    setTodos(todos);
  }, [])

  const removeTodo = (id: string) => {
    const todoList = TodoService.removeTodo(id);
    setTodos(todoList)
  };
  const toggleImportantTodo = (id: string, value: boolean) => {
    const todos = TodoService.toggleImportantTodo(id, value)
    setTodos(todos)
  };
  const checkDoneTodo = (id: string, value: boolean) => {
    const todos = TodoService.checkDoneTodo(id, value)
    setTodos(todos)
  };


  return (
    <div className="App">
      <Button variant="contained" className="add" onClick={() => setModal(true)}>
        Add Todo
      </Button>
      <MyModal visible={modal} setVisible={setModal}>
        <TodoForm create={createTodo} />
      </MyModal>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={sortedAndSearchedTodos}
        title="My Todos"
        remove={removeTodo}
        toggleImportant={toggleImportantTodo}
        doneTodo={checkDoneTodo}
      />
    </div>
  );
}
export default App;
