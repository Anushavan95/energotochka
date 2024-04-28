import Tabs from "../../dynamic/tabs";

import {
  tabsCardElements,
  tabsCardElements2,
  tabsCardElements3,
} from "@/app/utils/types";
import CardContent from "./cardContent";
import Carousel from "../../../../../node_modules/react-multi-carousel/lib/types";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
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
          <Carousel responsive={responsive}>
            <CardContent tabCard={tabsCardElements3} />
          </Carousel>
          ;
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
