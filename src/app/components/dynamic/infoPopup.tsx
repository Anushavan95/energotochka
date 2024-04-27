"use client";
import { useState } from "react";
interface Iinfo {
  title: string;
  //   levelText1?: string;
  children?: React.ReactNode;
}
const InfoPopup: React.FC<Iinfo> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <div className="info-popup-container">
      {/* Modal Trigger Button */}
      <button
        onClick={openModal}
        className="more-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded"
      >
        Читать статью
      </button>

      {/* Modal Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

      {/* Modal Dialog Box */}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-8 rounded z-50">
          <div>
            <span
              onClick={closeModal}
              className="absolute top-0 right-0 cursor-pointer p-4"
            >
              ×
            </span>
            <h3>{title}</h3>
            {children}
            {/* <p>{levelText1}</p> */}
            {/* <div className="content-modal-part">
              <Image className="rounded-t-lg" src={item.image} alt="" />
              <div>
                <p>{item.contentTitle}</p>
                <h2 className="text-lg font-bold mb-4">{item.title}</h2>
                <p>{item.contentDescription}</p>
                <button className="modal-content-btn">
                  Проконсультироваться
                </button>
                <div className="blogs-content">
                  {item.blog &&
                    item?.blog?.map((blog: blogType) => {
                      return (
                        <div className="blog-card">
                          <h3>{blog.title}</h3>
                          <p>{blog.desc}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default InfoPopup;
