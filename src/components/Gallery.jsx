import React from "react";
import "./Gallery.css"; // Import the CSS file
import Navbar from "./Navbar";

const Gallery = () => {
  return (
    
    <section className="b">
    <Navbar/>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col image-one me-5"></div>
          <div className="col image-two me-5"></div>
          <div className="col image-five me-5"></div>
        </div>
        <div className="row mt-5 ">
          <div className="col image-three me-5"></div>
          <div className="col image-four me-5"></div>
          <div className="col image-six me-5"></div>
        </div>
        <div className="row mt-5 ">
          <div className="col image-seven me-5"></div>
          <div className="col image-eight me-5"></div>
          <div className="col image-nine me-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
