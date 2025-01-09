import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./mobile.module.css";
import { FiMenu } from "react-icons/fi";
import Button from "@/components/ui/button/Button";
import Logo from "../logo/Logo";
import { ChevronDown } from "lucide-react";

const MobileHeader = () => {
  return (
    <div className='flex items-center justify-between w-full'>
      <Logo />
      <div className='flex items-center'>
        <div className='flex items-center h-[3rem] relative max-w-max '>
          <Button className='ml-[12px]'>Log In</Button>
          <Button className='ml-[9px] mr-6' btnDark>
            Sign Up
          </Button>
        </div>
        <Sheet>
          <SheetTrigger>
            <FiMenu size={22} />
          </SheetTrigger>
          <SheetContent
            className=''
            side='left'
            style={{ zIndex: "1100", height: "calc(100vh - 88px)" }}
          >
            <SheetHeader>
              <nav>
                <ul className={styles.list}>
                  <li>
                    Personal
                    <ChevronDown size={24} />
                  </li>
                  <li>
                    Small Business <ChevronDown size={24} />
                  </li>
                  <li>
                    Enterprise <ChevronDown size={24} />
                  </li>
                  <li>
                    <button>Developer</button>
                  </li>
                </ul>
                <button className='mx-6 py-6 font-medium text-lg cursor-pointer'>
                  Help
                </button>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileHeader;
