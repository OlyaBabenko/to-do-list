import { NavLink, Outlet } from 'react-router-dom';
import style from './layout.module.scss';

const Layout = () => {
   return (
      <div className={style.appWrapper}>
         <h2 className={style.title}>TO DO LIST</h2>
         <div className={style.nav}>
            <NavLink to={'/'} className={({ isActive }) => (isActive ? style.active : '')}>
               All tasks
            </NavLink>
            <NavLink to={'/active'} className={({ isActive }) => (isActive ? style.active : '')}>
               Active
            </NavLink>
            <NavLink to={'/completed'} className={({ isActive }) => (isActive ? style.active : '')}>
               Completed
            </NavLink>
            <NavLink to={'/deleted'} className={({ isActive }) => (isActive ? style.active : '')}>
               Deleted
            </NavLink>
         </div>
         <Outlet />
      </div>
   );
};

export default Layout;
