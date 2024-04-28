import Input from '../components/Input/Input';
import TaskList from '../components/TaskList/TaskList';
import style from './LayoutTasks.module.scss';

const LayoutTasks = () => {
   return (
      <div className={style.wrapper}>
         <Input />
         <TaskList />
      </div>
   );
};

export default LayoutTasks;
