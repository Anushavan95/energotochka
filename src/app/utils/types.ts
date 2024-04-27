import React from "react";
// import Arrow from "../assets/icon/Arrow";
import Card1Image from "../assets/images/card1.png";

import Card2Image from "../assets/images/card2.png";
import Card3Image from "../assets/images/card3.png";
import Card4Image from "../assets/images/card4.png";
import Card5Image from "../assets/images/card5.png";
import Card6Image from "../assets/images/card6.png";
import Card7Image from "../assets/images/card7.png";
import Card8Image from "../assets/images/card8.png";
import Card9Image from "../assets/images/card9.png";
import Card10Image from "../assets/images/card10.png";
import Card11Image from "../assets/images/card11.png";
import Card12Image from "../assets/images/card12.png";
import Card13Image from "../assets/images/card13.png";
import Card14Image from "../assets/images/card14.png";
import Card15Image from "../assets/images/card15.png";
import Card16Image from "../assets/images/card16.png";
export const descriptionBlock: string | React.ReactNode =
  "Все зарядные станции, поставляемые нами совместимы с различными моделями автомобилей, например такие как «Zeekr», «Volkswagen», «Tesla», «NIO», «Nissan», «Lixiang», «Mercedes», «BYD», «BMW» и прочее";

export const listDescriptionBlock: any = `<ul>
<li> подключение через «Bluetooth»</li>
<li> регулирование заряда тока</li>
<li> управление через приложение</li>
<li> записывание истории заряда</li>
</ul>`;

export const secureDescriptionBlock: any = `<ul>
<li>  защита от перенапряжения</li>
<li>защита от перегревания</li>
<li>защита от недонапряжения</li>
<li>защита от молнии и непогоды</li>
</ul>`;

export const blogText1:
  | string
  | React.ReactNode = `<p>Зарядное устройство для электромобилей уровня 1, подключается к стандартной бытовой розетке на 120 В и обеспечивает ...</p>`;

export const blogText2:
  | string
  | React.ReactNode = `<p>Проблемы совместимости могут возникнуть, если зарядная станция не имеет соответствующих разъемов или уровней мощности, необходимых ...</p>`;

export const blogText3:
  | string
  | React.ReactNode = `<p>Выходная мощность зарядной станции является наиболее важным фактором, влияющим на скорость зарядки. 
  Ведь, зарядные устройства большей ...</p>`;

export type tabsCardType = {
  image: any;
  title: string;
  description: string;
  contentTitle?: string;
  contentDescription?: string;
};

export const tabsCardElements: tabsCardType[] = [
  {
    image: Card1Image,
    title: "BCPP-A1",
    description: `  медленная станция переменного тока
    3,7 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription: `Портативное автомобильное зарядное устройство,
      c простым для использования способом питания электромобилей, 
      мощностью от 7.4 кВт до 22 кВт, значительно упрощает способ зарядки`,
  },
  {
    image: Card2Image,
    title: "BCPP-A2",
    description: `медленная станция переменного тока 
    от 7.4 кВт до 22 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription:
      "Зарядное устройство переменного тока EVB имеет гибкий диапазон выходной мощности от 7,4 до 22 кВт через розетку типа 2, соответствующую стандарту IEC 62196-2, что подходит к большинству категорий авто",
  },
  {
    image: Card3Image,
    title: "BCPM-A2",
    description: `   медленная станция переменного тока
    от 7.4 кВт до 22 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription:
      "Зарядное устройство переменного тока EVB имеет гибкий диапазон выходной мощности от 7,4 до 22 кВт через розетку типа 2, соответствующую стандарту IEC 62196-2, что подходит к большинству категорий авто",
  },
  {
    image: Card13Image,
    title: "BCP-A1",
    description: `  медленная станция переменного тока
    3,7 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription: `Зарядная станция переменного тока EVB мощностью 22 кВт типа 2 — это настенное зарядное устройство для электромобилей со степенью защиты IP55/65, которое обеспечивает безопасную и надежную зарядку уровня 2`,
  },
  {
    image: Card14Image,
    title: "BCPP-A2",
    description: `медленная станция переменного тока 
    от 7.4 кВт до 22 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription: `Портативное автомобильное зарядное устройство,
      c простым для использования способом питания электромобилей, 
      мощностью от 7.4 кВт до 22 кВт, значительно упрощает способ зарядки`,
  },
  {
    image: Card15Image,
    title: "BCPCV",
    description: `   медленная станция переменного тока
    2 пистолета по 22 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription:
      "Зарядное устройство EVB для электромобилей с двумя розетками мощностью 22 кВт каждая позволяет одновременную и быструю зарядку двух электромобилей",
  },
  {
    image: Card16Image,
    title: "BCPCV",
    description: `   медленная станция переменного тока
    от 7.4 кВт до 22 кВт в 1 час`,
    contentTitle:
      "Портативное зарядное устройство для электромобилей, универсальное",
    contentDescription:
      "Зарядное устройство переменного тока EVB имеет гибкий диапазон выходной мощности от 7,4 до 22 кВт через розетку типа 2, соответствующую стандарту IEC 62196-2, что подходит к большинству категорий авто",
  },
];

export const tabsCardElements2: tabsCardType[] = [
  {
    image: Card12Image,
    title: "BDC",
    description: `быстрая станция постоянного тока
        от 20 кВт до 40 кВт в 1 час`,
    contentTitle:
      "Настенное зарядное устройство для электромобилей, универсальное",
    contentDescription:
      "Зарядное устройство переменного тока EVB имеет гибкий диапазон выходной мощности от 7,4 до 22 кВт через розетку типа 2, соответствующую стандарту IEC 62196-2, что подходит к большинству категорий авто",
  },
  {
    image: Card4Image,
    title: "BDC",
    description: `быстрая станция постоянного тока
    от 20 кВт до 40 кВт в 1 час`,
  },
  {
    image: Card5Image,
    title: "BDDC",
    description: `быстрая станция постоянного тока
    от 60 кВт до 262 кВт в 1 час`,
  },
  {
    image: Card6Image,
    title: "BDC",
    description: `быстрая станция постоянного тока
    от 60 кВт до 120 кВт в 1 час`,
  },
  {
    image: Card7Image,
    title: "BADC",
    description: `быстрая станция постоянного тока 
    от 82 кВт до 262 кВт в 1 час`,
  },
  {
    image: Card8Image,
    title: "BADC",
    description: `медленная станция переменного тока
      от 7.4 кВт до 22 кВт в 1 час`,
  },
  {
    image: Card9Image,
    title: "BCPM-A2",
    description: `   медленная станция переменного тока
    от 320 кВт до 360 кВт в 1 час`,
  },
];

export const tabsCardElements3: tabsCardType[] = [
  {
    image: Card10Image,
    title: "CON",
    description: `  медленная станция переменного тока 
    от 60 кВт до 262 кВт в 1 час`,
  },
  {
    image: Card11Image,
    title: "DLB",
    description: `медленная станция переменного тока 
    от 60 кВт до 120 кВт в 1 час`,
  },
];
