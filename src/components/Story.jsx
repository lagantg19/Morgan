import React from "react";
import { motion } from "framer-motion";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import Navbar from "./Navbar";

const Story = () => {
  return (
    <div className=""style={{ backgroundColor: "pink" }}>
      {<Navbar />}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:3}}
        className="container-fluid"
        
      >
        <div className="row ">
          <div className="col-12 mt-5 d-flex justify-content-center">
            <h1>Our Story</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <img
                src={pic2}
                style={{ height: "700px", width: "700px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-6 d-flex justify-content-end ">
            <img
              src={pic1}
              style={{ height: "700px", width: "700px", borderRadius: "50%" }}
            />
          </div>
          <div className="col-6 d-flex justify-content-start ">
            <img
              src={pic3}
              style={{ height: "700px", width: "700px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
