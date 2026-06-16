import React from "react";
import roadmapBg from "../../assets/bgroadmap.png";

const roadmapData = [
  {
    quarter: "Q3 2026",
    title: "Foundation & Development",
    side: "left",
    top: "10px",
    items: [
      "Whitepaper",
      "Smart Contract",
      "Website Launch",
      "Security Audit",
    ],
  },
  {
    quarter: "Q4 2026",
    title: "Token Launch",
    side: "right",
    top: "130px",
    items: [
      "BBT Deployment",
      "Presale Launch",
      "Referral Integration",
      "Marketing Campaigns",
    ],
  },
  {
    quarter: "Q1 2027",
    title: "NFT & RWA Ecosystem",
    side: "left",
    top: "280px",
    items: [
      "NFT Marketplace",
      "Minting Platform",
      "Creator Dashboard",
      "RWA Vault — First Entertainment Asset Onboarding",
    ],
  },
  {
    quarter: "Q2 2027",
    title: "Rewards & Staking",
    side: "right",
    top: "400px",
    items: [
      "BBT Staking",
      "NFT Staking",
      "Loyalty Program",
      "RWA Revenue-Share Distribution Module",
    ],
  },
  {
    quarter: "Q3 2027",
    title: "Expansion",
    side: "left",
    top: "570px",
    items: [
      "CoinGecko Listing",
      "CoinMarketCap Listing",
      "Exchange Partnerships",
      "Additional RWA Asset Classes Onboarded",
    ],
  },
  {
    quarter: "Q4 2027",
    title: "Governance & Metaverse",
    side: "right",
    top: "690px",
    items: [
      "DAO Launch",
      "Community Voting",
      "Gaming & Metaverse Integrations",
      "DAO-Governed RWA Asset Approval Framework",
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap"
      className="relative overflow-hidden py-10 lg:py-16"
      style={{
        backgroundImage: `url(${roadmapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-center text-sm font-[500] text-gradient mb-2 sm:mb-3">
            Roadmap
          </span>

          <h2 className="max-w-[519px] mx-auto text-center text-white  text-3xl sm:text-5xl lg:text-3xl xl:text-[35px] font-[500] leading-tight mb-2">
            Roadmap to Sustainable Ecosystem Growth
          </h2>

          <p className="text-center text-[#919191] text-[15] sm:text-base md:text-lg mt-2 md:mt-4 leading-5 sm:leading-6 md:leading-8">
            A strategic roadmap outlining milestones across development, token launch, NFTs, RWAs, staking, governance, and ecosystem expansion to drive long-term growth and adoption.
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden max-w-[918px] mx-auto md:block my-20 relative min-h-[900px]">

          {/* Center SVG */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full">
            <svg width="380" height="900" viewBox="0 0 380 900" fill="none" xmlns="http://www.w3.org/2000/svg">


              <line x1="15" y1="40" x2="165" y2="40" stroke="#D4A53A" stroke-width="2" />
              <polygon points="165,15 175,0 175,225 165,235" fill="#E5B548" />


              <polygon points="205,145 215,130 215,355 205,370" fill="#E5B548" />
              <line x1="215" y1="170" x2="368" y2="170" stroke="#D4A53A" stroke-width="2" />


              <line x1="0" y1="315" x2="165" y2="315" stroke="#D4A53A" stroke-width="2" />
              <polygon points="165,285 175,270 175,495 165,505" fill="#E5B548" />


              <polygon points="205,420 215,405 215,610 205,625" fill="#E5B548" />
              <line x1="215" y1="490" x2="374" y2="490" stroke="#D4A53A" stroke-width="2" />


              <line x1="0" y1="580" x2="165" y2="580" stroke="#D4A53A" stroke-width="2" />
              <polygon points="165,545 175,535 175,760 165,770" fill="#E5B548" />


              <polygon points="205,675 215,660 215,890 205,905" fill="#E5B548" />
              <line x1="215" y1="740" x2="374" y2="740" stroke="#D4A53A" stroke-width="2" />

            </svg>
          </div>

          {/* Cards */}
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className={`absolute max-w-[170px] lg:max-w-[260px] ${item.side === "left"
                ? "left-[2px]  text-left"
                : "right-[2px]  text-left"
                }`}
              style={{ top: item.top }}
            >
              <h4 className="text-[#FFC93B] font-bold text-xl">
                {item.quarter}
              </h4>

              <h5 className="text-gradient text-lg mt-2 font-medium">
                {item.title}
              </h5>

              <ul className="mt-2 space-y-1">
                {item.items.map((list, i) => (
                  <li
                    key={i}
                    className="text-[#FFFFFF] text-sm lg:text-base font-[400] flex items-start gap-2"
                  >
                    <span>•</span>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile */}
<div className="md:hidden mt-10">
  <div className="relative pl-10">

    {/* Vertical Line */}
    <div className="absolute left-[10px] top-0 bottom-0 w-[5px] bg-[linear-gradient(180.02deg,_#E0A634_1.86%,_#FFDB87_97.83%)]" />

    {roadmapData.map((item, index) => (
      <div key={index} className="relative mb-10">

        {/* Horizontal Connector */}
        <div className="absolute left-[-25px] top-[18px] w-[22px] h-[3px] bg-[linear-gradient(180.02deg,_#E0A634_1.86%,_#FFDB87_97.83%)]" />

        {/* Card */}
        <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#E0A634] to-[#FFDB87]" >
        <div className="bg-[#000000] rounded-xl  p-4">
          <h4 className="text-[#FFC93B] font-bold text-lg sm:text-2xl">
            {item.quarter}
          </h4>

          <h5 className="text-gradient text-lg sm:text-2xl mt-1 font-medium">
            {item.title}
          </h5>

          <ul className="mt-3 space-y-2">
            {item.items.map((list, i) => (
              <li
                key={i}
                className="text-[#FFFFFF] text-sm sm:text-lg font-[400] flex items-start gap-2"
              >
                <span className="text-[#D4A53A]">•</span>
                {list}
              </li>
            ))}
          </ul>
        </div>
        </div>
        
        

      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Roadmap;