import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArScreenPage from "./pages/ArScreenPage";
import UrbanMiningGamePage from "./pages/UrbanMiningGamePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ar" element={<ArScreenPage />} />
      <Route path="/game" element={<UrbanMiningGamePage />} />
    </Routes>
  );
};

export default App;


