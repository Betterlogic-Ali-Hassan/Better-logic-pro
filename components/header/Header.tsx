import React from "react";
import styles from "./header.module.css";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import Button from "../ui/button/Button";
import MobileHeader from "./mobileheader/MobileHeader";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Logo />
          <Nav />

          <div className='lg:flex items-center h-[3rem] relative max-w-max  hidden'>
            <Button className='ml-[12px]'>Log In</Button>
            <Button className='ml-[9px]' btnDark>
              Sign Up
            </Button>
          </div>

          <MobileHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
