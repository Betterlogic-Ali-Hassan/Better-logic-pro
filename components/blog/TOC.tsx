"use client";

import React, { useEffect, useState, useCallback } from "react";
import { IoListSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import styles from "./blog.module.css";
import { headings } from "@/constant/headings";

interface Heading {
  href: string;
  title: string;
}

const SCROLL_OFFSET = 200;

export default function TOC() {
  const [activeId, setActiveId] = useState<string>("");

  const handleScroll = useCallback(() => {
    const headingOffsets = headings
      .map((heading) => {
        const element = document.querySelector(heading.href);
        return element
          ? { id: heading.href, top: element.getBoundingClientRect().top }
          : null;
      })
      .filter((offset): offset is { id: string; top: number } => !!offset);

    const activeHeading = headingOffsets.reduce((prev, current) =>
      Math.abs(current.top - SCROLL_OFFSET) < Math.abs(prev.top - SCROLL_OFFSET)
        ? current
        : prev
    );

    if (activeHeading && activeHeading.id !== activeId) {
      setActiveId(activeHeading.id);
    }
  }, [activeId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(href);
    }
  };

  return (
    <div className={cn("mb-10", styles["grid-item0"])}>
      <h3 className='flex items-center gap-3 text-2xl font-light mb-6'>
        <IoListSharp size={24} aria-hidden='true' />
        In this article
      </h3>
      <nav aria-label='Table of Contents'>
        <ul className={cn("relative", styles.list)}>
          {headings.map((item: Heading) => (
            <li key={item.href}>
              <div
                className={cn(
                  "relative",
                  styles.item,
                  activeId === item.href && styles.active
                )}
              >
                <a
                  href={item.href}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                >
                  {item.title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
