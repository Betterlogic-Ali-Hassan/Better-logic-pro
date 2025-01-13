import React from "react";
import styles from "./hero.module.css";
const HeroHead = () => {
  return (
    <>
      {" "}
      <div className='flex gap-2 items-center text-center'>
        <h1 className={styles["eyebrow-text"]}>Chrome Extension</h1>
      </div>
      <div className={styles.margin}>
        <h2 className={styles["headline-text"]}>Better History</h2>
        <h3 className={styles["sub-heading"]}>
          Organize and Manage Your Browsing History Effortlessly
        </h3>
      </div>
    </>
  );
};

export default HeroHead;
