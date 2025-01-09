import React from "react";
import styles from "./hero.module.css";
import HeroBtn from "./heroBtn/HeroBtn";
import Slider from "./heroSlider/Slider";

const Hero = () => {
  return (
    <div className={styles.body}>
      <section className={styles.container}>
        <div className={styles["hero-content"]}>
          <div className={styles["text-group"]}>
            <div className='flex gap-2 items-center text-center'>
              <h1 className={styles["eyebrow-text"]}>How PayPal works</h1>
            </div>

            <div className={styles.margin}>
              <h2 className={styles["headline-text"]}>
                It’s a smart, secure, flexible way to pay.
              </h2>
            </div>
            <div className={styles.margin}>
              <p className={styles["para-text"]}>
                Speed through checkout online and in stores. Earn cash back with
                everyday offers. Send money across the table or across the
                globe. And manage it all with one account.
              </p>
            </div>
            <div className={styles.margin}>
              <HeroBtn />
            </div>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles["media-container"]}>
            <div className={styles["media-frame"]}>
              <picture className='flex items-center justify-center w-full'>
                <Slider />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
