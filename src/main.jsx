import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/Register.jsx";
import Rotation from "./components/Rotation.jsx";
import RotationRep from "./Reports/RotationRep.jsx";
import Test2 from "./components/Test2.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/rotation" element={<Rotation />} />
      <Route path="/test" element={<Test2 />} />
      {/*
      <Route path="/detail/:id" element={<VehicalDetail />} /> */}

      {/* All Report */}
      <Route path="/report/:id" element={<RotationRep />} />
    </Routes>
  </BrowserRouter>,
  // <StrictMode>
  //   <App />
  // </StrictMode>,
);
