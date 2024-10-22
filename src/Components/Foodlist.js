import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import Modal from "./Modal";

const Foodlist = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "Pork", "Beef", "Chicken", "Lamb", "Pasta"];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
        setFilteredCategories(data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    filterCategories(filter);
  };

  const filterCategories = (filter) => {
    if (filter === "All") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.strCategory.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  if (loading) {
    return <div className="items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-Orange-50">
      <div className="items-center justify-center p-4 align-middle">
        <div className="flex items-center gap-4 p-4 space-x-4 justify-left ">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-full w-[90px] h-[45px] outline-1 outline-red-500 outline  font-semibold   ${
                activeFilter === filter
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 hover:bg-red-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-4 justify-left">
        {filteredCategories.map((category) => (
          <div key={category.idCategory}>
            <FoodCard recipe={category} onOpenModal={handleCardClick} />
          </div>
        ))}
      </div>
      {selectedCategory && (
        <Modal category={selectedCategory} onClose={closeModal} />
      )}
    </div>
  );
};

export default Foodlist;
