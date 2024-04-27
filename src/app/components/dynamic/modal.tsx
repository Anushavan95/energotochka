"use client";
import { useState } from "react";
import Image from "../../../../node_modules/next/image";
interface Imodal {
  setContent: (item: any) => void;
  item: any;
}
const Modal: React.FC<Imodal> = ({ setContent, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setContent(item);
  };
  const closeModal = () => setIsOpen(false);
  console.log(item, "iteemm");
  return (
    <div>
      {/* Modal Trigger Button */}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Подробнее
      </button>

      {/* Modal Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

      {/* Modal Dialog Box */}
      {isOpen && (
        <div className="modal-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-8 rounded z-50">
          <div className="modal-content">
            <Image className="rounded-t-lg" src={item.image} alt="" />

            <span
              onClick={closeModal}
              className="absolute top-0 right-0 cursor-pointer p-4"
            >
              ×
            </span>
            <h2 className="text-lg font-bold mb-4">{item.title}</h2>
            <p>{item.contentTitle}</p>
            <p>{item.contentDescription}</p>

            <p>{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
