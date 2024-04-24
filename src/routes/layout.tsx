import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
   return (
      <>
         <Link to={'/'}>All tasks</Link>
         <Link to={'/completed'}>Completed</Link>
         <Link to={'/deleted'}>Deleted</Link>
         <Link to={'/active'}>Active</Link>
         <Outlet />
      </>
   );
};

export default Layout;
