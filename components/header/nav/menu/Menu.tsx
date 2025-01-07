import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import styles from "../nav.module.css";
import style from "./menu.module.css";
import MenuCard from "./MenuCard";
import MenuListItem from "./menuListItem";
const Menu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "p-0 m-0 bg-transparent hover:bg-hover !text-black flex   ",
                styles["nav-item"]
              )}
            >
              Personal
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className='bg-white py-6 px-4 border border-border shadow-md rounded-[16px] overflow-hidden '
              style={{ zIndex: 90000 }}
            >
              <div className=' flex gap-2'>
                <div className='border-r border-[#f2f0ed]'>
                  <span className='opacity-60 text-black tracking-[.06em] ml-4 mb-2 text-sm leading-[18px]'>
                    ALL-IN-ONE PLATFORM
                  </span>
                  <div className={style.wrapper}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((id, index) => (
                      <MenuCard key={id} selected={index === 0} />
                    ))}
                  </div>
                </div>
                <div className={style.wrap}>
                  <span className='opacity-60 text-black tracking-[.06em] ml-4 mb-2 text-sm leading-[18px]'>
                    INTEGRATIONS
                  </span>
                  <div className='flex flex-col'>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => (
                      <MenuListItem key={id} />
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Menu;
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
