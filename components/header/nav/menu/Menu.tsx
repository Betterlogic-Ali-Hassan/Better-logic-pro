"use client";
import React, { useState } from "react";
import styles from "../nav.module.css";
import style from "./menu.module.css";
import MenuCard from "./MenuCard";
import MenuListItem from "./menuListItem";
import { cn } from "@/lib/utils";
const Menu = ({ trigger }: { trigger: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "cursor-pointer hover:bg-hover hover:!text-black",
          styles["nav-item"]
        )}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {trigger}
      </div>
      {open && (
        <div className='absolute top-full z-50'>
          <div className={style["card-wrapper"]}>
            <div className={style["grid-wrapper"]}>
              <div className={style.top}>ALL-IN-ONE PLATFORM</div>
              <div className={style.wrapper}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((id, index) => (
                  <MenuCard key={id} selected={index === 0} />
                ))}
              </div>
            </div>
            <div className={style.divider}></div>
            <div className={style.wrap}>
              <div className={style.top}>INTEGRATIONS</div>
              <div className={style.links}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => (
                  <MenuListItem key={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
