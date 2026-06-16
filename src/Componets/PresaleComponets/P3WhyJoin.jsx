import React from "react";
import coinImg from "../../assets/whyjoin.png"; 

const WhyJoinPresale = () => {
  const benefits = [
    "Early Access Before Public Launch",
    "Utility-Driven BEP-20 Token",
    "RWA Ecosystem Integration",
    "Staking & Reward Opportunities",
    "Community-Powered Growth",
    "Secure & Transparent Blockchain Infrastructure",
  ];

  return (
    <section className="bg-black py-10 lg:py-16 font-['Poppins']">
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      
        <div className="relative overflow-visible rounded-xl border border-[#E0A634] bg-[linear-gradient(90deg,_#000000_0%,_rgba(18,18,18,0.79)_100%)]">

          <div className="grid md:grid-cols-[60%_40%] items-center min-h-[220px]">

            {/* Left Content */}
            <div className="p-3 md:p-4 lg:p-5">
              <h3 className="text-[#FFC93B] text-lg md:text-xl font-semibold mb-5">
                Why Join the BBT Presale?
              </h3>

              <ul className="space-y-2 pl-5 lg:pl-10">
                {benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#FFFFFF] text-sm md:text-base lg:text-lg xl:text-xl"
                  >
                    <span className="text-white  mt-[2px]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Coin */}
<div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
  <img
    src={coinImg}
    alt="BBT Coin"
    className="w-[280px] lg:w-[320px] xl:w-[389px] object-contain"
  />
</div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyJoinPresale;