import React from "react";
import styles from "./hero.module.css";
import HeroBtn from "./heroBtn/HeroBtn";
import Slider from "./heroSlider/Slider";
import HeroRating from "./HeroRating";
import { cn } from "@/lib/utils";

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
              <h2 className={styles["headline-text"]}>Better History</h2>
              <h3 className={styles["sub-heading"]}>
                Refresh Page Automatically With Page Monitor
              </h3>
            </div>
            <div className={styles.margin}>
              <p className={cn("text-pretty", styles["para-text"])}>
                Welcome to Auto Refresh Plus – Your ultimate solution for
                automating webpage refreshes and monitoring dynamic content
                effortlessly. With a suite of powerful features, Auto Refresh
                Plus enhances your browsing experience by ensuring you&apos;re
                always up-to-date with the latest changes on your favorite
                websites
              </p>
            </div>
            <div className={styles.margin}>
              <HeroBtn />
              <p className='mt-8 text-[#071d2b]'>
                Also available for{" "}
                <a
                  href='#'
                  className='font-light underline hover:no-underline mr-1'
                >
                  Edge,
                </a>{" "}
                <a href='#' className='font-light underline hover:no-underline'>
                  Opera
                </a>
              </p>
              <HeroRating />
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
