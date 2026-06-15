import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import P1Presale from '../Componets/PresaleComponets/P1Presale';
import P2About from '../Componets/PresaleComponets/P2About'
import P3WhyJoin from '../Componets/PresaleComponets/P3WhyJoin'
import P4Buy  from '../Componets/PresaleComponets/P4Buy'
import P5faq from '../Componets/PresaleComponets/P5Faq'
import S11Join from '../Componets/HomeComponets/S11Join'


function PresalePage() {

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
      <P1Presale />
      <P2About />
      <P3WhyJoin />
      <P4Buy /> 
      <P5faq />
      <S11Join />
      
    </>
  )
}

export default PresalePage;
