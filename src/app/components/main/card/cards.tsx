import {
  descriptionBlock,
  listDescriptionBlock,
  secureDescriptionBlock,
} from "@/app/utils/types";
import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <div>
      <h3>преимущества наших станций</h3>
      <Card title={"Инновационность"} htmlContent={listDescriptionBlock} />
      <Card title={"Совместимость"} htmlContent={descriptionBlock} />
      <Card title={"Безопасность"} htmlContent={secureDescriptionBlock} />
    </div>
  );
};

export default Cards;
