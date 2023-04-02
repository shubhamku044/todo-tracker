import React, { useState } from 'react';
import { Con, InputCon, StyledPlusIcon } from './styled';
import { v4 as uuidv4 } from 'uuid';
import { useTodo } from '../../context/todo-context';

const InputBox: React.FC = () => {
  const { setTodos } = useTodo();
  const [todo, setTodo] = useState<string>('');
  const addTodo = () => {
    if (todo.trim().length === 0) return
    const todoItem = {
      todo,
      id: uuidv4()
    }
    setTodos(prvTodo => [...prvTodo, todoItem]);
    setTodo('');
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addTodo();
  }

  return (
    <Con>
      <InputCon
        type='text'
        placeholder='Write your todo'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(e.target.value);
        }} onKeyDown={handleKeyDown}
        value={todo}
      />
      <div>
        <StyledPlusIcon
          style={{
            cursor: todo.trim().length === 0 ? 'not-allowed' : 'pointer'
          }}
          onClick={addTodo}
        />
      </div>
    </Con>
  )
}

export default InputBox; 
