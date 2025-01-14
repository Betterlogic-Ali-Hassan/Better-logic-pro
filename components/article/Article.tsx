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
          <h2
            className={cn(
              "!mb-0 min-[1440px]:!mt-[-14px] !mt-1 absolute top-[-38px] left-6 bg-white z-20 ",
              styles.heading2
            )}
          >
            Overview
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Article;
