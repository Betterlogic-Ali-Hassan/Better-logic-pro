import React from "react";
import styles from "./header.module.css";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import Button from "../ui/button/Button";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className='p-0 bg-background h-full border-b border-border'>
        <div className={styles.wrapper}>
          <Logo />
          <Nav />

          <div className='flex items-center h-[3rem] relative max-w-max '>
            <Button className='ml-[9px]'>Log In</Button>
            <Button className='ml-[9px]' btnDark>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
