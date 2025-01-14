import React from "react";
import styles from "./hero.module.css";
const HeroHead = () => {
  return (
    <>
      {" "}
      <div className='flex gap-2 items-center text-center'>
        <h1 className={styles["eyebrow-text"]}>Chrome Extension</h1>
      </div>
    </>
  );
};

export default HeroHead;
