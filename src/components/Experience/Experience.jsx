import React, { useState } from "react";
import Navbar from "../Navbar";
import "./Experience.css";
import Footer from "../Footer.jsx";
import Phaseone from "./Phaseone";
import Phasetwo from "./Phasetwo";

const Experience = () => {
  const [phase1, setPhase1] = useState(true);
  const [phase2, setPhase2] = useState(false);
  const handleLeft = () => {
    setPhase1(true);
    setPhase2(false);
  };
  const handleRight = () => {
    setPhase1(false);
    setPhase2(true);
  };

  return (
    <>
      <section className="exp">
        <Navbar />
        <div className="container-fluid">
          <div className="d-flex justify-content-center mt-5">
            <label class="switch">
              <input type="checkbox" class="cb" />
              <span class="toggle">
                <span class="left" onClick={handleLeft}>Phase 1</span>
                <span class="right" onClick={handleRight}>Phase 2</span>
              </span>
            </label>
          </div>
          {phase1 && <Phaseone/>}
          {phase2 && <Phasetwo/>}
        </div>
      </section>
      {phase1 && <Footer/>}
    </>
  );
};

export default Experience;
