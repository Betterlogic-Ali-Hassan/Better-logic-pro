import React from "react";
import styles from "./article.module.css";
import ArticleContent from "./ArticleContent";
import { cn } from "@/lib/utils";
const Article = () => {
  return (
    <div className='my-container relative mt-4'>
      <div className={styles.wrapper}>
        <div className={styles["case-wrap"]}>
          <ArticleContent />
        </div>
      </div>
      <h2
        className={cn(
          "!my-0 leading-0 absolute top-[3px] left-6 bg-white z-20 ",
          styles.heading,
          styles.wrapper
        )}
      >
        Overview
      </h2>
    </div>
  );
};

export default Article;
