import React from "react";

const Article = ({ id, title, date, preview, minutes }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small className="date">{date}</small>
      <p className="preview">{preview}</p>
    </article>
  );
};

export default Article;
