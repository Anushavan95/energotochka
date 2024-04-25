import React from "react";
import Blogs from "./blogs/blogs";
import Cards from "./card/cards";
import FAQs from "./FAQ/faqs";

const Main = () => {
  return (
    <div>
      <Cards />
      <FAQs />
      <Blogs />
    </div>
  );
};

export default Main;
