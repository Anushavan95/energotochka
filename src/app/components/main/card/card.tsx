import DoneIcon from "@/app/assets/icon/Done";
import React from "react";
import Text from "../../dynamic/Text";

interface Iprops {
  title: string;
  htmlContent?: boolean;
  children?: React.ReactNode;
  component?: React.ReactNode;
}
const Card: React.FC<Iprops> = ({
  title,
  htmlContent,
  component,
  children,
}) => {
  return (
    <div className="full-card max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h3 className="full-card-title font-bold text-xl mb-2  text-3xl font-bold mb-4">
          {title}
        </h3>
        <div className="line"></div>
        <div>{htmlContent ? <>{component}</> : null}</div>
        {children}
      </div>
    </div>
  );
};

export default Card;
