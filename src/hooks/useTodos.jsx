import {useMemo} from "react";

export const useSortedTodos = (todos, sort) =>
    useMemo(() => {
      if (sort) {
        return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return todos;
    }, [sort, todos]);

export const useTodos = (todos, sort, query) => {
  const sortedTodos = useSortedTodos(todos, sort);
  return useMemo(() => {
    if (sortedTodos.length <= 1) return sortedTodos
    return sortedTodos.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedTodos]);
};
