import React from "react";

const Header = ({ blogData }) => {
  return (
    <header>
      <h1>{blogData.name}</h1>
    </header>
  );
};

export default Header;
