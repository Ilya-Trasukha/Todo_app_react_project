import React, { FC, useState } from "react";
import { Todo } from "src/types";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

const PostItem: FC<{
  todo: Todo, 
  remove: Function, 
  toggleImportantPost: Function,
  doneTodoPost: Function
  number: number
  }> = ({todo, remove, toggleImportantPost, doneTodoPost, number}) => {
  console.log(todo);
  const [state, setState] = useState(false)
  return (
    <div className={`${state ? 'post_active' : 'post'}`}>
      <div className="post__content">
        <strong>
          {number}. {todo.title}
        </strong>
        <div>{todo.body}</div>
      </div>
      <div className="post__btns">
        <div>
          <Switch onChange={(_e: any, value: boolean) => {
            toggleImportantPost(todo.id, value)
          }} color="warning" checked={todo.important}/>
        </div>
        <div>
        <Checkbox onChange={(_e: any, value: boolean) => {
            setState(!state)
            doneTodoPost(todo.id, value)
          }}  checked={todo.done}/>
        </div>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => remove(todo.id)}>
          <strong>Delete</strong>
        </Button>
      </div>
    </div>
  );
};
export default PostItem;
