import Link from "next/link";
import React from "react";
import styles from "./heroBtn.module.css";
import { cn } from "@/lib/utils";
const HeroBtn = () => {
  return (
    <div className='flex text-center flex-col gap-6'>
      <div className='flex items-start justify-center gap-4 flex-wrap'>
        <Link
          href='#'
          className={cn(
            "bg-black text-white hover:bg-[#60cdff] ",
            styles["hero-btn"]
          )}
        >
          Get the App
        </Link>
        <Link href='#' className={styles["hero-btn"]}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HeroBtn;
