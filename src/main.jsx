import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/Register.jsx";
import Rotation from "./components/Rotation.jsx";
import RotationRep from "./Reports/RotationRep.jsx";
// import Test2 from "./components/Test2.jsx";
import Home from "./components/Home.jsx";
import Leaves from "./components/Leaves.jsx";
import OriginalDox from "./components/OriginalDox.jsx";
import LeaveRep from "./Reports/LeaveRep.jsx";
import { AnimatePresence, motion } from "framer-motion";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/rotation" element={<Rotation />} />
      <Route path="/home" element={<Home />} />
      <Route path="/leave" element={<Leaves />} />
      <Route path="/original" element={<OriginalDox />} />
      {/*
      <Route path="/detail/:id" element={<VehicalDetail />} /> */}

      {/* All Report */}
      <Route path="/report/:id" element={<RotationRep />} />
      <Route path="/document" element={<LeaveRep />} />
    </Routes>
  </BrowserRouter>,
  // <StrictMode>
  //   <App />
  // </StrictMode>,
);
