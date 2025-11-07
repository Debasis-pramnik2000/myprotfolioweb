import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skills = [
    { name: "MongoDB", color: "success", value: "90" },
    { name: "Express.js", color: "dark", value: "85" },
    { name: "React", color: "info", value: "90" },
    { name: "Node.js", color: "success", value: "88" },
  ];

  return (
    <section id="skills" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">My Skills</h2>

        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="card border-0 shadow-sm p-3">
                <div className="card-body">
                  <h5 className={`badge bg-${skill.color} mb-3 p-2`}>
                    {skill.name}
                  </h5>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="skill progress"
                  >
                    <div
                      className={`progress-bar bg-${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    >
                      {skill.value}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counters */}
        <div className="row mt-5">
          <div className="col-md-3 col-6">
            <h3 className="fw-bold text-primary">10+</h3>
            <p className="text-muted">Projects</p>
          </div>
          <div className="col-md-3 col-6">
            <h3 className="fw-bold text-primary">2+</h3>
            <p className="text-muted">Years Coding</p>
          </div>
          <div className="col-md-3 col-6">
            <h3 className="fw-bold text-primary">5+</h3>
            <p className="text-muted">Technologies</p>
          </div>
          <div className="col-md-3 col-6">
            <h3 className="fw-bold text-primary">100%</h3>
            <p className="text-muted">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
