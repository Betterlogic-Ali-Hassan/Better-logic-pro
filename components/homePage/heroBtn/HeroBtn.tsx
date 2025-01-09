import Link from "next/link";
import React from "react";
import styles from "./heroBtn.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface Props {
  title?: string;
  className?: string;
  icon?: string;
}
const HeroBtn = ({ title, className, icon }: Props) => {
  return (
    <div className=' mt-4'>
      <div className='flex items-start justify-center h-[3rem]'>
        <Link
          href='#'
          className={cn(
            "bg-black text-white hover:bg-[#60cdff] !flex items-center gap-2 !max-h-[62px] !min-h-[62px]",
            styles["hero-btn"],
            className
          )}
        >
          {!title && !icon && (
            <>
              <Image src='/chrome.png' height={30} width={30} alt='icon' />
              Add to Chrome
            </>
          )}
          {icon && <Image src={icon} height={30} width={30} alt='icon' />}
          {title && title}
        </Link>
      </div>
    </div>
  );
};

export default HeroBtn;
