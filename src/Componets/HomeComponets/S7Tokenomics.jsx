import React from "react";

import bgImage from "../../assets/tokenomicsbg.png"; // 2nd Image
import tokenomicsRing from "../../assets/tokeomics.png"; // 3rd Image

const Tokenomics = () => {
  return (
    <section id="tokenomics"
      className="relative font-['Poppins'] overflow-hidden py-6 lg:py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-center text-sm font-[500] text-gradient mb-1 sm:mb-2">
            Tokenomics
          </p>
          <h2 className="text-center text-white  text-3xl sm:text-5xl lg:text-3xl xl:text-[35px] font-[500] leading-tight mb-2">
            Powering a Sustainable, Reward-Driven Entertainment Ecosystem
          </h2>

          <p className="text-center text-[#919191] text-[15] sm:text-base md:text-lg mt-2 md:mt-4 leading-5 sm:leading-6 md:leading-8">
            Our tokenomics model is designed to support long-term growth, ecosystem development, community rewards, liquidity stability, and continuous innovation—creating a strong foundation for the future of Blockbuster Token and its decentralized entertainment ecosystem.
          </p>
        </div>

        {/* Tokenomics Chart */}
        <div className="relative mt-8 flex justify-center items-center">
          {/* Ring Image */}
          <img
            src={tokenomicsRing}
            alt=""
            className="w-[460px] sm:w-[600px] lg:w-[955px] relative z-20"
          />
        </div>

        {/* Bottom Info */}
        <div className="my-8 max-w-6xl mx-auto">


          <div className="grid md:grid-cols-2 gap-8">

            <div className="space-y-7">
              <InfoCard value="Blockbuster Token" label="Token Name" />
              <InfoCard value="BEP-20" label="Network" />
            </div>


            <div className="space-y-7">
              <InfoCard value="BBT" label="Symbol" />
              <InfoCard value="18" label="Decimals" />
            </div>
          </div>


          <div className="mt-7 flex justify-start md:justify-center">
            <div className="w-full md:max-w-[400px] lg:max-w-[600px]">
              <InfoCard value="Utility Token" label="Type" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const InfoCard = ({ value, label }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-2  bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] rounded-tl-sm rounded-tr-sm"></div>

        <div
          className="p-[1px] rounded-lg bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]"
          style={{
            clipPath:
              "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)",
          }}
        >
          <div
            className="min-w-[120px] sm:min-w-[160px] lg:min-w-[220px] py-2 px-3 sm:px-6 rounded-lg text-[13px] sm:text-base lg:text-lg text-center text-[#D9A441] bg-black"
            style={{
              margin: "1px", // Important
              clipPath:
                "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)",
            }}
          >
            {value}
          </div>
        </div>
      </div>



      <div className="relative flex-1 pb-3">
        <span className="font-[400] text-[13px] sm:text-base lg:text-lg bg-[linear-gradient(90deg,_#FFFFFF_10.75%,_#777777_82.5%)] bg-clip-text text-transparent">
          {label}
        </span>

        <div
          className="absolute left-0 bottom-0 w-[80%] h-[4px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFDB87 1.2px, transparent 1.2px)",
            backgroundSize: "10px 4px",
            backgroundRepeat: "repeat-x",
          }}
        />
      </div>
    </div>
  );
};

const CenterInfoCard = ({ value, label }) => {
  return (
    <div  className="flex flex-col items-center">
      {/* Card */}
      <div className="relative max-w-4xl">
        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-2 bg-[linear-gradient(90deg,_#E0A634_0%,_#FFDB87_100%)] rounded-tl-sm rounded-tr-sm"></div>

        <div
          className="p-[1px] rounded-lg bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]"
          style={{
            clipPath:
              "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)",
          }}
        >
          <div
            className="min-w-[120px] sm:min-w-[160px] lg:min-w-[220px] py-2 px-3 sm:px-6 rounded-lg text-[13px] sm:text-base lg:text-lg text-center text-[#D9A441] bg-black"
            style={{
              margin: "1px",
              clipPath:
                "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)",
            }}
          >
            {value}
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="relative mt-3 text-center">
        <span className="font-[400] text-[13px] sm:text-base lg:text-lg bg-[linear-gradient(90deg,_#FFFFFF_10.75%,_#777777_82.5%)] bg-clip-text text-transparent">
          {label}
        </span>

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-[80px] sm:w-[100px] h-[4px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFDB87 1.2px, transparent 1.2px)",
            backgroundSize: "10px 4px",
            backgroundRepeat: "repeat-x",
          }}
        />
      </div>
    </div>
  );
};

export default Tokenomics;