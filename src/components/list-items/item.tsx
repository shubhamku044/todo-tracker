import React from 'react';
import { ItemCon, BinIcon } from './styled';
import { useTodo } from '../../context/todo-context';

interface IProps {
  todo: {
    todo: string
    id: string;
  };
}

const Item: React.FC<IProps> = ({ todo }) => {
  const { setTodos, todos } = useTodo();
  const handleDelete = () => {
    const updatedTodo = todos.filter((item) => todo.id !== item.id);
    setTodos(updatedTodo);
  }


  return (
    <ItemCon
      style={{ transformOrigin: 'left top' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.3 }}
      exit={{ opacity: 0, y: '50%' }}
    >
      <p>
        {todo.todo}
      </p>
      <BinIcon onClick={handleDelete} />
    </ItemCon>
  )
}

export default Item;
