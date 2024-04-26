import React from "react";
import Tabs from "../../dynamic/tabs";

const TabsCard = () => {
  const tabs = [
    {
      title: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      title: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    // Add more tabs as needed
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsCard;
