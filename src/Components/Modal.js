import React, { useEffect, useRef, useState } from "react";

const Modal = ({ category, onClose }) => {
  const modalRef = useRef(); // Create a ref for the modal
  const [isOpen, setIsOpen] = useState(false); // Manage modal open state

  useEffect(() => {
    setIsOpen(true); // Set modal to open when mounted
    document.body.style.overflow = "hidden"; // Disable scrolling

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Close the modal if the click is outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick); // Attach event listener

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Cleanup event listener
      document.body.style.overflow = ""; // Re-enable scrolling on cleanup
    };
  }, [onClose]);

  // Handle modal close with transition
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose(); // Call onClose after transition
      document.body.style.overflow = ""; // Re-enable scrolling
    }, 300); // Delay to allow transition to complete
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
