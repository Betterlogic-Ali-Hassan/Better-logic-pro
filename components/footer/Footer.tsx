import React from "react";
import styles from "./footer.module.css";
import FooterLogo from "./footerLogo/FooterLogo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <FooterLogo />
        <div className='flex items-center justify-between p-0 m-0 flex-wrap float-none'>
          <ul className={cn("flex flex-wrap p-0 m-0 text-white", styles.list)}>
            <li>
              <a href='#'>Help</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Fees</a>
            </li>
            <li>
              <a href='#'>Security Center</a>
            </li>
            <li>
              <a href='#'>Privacy Center</a>
            </li>
            <li>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>Apps</a>
            </li>
            <li>
              <a href='#'>Enterprise</a>
            </li>
            <li>
              <a href='#'>Partners</a>
            </li>
          </ul>
          <div className='flex flex-row-reverse items-center mb-[1.25rem]'>
            <Link href='#'>
              <Image src='/flag.png' alt='flag' height={32} width={32} />
            </Link>
          </div>
        </div>
        <hr />
        <ul
          className={cn(
            "flex flex-wrap p-0 pt-[1.25rem] m-0 text-white",
            styles.list
          )}
        >
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Newsroom</a>
          </li>
          <li>
            <a href='#'>Fees</a>
          </li>
          <li>
            <a href='#'>Security Center</a>
          </li>
          <li>
            <a href='#'>Government Relations</a>
          </li>
          <li>
            <span className='text-gray-400'>© 1999–2025</span>
          </li>
          <li>
            <a href='#'>Shop</a>
          </li>
          <li>
            <a href='#'>Apps</a>
          </li>
          <li>
            <a href='#'>Enterprise</a>
          </li>
          <li>
            <a href='#'>Partners</a>
          </li>
          <li>
            <a href='#'>Partners</a>
          </li>
        </ul>
        <address className='text-sm not-italic text-white mt-[1.25rem]'>
          PayPal is located at 2211 N 1st St. San Jose, CA 95131
        </address>
      </div>
    </footer>
  );
};

export default Footer;
