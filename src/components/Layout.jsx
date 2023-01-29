import { NavLink, Outlet } from "react-router-dom";

export const setActive = ({ isActive }) =>
  isActive ? "active-nav nav-link" : "nav-link";

const Layout = () => (
  <>
    <div className="header">
      <div className="menu">
        <NavLink to="/converter" className={setActive}>
          Converter
        </NavLink>
        <NavLink to="/quiz" className={setActive}>
          Quiz
        </NavLink>
        <NavLink to="/photogramm" className={setActive}>
          Photogramm
        </NavLink>
      </div>
    </div>
    <div className="content">
      <Outlet />
    </div>
  </>
);

export default Layout;
