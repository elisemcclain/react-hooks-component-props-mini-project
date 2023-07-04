import React from "react";
import Article from "./Article";

const ArticleList = ({ blogData }) => {
  const article = blogData.posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return <main>{article}</main>;
};

export default ArticleList;
