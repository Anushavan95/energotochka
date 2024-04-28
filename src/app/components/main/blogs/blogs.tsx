import { blogText1, blogText2, blogText3 } from "@/app/utils/types";
import React from "react";
import InfoPopup from "../../dynamic/infoPopup";
import Card from "../card/card";
import Blogs_1_content from "./blogs_1_content";
import Blogs_2_content from "./blogs_2_content";
import Blogs_3_content from "./blogs_3_content";

const Blogs = () => {
  return (
    <div className="blogs_container">
      <h3 className="text-3xl font-bold blogs_container_title mb-4">
        блог компании о важном
      </h3>
      <div className="blogs_list">
        <Card title="3 уровня зарядки электромобилей" htmlContent={false}>
          <div dangerouslySetInnerHTML={{ __html: blogText1 }} />

          <InfoPopup
            btnText="Читать статью"
            title={`3 уровня зарядки электромобилей: отраслевая аналитика`}
          >
            <Blogs_1_content />
          </InfoPopup>
        </Card>
        <Card title="5 факторов выбор уровня зарядки" htmlContent={false}>
          <div dangerouslySetInnerHTML={{ __html: blogText2 }} />

          <InfoPopup
            btnText=" Читать статью"
            title={`5 факторов для выбора уровня зарядки: отраслевая аналитика`}
          >
            <Blogs_2_content />
          </InfoPopup>
        </Card>
        <Card
          title="3 факторов, влияющие на скорость зарядки электромобилей"
          htmlContent={false}
        >
          <div dangerouslySetInnerHTML={{ __html: blogText3 }} />

          <InfoPopup
            btnText=" Читать статью"
            title={`3 факторов, которые влияют на скорость зарядки: отраслевая экономика`}
          >
            <Blogs_3_content />
          </InfoPopup>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
