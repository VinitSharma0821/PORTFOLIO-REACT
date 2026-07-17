import React from "react";
import "./Slider.css";

import skill1 from "../assets/skill1.png";
import skill2 from "../assets/skill2.png";
import skill3 from "../assets/skill3.png";
import skill4 from "../assets/skill4.png";
import skill5 from "../assets/skill5.png";
import skill6 from "../assets/skill6.png";
import skill7 from "../assets/skill7.png";
import skill8 from "../assets/skill8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Slider = () => {
  const skills = [
    { text: "HTML", img: skill1 },
    { text: "CSS", img: skill2 },
    { text: "BOOTSTRAP", img: skill3 },
    { text: "TAILWIND", img: skill4 },
    { text: "C", img: skill5 },
    { text: "C++", img: skill6 },
    { text: "JS", img: skill7 },
    { text: "REACT", img: skill8 },
  ];
  return (
    <div className="skills">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4, // desktop
            spaceBetween: 0,
          },
        }}
      >
        {skills.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="skill-card">
              <img src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
