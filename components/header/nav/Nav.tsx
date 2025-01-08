"use client";
import React, { useState } from "react";
import styles from "./nav.module.css";
import Menu from "./menu/Menu";
const Nav = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <ul className={styles["menu-list"]}>
          <li>
            <Menu
              trigger='Personal'
              menuId={0}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </li>
          <li>
            <Menu
              trigger='Small Business'
              menuId={1}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </li>
          <li>
            <Menu
              trigger='Enterprise'
              menuId={2}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
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
