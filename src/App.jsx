import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Story from "./components/Story";
import Timeline from "./components/Timeline";

import Experience from "./components/Experience/Experience";
import Preparation from "./components/Preparation";




const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/Morgan" element={<Home />} />
        {/* <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} /> */}
        <Route path="/Morgan/story" element={<Story />} />
        <Route path="/Morgan/timeline" element={<Timeline />} />
       
        <Route path="/Morgan/experience" element={<Experience />} />
        <Route path="/Morgan/preparation" element={<Preparation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
