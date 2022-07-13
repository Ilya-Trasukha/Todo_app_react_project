import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 className="not_found">Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1 className="post_top">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
