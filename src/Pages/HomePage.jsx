import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import S1Hero from '../Componets/HomeComponets/S1Hero';
import S4About from '../Componets/HomeComponets/S4About';
import S5Mission from "../Componets/HomeComponets/S5Mission"
import S6Usecase from "../Componets/HomeComponets/S6UseCases"
import S7Tokenomics from "../Componets/HomeComponets/S7Tokenomics"
import S8Roadmap from "../Componets/HomeComponets/S8Roadmap"
import S9Faq from "../Componets/HomeComponets/S9Faq"
import S10Cotract from "../Componets/HomeComponets/S10Contract"
import S11Join from "../Componets/HomeComponets/S11Join"



function HomePage() {

  const location1 = useLocation();
  useEffect(() => {
    const scrollToElement = () => {
      const { search } = location1;
      const params = new URLSearchParams(search);
      const scrollToId = params.get('');

      if (scrollToId) {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToElement();
  }, [location1]);

  return (
    <>
      <S1Hero />
      <S4About />
      <S5Mission />
      <S6Usecase />
      <S7Tokenomics />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1417 15"
        className="w-full h-[15px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#D9A437" />
            <stop offset="100%" stopColor="#EBC15A" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="1417"
          height="15"
          fill="url(#goldGradient)"
        />
      </svg>
      <S8Roadmap />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1417 15"
        className="w-full h-[15px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#D9A437" />
            <stop offset="100%" stopColor="#EBC15A" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="1417"
          height="15"
          fill="url(#goldGradient)"
        />
      </svg>
      <S9Faq />
      <div className="w-full">
        <svg
          viewBox="0 0 1440 15"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[15px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldBar" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#D9A437" />
              <stop offset="100%" stopColor="#F4D27A" />
            </linearGradient>
          </defs>

          <path
            d="M40 15 L0 0 H1400 L1440 15 Z"
            fill="url(#goldBar)"
          />
        </svg>
      </div>
      <S10Cotract />
      <div className="w-full">
        <svg
          viewBox="0 0 1440 15"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[15px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldBar" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#D9A437" />
              <stop offset="100%" stopColor="#F4D27A" />
            </linearGradient>
          </defs>

          <path
            d="M40 15 L0 0 H1400 L1440 15 Z"
            fill="url(#goldBar)"
          />
        </svg>
      </div>
      <S11Join />
    </>
  )
}

export default HomePage;
