import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hook';
import { ITodo } from '../../store/todosSlice';
import TaskItem from '../TaskItem/TaskItem';
import { useLocation } from 'react-router-dom';
import style from './TaskList.module.scss';

const TaskList = () => {
   const { pathname } = useLocation();
   const todos = useAppSelector((state) => state.todos.todos);
   const [taskList, setTaskList] = useState<ITodo[] | null>(null);

   useEffect(() => {
      if (pathname === '/') {
         setTaskList([...todos]);
      } else {
         const status = pathname.slice(1);
         setTaskList(() => todos.filter((task) => task.status === status));
      }
   }, [pathname, todos]);

   return <div className={style.listWrapper}>{taskList?.map((task) => <TaskItem key={task.id} {...task} />)}</div>;
};

export default TaskList;
