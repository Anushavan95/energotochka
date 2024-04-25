import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul>
            <li>сертификаты и иные документы</li>
            <li>политика использования и обработки данных</li>
            <li>политика использования и обработки куки (англ. “cookies”)</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>российская федерация,</li>
            <li>московская область,</li>
            <li>город москва</li>
            <li>огрн: 1234567890123</li>
            <li>ООО “Энерго-Точка”</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>+7 937 475-75-95</li>
            <li>info@energotochka.com</li>
          </ul>
        </div>
      </div>

      <p>
        настоящий интернет-сайт, а также вся информация о товарах и об услугах,
        предоставленная на нём, носит исключительно информационный характер и ни
        при каких условиях не является публичной офертой, определяемой
        действующим российским законодательством
      </p>
    </footer>
  );
};