import React from "react";
import styles from "./hero.module.css";
import HeroBtn from "./heroBtn/HeroBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='pb-4 my-container'>
      <div className={styles["hero-wrapper"]}>
        <section className={styles.hero}>
          <div className={styles["hero-content"]}>
            <div className={styles.content}>
              <div className='opacity-100 transform-none'>
                <div className='flex gap-2 items-center'>
                  <h1 className={styles["eyebrow-text"]}>How PayPal works</h1>
                </div>
              </div>
              <div className={styles.margin}>
                <h2 className={styles["headline-text"]}>
                  It’s a smart, secure, flexible way to pay.
                </h2>
              </div>
              <div className={styles.margin}>
                <p className={styles["para-text"]}>
                  Speed through checkout online and in stores. Earn cash back
                  with everyday offers. Send money across the table or across
                  the globe. And manage it all with one account.
                </p>
              </div>
              <div className={styles.margin}>
                <HeroBtn />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Image
        src='/hero.webp'
        alt='hero'
        height={552}
        width={982}
        className='pt-[48px] '
      />
    </div>
  );
};

export default Hero;
