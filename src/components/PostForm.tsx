import React, { FC, useState } from "react";
import { Todo } from "src/types";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PostForm: FC<{create: (todo: Todo)=> void}> = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e: any) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: uuidv4()
    };
    setPost({ title: "", body: "" });
    create(newPost);
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
      <Button variant="contained" onClick={addNewPost}>Create Todo</Button>
    </form>
  );
};
export default PostForm;
