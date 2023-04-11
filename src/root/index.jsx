import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import HomeCategoryPage from "../pages/HomeCategory";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Navigate to='/home' />} />
        <Route path="/home" index element={<HomePage />} />
        <Route path="/home/:category" element={<HomeCategoryPage />} />
        <Route path="/details/:lang/:news_id" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default Root;
