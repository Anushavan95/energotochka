import React from "react";
import InfoPopup from "../../dynamic/infoPopup";

interface Iprops {
  title: string;
  htmlContent?: string | any;
  children?: React.ReactNode;
}
const Card: React.FC<Iprops> = ({ title, htmlContent, children }) => {
  return (
    <div className="full-card max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h3 className="full-card-title font-bold text-xl mb-2  text-3xl font-bold mb-4">
          {title}
        </h3>
        <div className="line"></div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {children}
      </div>
    </div>
  );
};

export default Card;
