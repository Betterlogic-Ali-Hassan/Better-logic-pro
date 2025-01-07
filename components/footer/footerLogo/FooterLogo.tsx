import React from "react";
import styles from "./footerLogo.module.css";
import Link from "next/link";
const FooterLogo = () => {
  return (
    <div className={styles["logo-wrapper"]}>
      <Link href='/' className={styles.logo}></Link>
    </div>
  );
};

export default FooterLogo;
