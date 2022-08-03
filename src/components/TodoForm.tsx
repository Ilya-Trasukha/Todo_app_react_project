import { FC, useState } from "react";
import { Todo } from "src/types";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type TodoWithoutId = Omit<Todo, 'id'>
const initTodo: TodoWithoutId = { title: "", body: "", important: false, done: false }

const TodoForm: FC<{create: (todo: Todo)=> void}> = ({ create }) => {
  const [todo, setTodo] = useState<TodoWithoutId>(initTodo);

  const addNewTodo = (e: any) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: uuidv4()
    };
    setTodo(initTodo);
    create(newTodo as Todo);
  };
  return (
    <div className="add_todo">
      <TextField
        className="field"
        id="outlined-basic"
        label="Todo name"
        variant="outlined"
        value={todo.title}
        onChange={(e: any) => setTodo({ ...todo, title: e.target.value })}
        type="text"
      />
      <TextField
        className="field"
        id="outlined-basic"
        label="Todo description"
        variant="outlined"
        value={todo.body}
        onChange={(e: any) => setTodo({ ...todo, body: e.target.value })}
        type="text"
      />
      <Button variant="contained" onClick={addNewTodo}>Create Todo</Button>
    </div>
  );
};
export default TodoForm;
