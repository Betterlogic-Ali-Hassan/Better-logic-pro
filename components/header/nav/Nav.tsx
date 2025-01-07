import React from "react";
import styles from "./nav.module.css";
import Menu from "./menu/Menu";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <ul className={styles["menu-list"]}>
          <li>
            <Menu trigger='Personal' />
          </li>
          <li>
            <Menu trigger='Small Business' />
          </li>
          <li>
            <Menu trigger='Enterprise' />
          </li>
          <li>
            <button className={styles["nav-item"]}>Developer</button>
          </li>
        </ul>
        <ul className={styles["menu-list"]}>
          <li>
            <button className={styles["nav-item"]}>Help</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
