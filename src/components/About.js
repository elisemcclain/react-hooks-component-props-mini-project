import React from "react";

const About = ({ blogData }) => {
  return (
    <aside className="about-blog">
      <div>
        {blogData.image ? (
          <img src={blogData.image} alt="blog-logo" />
        ) : (
          <img src="//via.placeholder.com/215" alt="blog-logo" />
        )}
      </div>
      <p>{blogData.about}</p>
    </aside>
  );
};

export default About;
