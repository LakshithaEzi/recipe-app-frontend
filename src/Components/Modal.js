import React, { useEffect, useRef, useState } from "react";

const Modal = ({ category, onClose }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
      document.body.style.overflow = "";
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={modalRef}
        className={`w-1/2 p-6 bg-white rounded-lg transition-transform transform ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="float-right text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          ✕
        </button>
        <div className="flex">
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="w-64 h-64 mr-4 rounded-md"
          />
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {category.strCategory}
            </h2>
            <p className="mb-4 text-gray-700">
              {category.strCategoryDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
