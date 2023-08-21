import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers once
    threshold: 0.1, // Percentage of the section visible to trigger the animation
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3} },
  };

  return (
    <section className="second mt-2">
      <div
        className="container vh-100 d-flex justify-content-center align-items-center"
        style={{ color: "white" }}
        ref={ref}
      >
        <div className="row">
          <div className="col">
            <motion.div
              className="about"
              style={{ fontSize: "70px" }}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              About us
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default About;
