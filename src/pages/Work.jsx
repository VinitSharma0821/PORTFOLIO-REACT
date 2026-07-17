import React from "react";
import photo1 from "../assets/photo1.png";
import photo7 from "../assets/photo7.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";

const Work = () => {
  const work = [
    { text: " Authentication System", month: "This Month", img: photo1 },
    { text: "E-Commerce Platform", month: "This Month", img: photo7 },
    { text: "Developer Portfolio	", month: "This Month", img: photo3 },
    { text: "Task Management System", month: "Last month", img: photo4 },
    { text: "AI Chat Application", month: "Last month", img: photo5 },
    { text: "Task Management System", month: "Last month", img: photo6 },
  ];

  return (
    <div className="work">
      <div className="work-container">
        {work.map((item, index) => (
          <div className="work-card" key={index}>
            
            <div className="work-text">
              <h3>{item.text}</h3>
              <p>{item.month}</p>
            </div>

            <div className="work-img">
              <img src={item.img} alt={item.text} />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;