import React, { FC, useState } from "react";
import { Todo } from "src/types";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type TodoWithoutId = Omit<Todo, 'id'>
const initPost: TodoWithoutId = { title: "", body: "", important: false, done: false }

const PostForm: FC<{create: (todo: Todo)=> void}> = ({ create }) => {
  const [post, setPost] = useState<TodoWithoutId>(initPost);

  const addNewPost = (e: any) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: uuidv4()
    };
    setPost(initPost);
    create(newPost as Todo);
  };
  return (
    <form>
      <TextField
        id="outlined-basic" 
        label="Todo name" 
        variant="outlined"
        value={post.title}
        onChange={(e: any) => setPost({ ...post, title: e.target.value })}
        type="text"
      />
      <TextField
        id="outlined-basic" 
        label="Todo description" 
        variant="outlined"
        value={post.body}
        onChange={(e: any) => setPost({ ...post, body: e.target.value })}
        type="text"
      />
      <Button className="myBtn" variant="contained" onClick={addNewPost}>Create Todo</Button>
    </form>
  );
};
export default PostForm;
