import Link from "next/link";
import React from "react";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <div className={styles["logo-wrapper"]}>
      <Link href='/' className={styles.logo}></Link>
    </div>
  );
};

export default Logo;
