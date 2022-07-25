import React, { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Todo } from "src/types";
import PostItem from "./PostItem";

type Props = {
  posts: Todo[]
  title: string
  remove: Function
  toggleImportant: Function
}
const PostList: FC<Props> = ({ posts, title, remove, toggleImportant }) => {
  if (!posts.length) {
    return <h1 className="not_found">Todos not found!</h1>;
  }
  return (
    <div>
      <h1 className="post_top">{title}</h1>
      <TransitionGroup>
        {posts.map((todo, index) => (
          <CSSTransition key={todo.id} timeout={500} classNames="post">
            <PostItem 
              remove={remove} 
              number={index + 1} 
              todo={todo} 
              toggleImportantPost={toggleImportant} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
