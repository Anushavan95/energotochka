"use client";
import { tabsCardType } from "@/app/utils/types";
import React, { useState } from "react";
import Image from "../../../../../node_modules/next/image";
import Modal from "../../dynamic/modal";

interface Icard {
  tabCard: tabsCardType[];
}
const CardContent: React.FC<Icard> = ({ tabCard }) => {
  const [content, setContent] = useState<tabsCardType[] | null>(null);
  return (
    <>
      {tabCard?.map((item: tabsCardType, index: number) => {
        return (
          <div
            key={index}
            className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <Image className="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 card-title-catalog  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </a>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
                {/* медленная станция переменного тока <br />
                    3,7 кВт в 1 час */}
              </p>

              <Modal setContent={setContent} item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardContent;
