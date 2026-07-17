import React from "react";
import portfolio from "../assets/portfolio.jpg";

const Header = () => {
  return (
    <div className="information">
      <div className="info">
        <div className="info-img">
          <img src={portfolio} alt="Profile" />
        </div>
        <div className="info-text">
          <span>
            HI. I'm <b>Vinit Sharma</b>
          </span>
          <p>
            Hi! I'm a beginner web developer passionate about building
            responsive and user-friendly websites. I'm learning HTML, CSS,
            JavaScript, and React while creating projects to improve my skills.
            Welcome to my portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
