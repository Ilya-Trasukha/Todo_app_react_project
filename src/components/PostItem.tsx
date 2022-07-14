import React, { FC } from "react";
import { Todo } from "src/types";
import MyButton from "./UI/button/MyButton";

const PostItem: FC<{todo: Todo, remove: Function, number: number}> = ({todo, remove, number}) => {
  console.log(todo);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {todo.title}
        </strong>
        <div>{todo.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(todo.id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
