import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";

function FoodCard({
  recipe,
  onOpenModal,
  handleHeartClick,
  isFavoriteProp,
  showHeart,
}) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    handleHeartClick(recipe);
  };

  return (
    <div className="flex flex-col justify-center w-64 p-4 rounded-lg bg-gray-50 hover:scale-105">
      <img
        src={recipe.strCategoryThumb}
        alt={recipe.strCategory}
        className="mb-4 bg-gray-300 rounded-md cursor-pointer"
        onClick={() => onOpenModal(recipe)}
      />
      <div className="flex items-center text-sm text-gray-600">
        {recipe.strCategory}
        <span className="ml-1 cursor-pointer" onClick={toggleFavorite}>
          {showHeart &&
            (isFavorite ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <IoHeartOutline className="text-red-900" />
            ))}
        </span>
      </div>
      <div
        className="mt-1 text-lg font-semibold text-black cursor-pointer"
        onClick={() => onOpenModal(recipe)}
      >
        {recipe.strCategoryDescription.slice(0, 50)}...
      </div>
    </div>
  );
}

export default FoodCard;
