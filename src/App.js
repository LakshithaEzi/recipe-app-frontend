import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Foodlist from "./Pages/Foodlist";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Favourites from "./Pages/Favourites";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Foodlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
