import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout';
import AllTasks from './AllTasks';
import ActiveTasks from './ActiveTasks';
import DeletedTasks from './DeletedTasks';
import CompletedTasks from './CompletedTasks';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<Layout />}>
         <Route index element={<AllTasks />} />
         <Route path='active' element={<ActiveTasks />} />
         <Route path='deleted' element={<DeletedTasks />} />
         <Route path='completed' element={<CompletedTasks />} />
      </Route>,
   ),
);
export default router;
