import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


import Timeline from "./components/Timeline";

import Experience from "./components/Experience/Experience";
import Preparation from "./components/Preparation";
import Gallery from "./components/Gallery";





const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/Morgan" element={<Home />} />
        {/* <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} /> */}
        
        <Route path="/Morgan/timeline" element={<Timeline />} />
       
        <Route path="/Morgan/experience" element={<Experience />} />
        <Route path="/Morgan/preparation" element={<Preparation />} />
        <Route path="/Morgan/gallery" element={<Gallery />} />
        {/* <Route path="/Morgan/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
