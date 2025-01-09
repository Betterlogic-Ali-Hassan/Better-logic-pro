import Link from "next/link";
import React from "react";
import styles from "./heroBtn.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
const HeroBtn = () => {
  return (
    <div className=' mt-4'>
      <div className='flex items-start justify-center h-[3rem]'>
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
      </div>
    </div>
  );
};

export default HeroBtn;
