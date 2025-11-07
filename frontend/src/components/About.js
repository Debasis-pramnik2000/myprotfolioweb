import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img
              src="/profile.jpg"
              alt="Debasis Pramanik"
              className="rounded-circle mb-3"
              width="150"
              height="150"
            />
            <h4 className="mb-3">Debasis Pramanik</h4>
            <p className="text-muted">
              I am pursuing <b>BCA</b> from <b>TIMT under MAKAUT</b>.  
              I’m a passionate <b>MERN Stack Developer</b> who loves creating 
              full-stack web applications using modern technologies like 
              <b> React, Node.js, Express,</b> and <b>MongoDB</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
