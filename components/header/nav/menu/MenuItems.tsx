import React from "react";
import MenuCard from "./MenuCard";
import MenuListItem from "./menuListItem";
import style from "./menu.module.css";
const MenuItems = () => {
  return (
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
  );
};

export default MenuItems;
