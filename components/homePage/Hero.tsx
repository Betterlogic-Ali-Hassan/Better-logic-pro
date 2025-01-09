import React from "react";
import styles from "./hero.module.css";
import HeroBtn from "./heroBtn/HeroBtn";
import Slider from "./heroSlider/Slider";
import HeroRating from "./HeroRating";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className={styles.body}>
      <section className='my-container'>
        <div className={styles["hero-content"]}>
          <div className={styles["text-group"]}>
            <div className='flex gap-2 items-center text-center'>
              <h1 className={styles["eyebrow-text"]}>Chrome Extension</h1>
            </div>

            <div className={styles.margin}>
              <h2 className={styles["headline-text"]}>Better History</h2>
              <h3 className={styles["sub-heading"]}>
                Organize and Manage Your Browsing History Effortlessly
              </h3>
            </div>
            <div className={styles.margin}>
              <p className={cn("text-pretty", styles["para-text"])}>
                Welcome to Better History – Your ultimate tool for enhancing
                your browser’s history management. With an intuitive interface
                and powerful features, Better History lets you search, delete,
                and organize your browsing history with ease. Stay in control of
                your online activity and make your browsing experience seamless.
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
