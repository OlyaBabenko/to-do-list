import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout';
import LayoutTasks from './LayoutTasks';
import TaskList from '../components/TaskList/TaskList';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<Layout />}>
         <Route index element={<LayoutTasks />} />
         <Route path='active' element={<LayoutTasks />} />
         <Route path='deleted' element={<TaskList />} />
         <Route path='completed' element={<TaskList />} />
      </Route>,
   ),
);
export default router;
