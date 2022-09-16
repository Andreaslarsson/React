import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
    </Routes>
  </BrowserRouter>
);
