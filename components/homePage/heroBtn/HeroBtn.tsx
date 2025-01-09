import Link from "next/link";
import React from "react";
import styles from "./heroBtn.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
const HeroBtn = () => {
  return (
    <div className='flex text-center flex-col gap-6 mt-4'>
      <div className='flex items-start justify-center gap-4 flex-wrap'>
        <Link
          href='#'
          className={cn(
            "bg-black text-white hover:bg-[#60cdff] !flex items-center gap-2 !max-h-[52.28px] !min-h-[52.28px]",
            styles["hero-btn"]
          )}
        >
          <Image src='/chrome.png' height={30} width={30} alt='icon' />
          Add to Chrome
        </Link>
        <Link href='#' className={styles["hero-btn"]}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HeroBtn;
