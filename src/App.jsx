import './App.css'
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Footer from './Directives/Footer';
import Homepage from './Pages/HomePage';
import Presale from './Pages/Presale';

function ScrollAnimationHandler() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll(
        "section, .page-section, .scroll-section"
      );

      elements.forEach((el) => {
        el.classList.add("scroll-animate");
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>

      <ScrollAnimationHandler />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
// import { useState } from 'react'
// import './App.css'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// // import Navbar from './Directives/Header'
// import Footer from './Directives/Footer'
// import Homepage from './Pages/HomePage'
// import Presale from './Pages/Presale'


// function App() {

//    useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           } else {
//             entry.target.classList.remove("show");
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     // Section aur custom page blocks dono select karo
//     const elements = document.querySelectorAll(
//       "section, .page-section, .scroll-section"
//     );

//     elements.forEach((el) => {
//       el.classList.add("scroll-animate");
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//       {/* <Navbar />  */}
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/presale" element={<Presale />} />
//       </Routes>
//       <Footer /> 
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
