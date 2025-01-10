"use client";
import { ChevronDown } from "lucide-react";
import styles from "../nav.module.css";
import { cn } from "@/lib/utils";
import MenuItems from "./MenuItems";

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
          <MenuItems />
        </div>
      )}
    </div>
  );
};

export default Menu;
