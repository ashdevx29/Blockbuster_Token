import React, { useRef } from "react";

import trustwallet from "../../assets/partners/trustwallet.png";
import bscscan from "../../assets/partners/bscscan.png";
import coinmarketcap from "../../assets/partners/coinmarketcap.png";
import coinstore from "../../assets/partners/coinstore.png";

const partners = [
  trustwallet,
  bscscan,
  coinmarketcap,
  coinstore,
  trustwallet,
  bscscan,
];

const PartnersStrip = () => {
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
    <>
      <section className="relative py-3 sm:py-6 overflow-hidden">
        <div className="px-0 sm:px-4">

          <div className="flex items-center gap-3 sm:gap-10">

            {/* Left Scroll Button */}
            <button
              onClick={scrollToNext}
              className="
                flex-shrink-0
                flex items-center gap-4
                group
              "
            >
              <div
                className="
                  w-[28px] sm:w-[50px]
                  h-[28px] sm:h-[50px]
                  rounded-full
                  border
                  border-[#FFFFFF4D]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:border-[#D6A83C]
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                <path
                    d="M6 8L12 14L18 8"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 14L12 20L18 14"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="text-[#ffffff] font-['Inter'] hidden sm:block text-[10px] sm:text-sm whitespace-nowrap">
                Scroll to view more
              </span>
            </button>

            {/* Logo Marquee */}
            <div className="flex-1 overflow-hidden">
              <div className="partner-track">
                {[...partners, ...partners].map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[180px]"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="h-8 object-contain opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Example Next Section */}
      {/* <section
        id="about-section"
        ref={nextSectionRef}
        className="min-h-screen bg-black"
      >
      </section> */}
    </>
  );
};

export default PartnersStrip;