import React from "react";
import { useEffect, useRef, useState } from "react";
import Header from "../../Directives/Header";
import bgvideo from "../../assets/herobgg.mp4";
import sheild from "../../assets/sheild.png";
import network from "../../assets/network.png";
import TicketCard from "./S2TicketCard";
import S3Partners from "./S3Partners";

import nftIcon from "../../assets/ticket/nft-icon.png";
import stakingIcon from "../../assets/ticket/staking-icon.png";
import governanceIcon from "../../assets/ticket/governance-icon.png";
import gamingIcon from "../../assets/ticket/gaming-icon.png";
import rewardIcon from "../../assets/ticket/reward-icon.png";

const cards = [
  {
    title: "NFT Marketplace",
    icon: nftIcon,
    variant: "gold",
  },
  {
    title: "Staking & NFT Staking",
    icon: stakingIcon,
    variant: "dark",
  },
  {
    title: "Community Governance",
    icon: governanceIcon,
    variant: "gold",
  },
  {
    title: "Gaming & Metaverse Ready",
    icon: gamingIcon,
    variant: "dark",
  },
  {
    title: "5% Referral Rewards",
    icon: rewardIcon,
    variant: "gold",
  },
];

const S1Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

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
            <h2 className="text-white max-w-[680px] mx-auto text-3xl sm:text-5xl md:text-6xl font-normal sm:font-light leading-tight">
              The Entertainment Token of{" "}
              <span className="head-text font-semibold sm:font-medium">
                Web3
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-6 font-['Poppins'] text-[#919191] text-sm sm:text-lg leading-6 sm:leading-8 max-w-[840px] mx-auto">
              Blockbuster Token (BBT) is a next-generation BEP-20 utility token
              powering a decentralized entertainment ecosystem built around NFTs,
              staking, rewards, gaming, and community participation.
            </p>

            <p className="mt-2 sm:mt-3 font-['Poppins'] text-[#919191] text-sm sm:text-lg leading-6 sm:leading-8 max-w-[840px] mx-auto">
              Empowering creators, collectors, gamers, and investors through a
              secure, scalable, and utility-driven blockchain economy.
            </p>

            {/* Buttons */}
           <div className="flex flex-row justify-center gap-4 mt-4 sm:mt-6">

  {/* BUY BBT */}
  <a
    href="/presale"
    t
  >
    <button className="px-4 sm:px-10 h-8 sm:h-[40px] font-['Poppins'] rounded-lg bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] text-black font-[500] text-xs sm:text-sm hover:scale-105 transition">
      BUY BBT
    </button>
  </a>

  {/* Whitepaper */}
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
            <div className="flex flex-row justify-center gap-8 mt-6">

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



            </div>


          </div>

          {/* <div className=" hidden xl:block mt-5 lg:mt-10 max-w-full p-4"> */}
          {/* <div className="   mt-5 lg:mt-10 max-w-full py-4">
            <div className="flex flex-wrap justify-center  gap-x-10 gap-y-16">
              {cards.map((item, index) => (
                <TicketCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  variant={index % 2 === 0 ? "gold" : "dark"}
                />
              ))}
            </div>
          </div> */}

          <div className="py-5 lg:py-10 overflow-visible">
            <div className="marquee overflow-visible">
              <div className="marquee-content overflow-visible">
                {[...cards, ...cards].map((item, index) => (
                  <div key={index} className="mx-5 shrink-0">
                    <TicketCard
                      title={item.title}
                      icon={item.icon}
                      variant={index % 2 === 0 ? "gold" : "dark"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <S3Partners />


        </div>

      </div>

    </section>
  );
};

export default S1Hero;



