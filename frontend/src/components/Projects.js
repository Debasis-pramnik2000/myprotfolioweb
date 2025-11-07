import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const projects = [
    {
      title: "MERN Portfolio",
      desc: "Personal portfolio website using React, Node.js, Express & MongoDB.",
      link: "https://github.com/debasispramanik/mern-portfolio",
    },
    {
      title: "Todo App",
      desc: "Simple MERN-based Todo Application with MongoDB backend.",
      link: "https://github.com/debasispramanik/todo-mern",
    },
    {
      title: "Weather App",
      desc: "React app fetching live weather data from OpenWeather API.",
      link: "https://github.com/debasispramanik/weather-app",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row">
          {projects.map((p, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text text-muted">{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
