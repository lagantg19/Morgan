import React from "react";
import Navbar from "./Navbar";
import "./Preparation.css";
import brian from "./Brian.jpg";
import pedro from "./pedro.jpg";
import net from "./net.jpg";
import "./Navbar.css";

const Preparation = () => {
  return (
    <section className="bg min-vh-100 overflow-scroll">
      <Navbar />
      <container className=" d-flex justify-content-center mt-5">
        <div class="card me-5 small " style={{width:"20rem"}} >
          <img src={brian} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title small">Complete Intro to React, v8</h5>
            <p class="card-text">Brian Holt</p>
            <a
              href="https://frontendmasters.com/courses/complete-react-v8/"
              class="btn btn-primary"
            >
              Visit
            </a>

            <h1 className="text-danger small mt-4">Note Paid Course</h1>
          </div>
        </div>
        <div class="card me-5 small " style={{width:"20rem"}} >
          <img src={pedro} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title small">
              React Course For Beginners - Learn React in 8 Hours
            </h5>
            <p class="card-text small">PedroTech</p>
            <a href="https://youtu.be/f55qeKGgB_M" class="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
        <div class="card small " style={{width:"20rem"}} >
          <img src={net} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title small">Mern Stack Crash Course Tutorial</h5>
            <p class="card-text small">NetNinja</p>
            <a href="https://youtu.be/98BzS5Oz5E4" class="btn btn-primary">
              Visit
            </a>
          </div>
        </div>
        
      </container>
      <div className="container small">
        <div className="row text-center text-white mt-4">
          <h5>🚨This is a Dream Recruitment Process For Developers<br/>🚨Mentors test your Development skills<br/>🚨Great Platform To ShowCase Your Skills<br/>🚨You have to be great at communicating and you should take Leadership.You gotta be the best one there.<br/>🚨Imagine being the only Recruited person in the <b>Winning Team</b>.That is the level of competition this process has.<br/><br/><br/>All the best..</h5>
        </div>
      </div>
    </section>
  );
};

export default Preparation;
