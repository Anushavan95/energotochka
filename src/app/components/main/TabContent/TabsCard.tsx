import Image from "../../../../../node_modules/next/image";
import Tabs from "../../dynamic/tabs";

import {
  tabsCardElements,
  tabsCardElements2,
  tabsCardElements3,
  tabsCardType,
} from "@/app/utils/types";
import CardContent from "./cardContent";

const TabsCard = () => {
  const tabs = [
    {
      title: "медленные переменного тока",
      content: (
        <div className="cards_tab">
          <CardContent tabCard={tabsCardElements} />
        </div>
      ),
    },
    {
      title: "быстрые постоянного тока",
      content: (
        <div className="cards_tab">
          <CardContent tabCard={tabsCardElements2} />
        </div>
      ),
    },
    {
      title: "дополнительное",
      content: (
        <div className="cards_tab">
          <CardContent tabCard={tabsCardElements3} />
        </div>
      ),
    },
    {
      title: "напольные станции",
      content: <></>,
    },
    {
      title: "настенные станции",
      content: <></>,
    },
    {
      title: " портативные станции",
      content: <></>,
    },
    // Add more tabs as needed
  ];
  return (
    <div className="card-tab-container">
      <h3 className="card-tab-title text-3xl font-bold mb-4">
        каталог со станциями
      </h3>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsCard;
