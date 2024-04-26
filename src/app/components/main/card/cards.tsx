import {
  descriptionBlock,
  listDescriptionBlock,
  secureDescriptionBlock,
} from "@/app/utils/types";
import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <div className="cards_container">
      <h3 className="cards_title">преимущества наших станций</h3>
      <section className="cards-list">
        <Card title={"Инновационность"} htmlContent={listDescriptionBlock} />
        <Card title={"Совместимость"} htmlContent={descriptionBlock} />
        <Card title={"Безопасность"} htmlContent={secureDescriptionBlock} />
      </section>
    </div>
  );
};

export default Cards;
