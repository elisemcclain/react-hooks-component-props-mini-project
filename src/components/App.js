import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

const App = () => {
  return (
    <div className="App">
      <Header blogData={blogData} />
      <About blogData={blogData} />
      <ArticleList blogData={blogData} />
    </div>
  );
};

export default App;

// App
//   |_Header: <header> <h1>
//   |_About: <aside> <img> <p>
//   |_ArticleList: <main>
//       |_Article: <article> <h3> <small> <p>
