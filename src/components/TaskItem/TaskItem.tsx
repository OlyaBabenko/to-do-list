import { formateData } from '../../utils';
import style from './TaskItem.module.scss';
import trash from '../../assets/icons/trash.svg';
import check from '../../assets/icons/check.svg';
import reopen from '../../assets/icons/arrow-path.svg';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, reopenTodo } from '../../store/todosSlice';

interface TaskItemProps {
   id: string;
   text: string;
   status: 'active' | 'deleted' | 'completed';
}

const TaskItem: React.FC<TaskItemProps> = (task) => {
   const dispatch = useDispatch();
   return (
      <div
         className={
            task.status === 'active'
               ? style.active
               : task.status === 'completed'
                 ? style.completed
                 : style.deleted
         }
      >
         <span className={style.taskText}>{task.text}</span>
         <span className={style.taskDate}>Created: {formateData(task.id)}</span>
         {task.status === 'active' && (
            <div className={style.imageWrapper}>
               <button className={style.buttonCheck} onClick={() => dispatch(completeTodo(task))}>
                  <img src={check} alt='check' />
               </button>
               <button className={style.buttonTrash} onClick={() => dispatch(deleteTodo(task))}>
                  <img src={trash} alt='trash' />
               </button>
            </div>
         )}
         {task.status === 'completed' && (
            <div className={style.imageWrapper}>
               <button className={style.buttonReopen} onClick={() => dispatch(reopenTodo(task))}>
                  <img src={reopen} alt='reopen' />
               </button>
            </div>
         )}
         {task.status === 'deleted' && (
            <div className={style.imageWrapper}>
               <button className={style.buttonReopen} onClick={() => dispatch(reopenTodo(task))}>
                  <img src={reopen} alt='reopen-icon' />
               </button>
            </div>
         )}
      </div>
   );
};

export default TaskItem;
