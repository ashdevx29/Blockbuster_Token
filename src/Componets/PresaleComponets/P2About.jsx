import React, { useRef } from "react";
import aboutImg from "../../assets/about.png"; // Replace with your image
import { Link } from "react-router-dom";
const AboutSection = () => {
  const nextSectionRef = useRef(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <section id="about" ref={nextSectionRef} className="w-full font-['Poppins']  bg-black py-8 md:py-10 overflow-hidden">
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 ">
        {/* <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center"> */}
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-10 items-center">

          {/* Left Content */}
          <div className="order-1 lg:order-2 text-center lg:text-start">
            <span className="text-gradient  text-sm  font-[400]  tracking-wider">
              About Blockbuster Token Presale
            </span>


            <h2 className="mt-3 text-white  text-2xl sm:text-5xl lg:text-3xl xl:text-5xl font-[500] leading-tight">
              Powering the Future of Entertainment with Blockchain
            </h2>
            <p className="mt-4 text-[#919191] text-sm sm:text-base md:text-lg leading-relaxed max-w-full lg:max-w-xl">
              Blockbuster Token (BBT) is a next-generation BEP-20 utility token currently in its presale phase, offering early supporters the opportunity to participate in a rapidly growing decentralized entertainment ecosystem.
            </p>


            <p className="mt-2 text-[#919191] text-sm sm:text-base md:text-lg leading-relaxed max-w-full lg:max-w-xl">
              By joining the BBT Presale, participants gain early access to a utility-driven token that will fuel a scalable entertainment economy built for the Web3 era.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              {/* <button className="px-6 py-2 rounded-lg bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] text-black text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(216,162,59,0.6)]">
                Presale
              </button> */}
              <Link to="/?=tokenomics">
                <button className="px-7 py-2 rounded-lg text-[#F0C35D] border border-[#D8A23B] text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-[#D8A23B] hover:text-black">
                  Explore Tokenomics
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#D8A23B]/20 blur-[80px] rounded-full"></div>

              <img
                src={aboutImg}
                alt="Blockbuster Token"
                className="relative z-10 w-full max-w-[620px] object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;