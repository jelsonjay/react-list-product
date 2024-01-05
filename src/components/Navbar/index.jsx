import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { links } from "../../data/links";
import Sidebar from "../Sidebar";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className={styles.navbar}>
        {/* =====LOGO=====*/}
        <div className={styles.logo}>
          <NavLink to="/" >Store.</NavLink>
        </div>
        {/* =====MENU LINKS=====*/}
        <div className={styles.linksMenu}>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* =====AUTH LINKS=====*/}
        <div className={styles.auth}>
          <NavLink to="/login" className={styles.login}>
            Login
          </NavLink>
          <span>/</span>
          <NavLink to="/register" className={styles.register}>
            SignUp
          </NavLink>
        </div>
        {/* =====HAMBURGER MENU=====*/}
        <div className={styles.menuBtn} onClick={toggleSidebar}>
          <FiMenu size={30} />
        </div>

        {/* =====SIDEBAR=====*/}
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      </div>

      
    </header>
  );
};

export default Navbar;
