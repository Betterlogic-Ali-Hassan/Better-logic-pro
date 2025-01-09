import React from "react";
import styles from "./article.module.css";
import ArticleContent from "./ArticleContent";
const Article = () => {
  return (
    <div className='my-container my-8'>
      <div className={styles.wrapper}>
        <div className={styles["case-wrap"]}>
          <ArticleContent />
        </div>
      </div>
    </div>
  );
};

export default Article;
