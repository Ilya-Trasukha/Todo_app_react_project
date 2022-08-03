import { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Todo } from "src/types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[]
  title: string
  remove: Function
  toggleImportant: Function
  doneTodo: Function
}
const TodoList: FC<Props> = ({ todos, title, remove, toggleImportant, doneTodo }) => {
  if (!todos.length) {
    return <h1 className="not_found">Todos not found!</h1>;
  }
  return (
    <div>
      <h1 className="todo_top">{title}</h1>
      <TransitionGroup>
        {todos.map((todo, index) => (
          <CSSTransition key={todo.id} timeout={500} classNames="post">
            <TodoItem
              remove={remove}
              number={index + 1}
              todo={todo}
              doneTodoPost={doneTodo}
              toggleImportantPost={toggleImportant} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default TodoList;
