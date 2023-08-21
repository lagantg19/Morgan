import React from "react";
import { Link } from "react-scroll";

import Navbar from "./Navbar";
import About from "./About";
import { motion } from "framer-motion";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section className="bg">
        <Navbar />

        <div
          className="container-fluid d-flex justify-content-center dream"
          style={{ color: "white" }}
        >
          <div className="row text-center">
            <div className="col-12 mt-5 ">
              <h1>Road To Cracking The First Dream Company</h1>
              <hr />
            </div>
            <div
              className="col-12 d-flex justify-content-center  "
              style={{ marginTop: "100px" }}
            >
              <a
                href="https://careers.jpmorgan.com/global/en/students/programs/code-for-good"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="row bg-transparent"
                  style={{ border: "1px solid lightblue" }}
                >
                  <div className="col-12 text-center text-white m">
                    <h1>Jp Morgan</h1>
                  </div>
                  <div className="col-12 text-center text-white">
                    <h1>Code for Good Hackathon 2023</h1>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid dream text-white " style={{marginTop:"20%"}}>
          <div className="row ">
          <div className="col-12  d-flex justify-content-center">
            <h1>BY,</h1>
          </div>
            <div className="col-12 d-flex justify-content-center">
              <h1>-Winner of JPMC CFG 2023 </h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <h1>-Only Person to get Full time offer from winning team</h1>
            </div>
          </div>
        </div>
      </section>
      
      {<Footer />}
    </>
  );
};
export default Home;