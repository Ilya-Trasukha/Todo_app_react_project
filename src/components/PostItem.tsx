import React, { FC, useState } from "react";
import { Todo } from "src/types";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

const PostItem: FC<{todo: Todo, remove: Function, number: number}> = ({todo, remove, number}) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {todo.title}
        </strong>
        <div>{todo.body}</div>
      </div>
      <div className="post__btns">
        <div>
        <Switch color="warning"/>
        </div>
        <div>
        <Checkbox/>
        </div>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => remove(todo.id)}>
          <strong>Delete</strong>
        </Button>
      </div>
    </div>
  );
};
export default PostItem;
