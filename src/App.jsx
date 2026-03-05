import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";

import Rotation from "./components/Rotation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Rotation />
    </>
  );
}

export default App;
