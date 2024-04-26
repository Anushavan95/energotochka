import React from "react";
import Tabs from "../dynamic/tabs";
import About from "./about/about";
import Blogs from "./blogs/blogs";
import Cards from "./card/cards";
import FAQs from "./FAQ/faqs";
import "./main.scss";
import TabsCard from "./TabContent/TabsCard";
const Main = () => {
  return (
    <div className="layout-container">
      <About />
      <Cards />
      <TabsCard />
      <FAQs />
      <Blogs />
    </div>
  );
};

export default Main;
