import React from "react";
import Image from "next/image";
import Point from "../../assets/images/point.png";
import InfoPopup from "../dynamic/infoPopup";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_card">
        <p className="banner_text">
          Помогаем предпринимателям и компаниям открыть <br /> новый рынок с
          безграничными возможностями
        </p>
        {/* <button className="banner_button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Посмотреть коммерческое предложение
        </button> */}
        <InfoPopup btnText={`Посмотреть коммерческое предложение`} />
      </div>
      <div className="banner_card second_banner ">
        <Image
          src={Point}
          width={190}
          height={500}
          alt="Electronica of the author"
        />
        <div>
          <h3 className="banner_title text-3xl font-bold mb-4">WM-DCEV</h3>
          <p className="banner_info">
            Настенное зарядное устройство заряжает за 1 час — 165 километров
            пути
          </p>
          <span className="banner_more">Подробнее</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
