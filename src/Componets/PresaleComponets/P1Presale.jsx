import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Directives/Header";
import bgvideo from "../../assets/presalebg.mp4";
import sheild from "../../assets/sheild.png";
import network from "../../assets/network.png";
import status from "../../assets/status.png";
import S3Partners from "../HomeComponets/S3Partners"

const S1Presale = () => {
  return (
    <section className="relative min-h-[95vh] overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>


      {/* Golden Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D6A83C]/10 blur-[180px] rounded-full"></div>


      {/* Content Layer */}
      <div className="relative z-10">

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="max-w-full mb-5 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12  ">

          <div className="max-w-[900px] mx-auto text-center py-6 md:py-10">

            {/* Heading */}
            <h2 className="text-white max-w-[480px] mx-auto text-3xl sm:text-5xl md:text-6xl font-normal sm:font-light leading-tight">
              The Entertainment{" "}
              <span className="text-gradient font-semibold sm:font-medium">
                Presale
              </span> of {" "}
              <span className="text-gradient  font-semibold sm:font-medium">
                Web3
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-6 font-['Poppins'] text-[#919191] text-sm sm:text-lg leading-6 sm:leading-8 max-w-[840px] mx-auto">
              Blockbuster Token (BBT) is now live in its exclusive presale phase, giving early supporters the opportunity to join a next-generation entertainment ecosystem before public launch.
            </p>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-4 mt-4 sm:mt-6">

              <Link to="/presale/?=joinpresale"
                
              >
                <button className="px-4 sm:px-10 h-8 sm:h-[40px] font-['Poppins'] rounded-lg bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] text-black font-[500] text-xs sm:text-sm hover:scale-105 transition">
                  Join Presale
                </button>
              </Link>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="inline-block p-[1px] rounded-[8px] bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)]">
                  <button
                    className="
          px-4 sm:px-10
          h-8 sm:h-[40px]
          rounded-[8px]
          bg-black
          text-[#F0C35D]
          font-[500] font-['Poppins'] text-xs sm:text-sm
          transition-all
          duration-300
          hover:bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)]
          hover:text-black
        "
                  >
                    Whitepaper
                  </button>
                </div>
              </a>

            </div>

            {/* Security Info */}
            {/* <div className="flex flex-row justify-center gap-8 mt-6"> */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6 max-w-[700px] mx-auto">

              <div className="flex items-center gap-3">
                <div className="max-w-[28px] sm:max-w-[40px]"><img src={sheild} alt="" /></div>

                <div className="text-left">
                  <div className="text-[#919191] font-['Poppins'] font-[400] text-xs sm:text-sm">
                    Audit & Security
                  </div>

                  <div className="text-[#FFC93B] font-['Poppins'] font-[400] text-xs sm:text-sm">
                    Coming Soon
                  </div>
                </div>
              </div>

              <div className="w-[2px] bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] h-12 "></div>

              <div className="flex items-center gap-3">
                <div className="max-w-[28px] sm:max-w-[40px]"><img src={network} alt="" /></div>

                <div className="text-left">
                  <div className="text-[#919191] font-['Poppins'] font-[400] text-[10px] sm:text-sm">
                    Network
                  </div>

                  <div className="text-[#FFC93B] font-['Poppins'] font-[400] text-[10px] sm:text-sm">
                    BEP-20
                  </div>
                </div>
              </div>

              <div className="w-[2px] bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] h-12 "></div>

              <div className="flex items-center gap-3">
                <div className="max-w-[28px] sm:max-w-[40px]"><img src={status} alt="" /></div>

                <div className="text-left">
                  <div className="text-[#919191] font-['Poppins'] font-[400] text-[10px] sm:text-sm">
                    Status
                  </div>

                  <div className="text-[#FFC93B] font-['Poppins'] font-[400] text-[10px] sm:text-sm">
                    Presale Live
                  </div>
                </div>
              </div>

            </div>


          </div>


          <S3Partners />


        </div>

      </div>

    </section>
  );
};

export default S1Presale;



