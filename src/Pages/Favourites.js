import React, { useEffect, useState } from "react";
import FoodCard from "../Components/FoodCard";
import Modal from "../Components/Modal";

const Favourites = () => {
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchFavorites = async () => {
      if (token) {
        try {
          const response = await fetch("http://localhost:5000/api/favorites", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          const data = await response.json();
          const favoriteSet = new Set(data.map((item) => item.recipeId));
          setFavorites(favoriteSet);
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      }
    };

    fetchCategories();
    fetchFavorites();
  }, []);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };
  const handleHeartClick = async (recipe) => {};
  return (
    <div className="min-h-screen bg-Orange-50">
      <div className="flex flex-wrap gap-2 p-4 justify-left">
        {categories
          .filter((item) => favorites.has(item.idCategory))
          .map((category) => (
            <div key={category.idCategory}>
              <FoodCard
                recipe={category}
                onOpenModal={handleCardClick}
                handleHeartClick={handleHeartClick}
                isFavoriteProp={favorites.has(category.idCategory)}
                showHeart={token != null && token !== undefined}
              />
            </div>
          ))}
      </div>
      {selectedCategory && (
        <Modal category={selectedCategory} onClose={closeModal} />
      )}
    </div>
  );
};

export default Favourites;
