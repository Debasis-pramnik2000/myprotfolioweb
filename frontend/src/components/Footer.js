import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="mb-3">
          <a href="https://github.com/debasispramanik" className="text-white me-3">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://linkedin.com/in/debasispramanik" className="text-white me-3">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://facebook.com/debasispramanik" className="text-white me-3">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="mailto:debasispramanik@gmail.com" className="text-white">
            <i className="fa fa-envelope fa-lg"></i>
          </a>
        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} <b>Debasis Pramanik</b> | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
