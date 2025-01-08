"use client";
import { ChevronDown } from "lucide-react";
import styles from "../nav.module.css";
import style from "./menu.module.css";
import MenuCard from "./MenuCard";
import MenuListItem from "./menuListItem";
import { cn } from "@/lib/utils";

interface MenuProps {
  trigger: string;
  menuId: number;
  activeMenu: number | null;
  setActiveMenu: React.Dispatch<React.SetStateAction<number | null>>;
}

const Menu = ({ trigger, menuId, activeMenu, setActiveMenu }: MenuProps) => {
  const isOpen = activeMenu === menuId;

  return (
    <div
      className={cn("relative")}
      onMouseEnter={() => setActiveMenu(menuId)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        className={cn(
          "cursor-pointer hover:bg-hover hover:!text-black flex items-center",
          styles["nav-item"]
        )}
      >
        {trigger}
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-all duration-200 ",
            isOpen && "rotate-180"
          )}
        />
      </div>
      {isOpen && (
        <div className='absolute top-full z-50 '>
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
    </div>
  );
};

export default Menu;
