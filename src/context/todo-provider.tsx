import React, { ReactNode, useState } from 'react';
import { TodoContext } from './todo-context';
import type { TodoType } from './todo-context';

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoType>([]);

  const value = {
    todos,
    setTodos
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}
