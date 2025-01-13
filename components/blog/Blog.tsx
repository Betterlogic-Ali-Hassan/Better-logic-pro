import React from "react";
import HeroHead from "../homePage/HeroHead";
import styles from "@/components/homePage/hero.module.css";
import Image from "next/image";
import { icons } from "@/constant/social";
import Link from "next/link";
import BlogContent from "./BlogContent";
import { cn } from "@/lib/utils";
import style from "./blog.module.css";
const Blog = () => {
  return (
    <div className={styles.body}>
      <section className='my-container'>
        <div className={styles["hero-content"]}>
          <div className={styles["text-group"]}>
            <HeroHead />
            <span className='mt-1 text-[#5f6368]'>Jan 13, 2025</span>
          </div>
        </div>
      </section>
      <div className='relative mb-8 h-full'>
        <div className='blog-container h-full absolute right-0 left-0'>
          <div className='flex justify-end -mr-12 mb-0 h-full'>
            <div className='self-start top-[136px] sticky'>
              <div className='flex flex-wrap max-w-full'>
                <div
                  className='flex items-center flex-wrap self-center m-0 '
                  style={{ flex: "0 0 100%" }}
                >
                  <ul className='flex flex-nowrap flex-1 max-w-full flex-col'>
                    {icons.map((item, i) => (
                      <li
                        key={i}
                        className='h-12 w-12 flex items-center justify-center hover:bg-[#f4f4f4] rounded-full cursor-pointer'
                      >
                        <Link href='#'>{item.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='mt-12'>
          <div className='blog-container'>
            <div className='flex'>
              <Image
                src='/chromeimg.png'
                alt='img'
                height={20000}
                width={20000}
                className='aspect-video rounded-[32px] max-h-[640px] object-cover border border-[#2021241a] w-full'
              />
            </div>
          </div>
        </section>
        <section className='blog-container'>
          <div className='my-6'>
            <div
              className={cn(
                "mt-12 mb-10 min-[1440px]:gap-x-16 lg:gap-x-12 sm:gap-x-10 gap-x-[28px]",
                style.wrap
              )}
            >
              <div className={style["grid-item-3"]}></div>
              <div className={style["grid-item-4"]}>
                <h3 className='font-medium'>Fletcher Oliver</h3>
                <p>Chrome Enterprise Customer Engineer</p>
              </div>
            </div>
          </div>
        </section>
        <BlogContent />
      </div>
    </div>
  );
};

export default Blog;
