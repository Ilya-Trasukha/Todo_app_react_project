import { Todo } from "src/types";

export default class TodoService {
    static getTodo() {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : []
    }
    static addTodo(todo: Todo) {
        const todos = localStorage.getItem('todos');
        const prevTodos =  todos ? JSON.parse(todos) : [];
        prevTodos.push(todo);
        localStorage.setItem('todos', JSON.stringify(prevTodos))
    }
    static removeTodo(id: string) {
        const todos = localStorage.getItem('todos');
        const prevTodos = JSON.parse(todos as string);
        const newTodosList = prevTodos.filter((todo: Todo) => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(newTodosList))
        return newTodosList;
    }
}