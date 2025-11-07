import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaDownload,
} from 'react-icons/fa';
import profileImg from './assets/Debasis.png'; // ✅ Import image

export default function Hero() {
  return (
    <section
      className="text-light py-5"
      style={{
        backgroundColor: '#0d0d0d',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-7">
            <h6 className="text-secondary">Fresher</h6>
            <h1 className="display-4 fw-bold">
              Hello I'm <span className="text-success">Debasis Pramanik</span>
            </h1>
            <p className="text-muted fs-6 mt-3">
              I excel at crafting elegant digital experiences and I’m proficient
              in various programming languages and technologies. <br />
              Pursuing <strong>BCA at TIMT</strong> under <strong>MAKAUT</strong>.
            </p>

            <div className="mt-4">
              <a href="/resume.pdf" className="btn btn-outline-success me-3" download>
                <FaDownload className="me-2" />
                Download CV
              </a>
              <a href="#contact" className="btn btn-success">
                Hire Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-4 fs-3">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-success me-3">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-success me-3">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="text-success me-3">
                <FaFacebook />
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noreferrer" className="text-success me-3">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" className="text-success">
                <FaTwitter />
              </a>
            </div>

            {/* Counters */}
            <div className="d-flex mt-5 flex-wrap">
              <div className="me-4 mb-3">
                <h2 className="fw-bold text-success">1</h2>
                <p className="text-muted mb-0">Years of experience</p>
              </div>
              <div className="me-4 mb-3">
                <h2 className="fw-bold text-success">26</h2>
                <p className="text-muted mb-0">Projects completed</p>
              </div>
              <div className="me-4 mb-3">
                <h2 className="fw-bold text-success">8</h2>
                <p className="text-muted mb-0">Technologies mastered</p>
              </div>
              <div className="mb-3">
                <h2 className="fw-bold text-success">500</h2>
                <p className="text-muted mb-0">Code commits</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-5 text-center mt-5 mt-md-0">
            <div
              className="p-3 rounded-circle d-inline-block"
              style={{
                border: '4px solid #00ff88',
                boxShadow: '0 0 30px #00ff8850',
              }}
            >
              <img
                src={profileImg} // ✅ Correct image reference
                alt="Debasis Pramanik"
                className="rounded-circle img-fluid"
                style={{ maxWidth: '260px', backgroundColor: '#0d0d0d' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}