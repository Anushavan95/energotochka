import { blogText1, blogText2, blogText3 } from "@/app/utils/types";
import React from "react";
import Card from "../card/card";

const Blogs = () => {
  return (
    <div className="blogs_container">
      <h3 className="text-3xl font-bold mb-4">блог компании о важном</h3>
      <div className="blogs_list">
        <Card title="3 уровня зарядки электромобилей" htmlContent={blogText1} />
        <Card title="5 факторов выбор уровня зарядки" htmlContent={blogText2} />
        <Card
          title="3 факторов, влияющие на скорость зарядки электромобилей"
          htmlContent={blogText3}
        />
      </div>
    </div>
  );
};

export default Blogs;
