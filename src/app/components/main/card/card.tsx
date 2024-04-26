import React from "react";
interface Iprops {
  title: string;
  htmlContent?: string | any;
}
const Card: React.FC<Iprops> = ({ title, htmlContent }) => {
  return (
    <div className="full-card max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h3 className="full-card-title font-bold text-xl mb-2  text-3xl font-bold mb-4">
          {title}
        </h3>
        <div className="line"></div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default Card;
