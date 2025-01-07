import React from "react";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";
import Link from "next/link";
interface Props {
  className?: string;
  children: React.ReactNode;
  btnDark?: boolean;
}
const Button = ({ className, children, btnDark }: Props) => {
  return (
    <Link
      href='#'
      className={cn(
        "max-h-[3rem]",
        styles.button,
        className,
        btnDark && styles["btn-fill"]
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
