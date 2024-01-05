import classes from "./sidebar.module.css";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../../data/links";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
      <span className={classes.closeIcon} onClick={closeSidebar}>
        <MdOutlineClose size={30} />
      </span>

      <div className={classes.linkMenu}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) => (isActive ? classes.activeLink : "")}
            onClick={closeSidebar}
          >
            {" "}
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className={classes.auth}>
        <NavLink to="/login" className={classes.login} onClick={closeSidebar}>
          Login
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `${classes.register} ${isActive ? classes.activeLink : ""}`
          }
          onClick={closeSidebar}
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;