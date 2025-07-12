import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "./Hero.css";

import hero1 from '../../assets/slider/1.avif';
import hero2 from '../../assets/slider/2.avif';
import hero3 from '../../assets/slider/3.avif';

export default function HeroSlider() {
  const slides = [
    {
      image: hero1,
      heading: "Travel Brings Power & Love back to your Life",
      text: "Your journey begins here. Discover our services today. Discover our services today. Discover our services today.",
      link: "#",
    },
    {
      image: hero2,
      heading: "Travel Brings Power & Love back to your Life",
      text: "Your journey begins here. Discover our services today. Discover our services today. Discover our services today.",
      link: "#",
    },
    {
      image: hero3,
      heading: "Travel Brings Power & Love back to your Life",
      text: "Your journey begins here. Discover our services today. Discover our services today. Discover our services today.",
      link: "#",
    },
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="hero-swiper"
        breakpoints={{
            1024: { slidesPerView: 1 },
          }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content text-white text-start px-4">
                  <h1 className="text-uppercase fw-bold">{slide.heading}</h1>
                  <p>{slide.text}</p>
                  <button className="btn text-uppercase fw-bold mt-2" id="myBtn">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
