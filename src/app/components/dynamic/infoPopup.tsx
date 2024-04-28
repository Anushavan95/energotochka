"use client";
import { useState } from "react";
interface Iinfo {
  title?: string;
  btnText?: string;
  children?: React.ReactNode;
}
const InfoPopup: React.FC<Iinfo> = ({ title, children, btnText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <div className="info-popup-container">
      {/* Modal Trigger Button */}
      <p onClick={openModal} className="read_state">
        {btnText}
      </p>

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
          </div>
        </div>
      )}
    </div>
  );
};
export default InfoPopup;
