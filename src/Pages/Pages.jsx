import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./Project/Project";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/projects" element={<Project />}></Route>
    </Routes>
  );
};

export default Pages;
