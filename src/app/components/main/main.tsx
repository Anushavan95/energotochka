import React from "react";
import About from "./about/about";
import Blogs from "./blogs/blogs";
import Cards from "./card/cards";
import FAQs from "./FAQ/faqs";
import "./main.scss";
const Main = () => {
  return (
    <div className="layout-container">
      <About />
      <Cards />
      <FAQs />
      <Blogs />
    </div>
  );
};

export default Main;
