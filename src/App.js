import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route from react-router-dom
import Layout from "./components/Layout"; // Import the Layout component
import RandomPage from "./components/RandomPage"; // Import the RandomPage component
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Use self-closing syntax for <Route> */}
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/random" element={<RandomPage />} /> {/* Use self-closing syntax for <Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
