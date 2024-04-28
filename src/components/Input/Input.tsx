import { useState } from 'react';
import style from './Input.module.scss';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/todosSlice';

const Input = () => {
   const [task, setTask] = useState('');
   const dispatch = useDispatch();
   const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (task.trim().length) {
         dispatch(createTodo(task));
         setTask('');
      }
   };
   return (
      <form className={style.wrapperInput} onSubmit={handleSubmit}>
         <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type='text'
            placeholder='Write new task'
            className={style.input}
         />
         <button>Create</button>
      </form>
   );
};

export default Input;
