import React, { FC, useState } from "react";
import { Todo } from "src/types";
import { v4 as uuidv4 } from 'uuid';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
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
      <MyInput
        value={post.title}
        onChange={(e: any) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e: any) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
export default PostForm;
