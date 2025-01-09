import React from "react";
import styles from "./installexe.module.css";
import Image from "next/image";
import HeroBtn from "../homePage/heroBtn/HeroBtn";

const InstallExe = () => {
  return (
    <section className={styles.wrapper}>
      <div className='my-container'>
        <div className={styles.main}>
          <div className={styles.wrap}>
            <div className={styles.image}>
              <div className={styles["img-wrap"]}>
                <Image
                  src='https://www.zen.com/wp-content/uploads/2022/08/qrcodesection_zen.svg'
                  alt='img'
                  height={140}
                  width={140}
                  className=''
                />
              </div>
            </div>
            <h2 className={styles.heading}>
              Take Control with Better History - Install Now
            </h2>
            <div className={styles.description}>
              <p>
                Easily manage and organize your browsing history with Better
                History. Install now and experience smarter history management!
              </p>
            </div>
            <div className='module-button_repeater inner-wrapper'></div>
            <div className='flex items-center justify-center gap-6 pb-[56px]'>
              <HeroBtn />
              <HeroBtn
                className='bg-blue-500 !border-blue-500 '
                title='Add to Edge'
                icon='/edge.png'
              />
              <HeroBtn
                title='Add to Firefox'
                icon='/firefox.png'
                className='bg-red-500 !border-red-500 '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallExe;
