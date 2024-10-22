import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";

function FoodCard({ recipe, onOpenModal }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation(); // Prevent click from propagating to parent div
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex flex-col justify-center w-64 p-4 rounded-lg bg-gray-50">
      <img
        src={recipe.strCategoryThumb}
        alt={recipe.strCategory}
        className="mb-4 bg-gray-300 rounded-md cursor-pointer"
        onClick={() => onOpenModal(recipe)} // Open modal on image click
      />
      <div className="flex items-center text-sm text-gray-600">
        {recipe.strCategory}
        <span className="ml-1 cursor-pointer" onClick={handleHeartClick}>
          {isFavorite ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <IoHeartOutline className="text-red-900" />
          )}
        </span>
      </div>
      <div
        className="mt-1 text-lg font-semibold text-black cursor-pointer"
        onClick={() => onOpenModal(recipe)} // Open modal on description click
      >
        {recipe.strCategoryDescription.slice(0, 50)}...{" "}
        {/* Truncated description */}
      </div>
    </div>
  );
}

export default FoodCard;
