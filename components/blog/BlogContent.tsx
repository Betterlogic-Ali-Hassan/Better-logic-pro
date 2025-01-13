import React from "react";
import BlogPost from "./BlogPost";
import Button from "../ui/button/Button";
import { cn } from "@/lib/utils";
import style from "./blog.module.css";
const BlogContent = () => {
  return (
    <div className='blog-container'>
      <div
        className={cn(
          "sm:mt-12 mt-0 sm:mb-10 mb-6 min-[1440px]:gap-x-16 lg:gap-x-12 sm:gap-x-10 gap-x-[28px]",
          style.wrap
        )}
      >
        <div
          className={cn(
            "sticky top-[136px] self-start sm:mt-[40px] lg:block hidden'",
            style["grid-item"]
          )}
        >
          <div className='lg:block hidden'>
            <h3 className='text-xl font-light'>
              Learn more about Chrome Enterprise Core
            </h3>
            <p className='text-sm text-[#5f6368] mt-3 mb-4'>
              Powerful and flexible management capabilities both in the cloud
              and on premises, at no additional cost.
            </p>
            <Button btnDark>Learn more</Button>
          </div>
        </div>
        <div className={style["grid-item-2"]}>
          <BlogPost />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
