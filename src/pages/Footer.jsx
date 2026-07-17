import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";

const Footer = () => {
  const icons = [
    { img: icon1 },
    { img: icon2 },
    { img: icon3 },
    { img: icon4 },
    { img: icon5 },
  ];

  return (
    <div>
      <hr />

      <footer>
        <div className="text">
          <h1>FIND ME ON </h1>
        </div>
        <div className="icon-img">
          {icons.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="social icon" />
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
