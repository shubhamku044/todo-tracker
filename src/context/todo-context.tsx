import React, { SetStateAction, createContext, useContext } from 'react';

export type TodoType = Array<{ id: string, todo: string }>;

type TodoContextType = {
  todos: TodoType;
  setTodos: React.Dispatch<SetStateAction<TodoType>>
}

const todoContextDefaultValues: TodoContextType = {
  todos: [],
  setTodos: () => { /*  */ }
}

export const TodoContext = createContext<TodoContextType>(todoContextDefaultValues);

export function useTodo() {
  return useContext(TodoContext);
}
