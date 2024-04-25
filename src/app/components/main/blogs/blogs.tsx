import { blogText1, blogText2, blogText3 } from "@/app/utils/types";
import React from "react";
import Card from "../card/card";

const Blogs = () => {
  return (
    <div>
      <h2>блог компании о важном</h2>
      <Card title="3 уровня зарядки электромобилей" htmlContent={blogText1} />
      <Card title="5 факторов выбор уровня зарядки" htmlContent={blogText2} />
      <Card
        title="3 факторов, влияющие на скорость зарядки электромобилей"
        htmlContent={blogText3}
      />
    </div>
  );
};

export default Blogs;