"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./mobile.module.css";
import { FiMenu } from "react-icons/fi";
import Button from "@/components/ui/button/Button";
import { ChevronDown, X } from "lucide-react";
import MenuItems from "../nav/menu/MenuItems";

const MobileHeader = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const handleToggle = () => {
    setSheetOpen(!sheetOpen);
  };
  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className='flex items-center justify-between w-full lg:hidden '>
      <div></div>
      <div className='flex items-center'>
        <div className='flex items-center h-[3rem] relative max-w-max '>
          <Button className='ml-[12px] !py-[5px] !px-4 max-h-[42px] !text-base justify-center'>
            Log In
          </Button>
          <Button
            className='ml-[9px] mr-5 !py-[5px] !px-4 max-h-[42px] !text-base justify-center '
            btnDark
          >
            Sign Up
          </Button>
        </div>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger onClick={handleToggle}>
            {sheetOpen ? <X size={22} /> : <FiMenu size={22} />}
          </SheetTrigger>
          <SheetContent
            className='overflow-y-auto'
            side='left'
            style={{ zIndex: "1100", height: "calc(100vh - 76px)" }}
          >
            <SheetHeader>
              <nav>
                <ul className={styles.list}>
                  {["Personal", "Small Business", "Enterprise"].map(
                    (item, index) => (
                      <li
                        key={index}
                        onClick={() => toggleExpand(index)}
                        className='flex flex-col !items-start'
                      >
                        <div className='flex items-center justify-between w-full'>
                          {item}
                          <ChevronDown
                            size={24}
                            className={`transition-transform duration-300 ${
                              expanded === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {expanded === index && <MenuItems />}
                      </li>
                    )
                  )}
                  <li>
                    <button>Developer</button>
                  </li>
                </ul>
                <button className='mx-6 py-6 font-medium text-lg cursor-pointer flex items-start'>
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
