import React from "react";


import nft from "../../assets/usecase/nft-market.png"
import staking from "../../assets/usecase/staking.png"
import nftstaking from "../../assets/usecase/nft-staking.png"
import ico from "../../assets/usecase/ico.png"
import gaming from "../../assets/usecase/gaming.png"
import referral from "../../assets/usecase/refferal.png"
import payment from "../../assets/usecase/payment.png"
import governance from "../../assets/usecase/governance.png"

const cards = [
  {
    title: "NFT Marketplace",
    desc: "Buy, sell, and trade NFTs using BBT tokens seamlessly.",
    icon: nft,
  },
  {
    title: "Staking Rewards",
    desc: "Stake BBT and earn passive rewards over time.",
    icon: staking,
  },
  {
    title: "NFT Staking",
    desc: "Unlock additional rewards through staking your NFTs.",
    icon: nftstaking,
  },
  {
    title: "ICO Participation",
    desc: "Access future token launches and ecosystem offerings.",
    icon: ico,
  },
];

const cardss = [
  {
    title: "Gaming & Metaverse",
    desc: "Use BBT across future gaming and virtual experiences.",
    icon: gaming,
  },
  {
    title: "Referral Program",
    desc: "Earn 5% direct referral rewards on every referral.",
    icon: referral,
  },
  {
    title: "Payment Utility",
    desc: "Fast and secure ecosystem-wide transactions.",
    icon: payment,
  },
  {
    title: "Governance",
    desc: "Participate in future DAO voting and platform decisions.",
    icon: governance,
  },
];

const UseCases = () => {
  return (
    <section id="usecase" className=" font-['Poppins'] py-6 md:py-12">
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

        <p className="text-center text-sm font-[500] text-gradient mb-1 sm:mb-2">
          Use Cases
        </p>

        <h2 className="text-center text-white  text-3xl sm:text-5xl lg:text-3xl xl:text-5xl font-[500] leading-tight mb-2">
          BBT Utility Ecosystem
        </h2>

        <p className="text-center text-[#919191] text-[15] sm:text-base md:text-lg max-w-[918px] mx-auto mt-2 md:mt-6 leading-5 sm:leading-6 md:leading-8">
          From NFT trading and staking rewards to gaming, payments, governance, and ecosystem participation, BBT is designed to deliver real utility, sustainable value, and meaningful opportunities for every member of the Blockbuster community.
        </p>



        <div className=" hidden lg:block relative pt-6 sm:pt-10">

          {/* SVG */}
          <svg
            viewBox="0 0 1259 309"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="ticket-mask" fill="white">
              <path d="M598 183.5C598 200.345 611.655 214 628.5 214C645.345 214 659 200.345 659 183.5V24C659 10.7452 669.745 0 683 0H915.372C923.512 0 929 10.3599 929 18.5V28.5C929 45.3447 942.655 59 959.5 59C976.345 59 990 45.3447 990 28.5V18.5C990 10.3599 995.488 0 1003.63 0H1235C1248.25 0 1259 10.7452 1259 24V285C1259 298.255 1248.25 309 1235 309H1014C1000.75 309 990 298.255 990 285V138.5C990 121.655 976.345 108 959.5 108C942.655 108 929 121.655 929 138.5V285C929 298.255 918.255 309 905 309H683C669.745 309 659 298.255 659 285V282.5C659 265.655 645.345 252 628.5 252C611.655 252 598 265.655 598 282.5V285C598 298.255 587.255 309 574 309H352C338.745 309 328 298.255 328 285V118.5C328 101.655 314.345 88 297.5 88C280.655 88 267 101.655 267 118.5V285C267 298.255 256.255 309 243 309H24C10.7452 309 0 298.255 0 285V24C0 10.7452 10.7452 0 24 0H251.5C260.06 0 267 6.93959 267 15.5C267 32.3447 280.655 46 297.5 46C314.345 46 328 32.3447 328 15.5C328 6.93959 334.94 0 343.5 0H574C587.255 0 598 10.7452 598 24V183.5Z" />
            </mask>

            <path
              d="M598 183.5C598 200.345 611.655 214 628.5 214C645.345 214 659 200.345 659 183.5V24C659 10.7452 669.745 0 683 0H915.372C923.512 0 929 10.3599 929 18.5V28.5C929 45.3447 942.655 59 959.5 59C976.345 59 990 45.3447 990 28.5V18.5C990 10.3599 995.488 0 1003.63 0H1235C1248.25 0 1259 10.7452 1259 24V285C1259 298.255 1248.25 309 1235 309H1014C1000.75 309 990 298.255 990 285V138.5C990 121.655 976.345 108 959.5 108C942.655 108 929 121.655 929 138.5V285C929 298.255 918.255 309 905 309H683C669.745 309 659 298.255 659 285V282.5C659 265.655 645.345 252 628.5 252C611.655 252 598 265.655 598 282.5V285C598 298.255 587.255 309 574 309H352C338.745 309 328 298.255 328 285V118.5C328 101.655 314.345 88 297.5 88C280.655 88 267 101.655 267 118.5V285C267 298.255 256.255 309 243 309H24C10.7452 309 0 298.255 0 285V24C0 10.7452 10.7452 0 24 0H251.5C260.06 0 267 6.93959 267 15.5C267 32.3447 280.655 46 297.5 46C314.345 46 328 32.3447 328 15.5C328 6.93959 334.94 0 343.5 0H574C587.255 0 598 10.7452 598 24V183.5Z"
              fill="url(#bgGradient)"
            />

            <path
              d="M598 183.5C598 200.345 611.655 214 628.5 214C645.345 214 659 200.345 659 183.5V24C659 10.7452 669.745 0 683 0H915.372C923.512 0 929 10.3599 929 18.5V28.5C929 45.3447 942.655 59 959.5 59C976.345 59 990 45.3447 990 28.5V18.5C990 10.3599 995.488 0 1003.63 0H1235C1248.25 0 1259 10.7452 1259 24V285C1259 298.255 1248.25 309 1235 309H1014C1000.75 309 990 298.255 990 285V138.5C990 121.655 976.345 108 959.5 108C942.655 108 929 121.655 929 138.5V285C929 298.255 918.255 309 905 309H683C669.745 309 659 298.255 659 285V282.5C659 265.655 645.345 252 628.5 252C611.655 252 598 265.655 598 282.5V285C598 298.255 587.255 309 574 309H352C338.745 309 328 298.255 328 285V118.5C328 101.655 314.345 88 297.5 88C280.655 88 267 101.655 267 118.5V285C267 298.255 256.255 309 243 309H24C10.7452 309 0 298.255 0 285V24C0 10.7452 10.7452 0 24 0H251.5C260.06 0 267 6.93959 267 15.5C267 32.3447 280.655 46 297.5 46C314.345 46 328 32.3447 328 15.5C328 6.93959 334.94 0 343.5 0H574C587.255 0 598 10.7452 598 24V183.5Z"
              stroke="url(#borderGradient)"
              strokeWidth="2"
            />

            <defs>
              <linearGradient
                id="bgGradient"
                x1="0"
                y1="154.5"
                x2="1259"
                y2="154.5"
              >
                <stop stopColor="#0A0A0A" />
                <stop offset="1" stopColor="#111111" />
              </linearGradient>

              <linearGradient
                id="borderGradient"
                x1="0"
                y1="154.5"
                x2="1259"
                y2="154.5"
              >
                <stop stopColor="#E0A634" />
                <stop offset="1" stopColor="#FFDB87" />
              </linearGradient>
            </defs>
          </svg>

          {/* Content Overlay */}
          <div
            className="absolute inset-0"
            style={{
              display: "grid",
              gridTemplateColumns: "0.94fr 1.06fr 1.06fr 0.94fr",
            }}
          >
            {cards.map((item, index) => (
              <div
                key={index}
                className={`
          flex flex-col items-center text-center h-full
          ${index === 0 ? "pt-10 pr-6 xl:pr-10" : ""}
          ${index === 1 ? "pt-10 px-0" : ""}
          ${index === 2 ? "pt-10 px-0" : ""}
          ${index === 3 ? "pt-10 pl-6 xl:pl-10" : ""}
        `}
              >

                {/* Title */}
                <h3
                  className="
            text-gradient
            text-base
            font-medium
            mt-3 xl:mt-6
          "
                >
                  {item.title}
                </h3>

                {/* Progress Bar */}
                <div className="relative mt-2 xl:mt-5">
                  {index % 2 === 0 ? (
                    // Card 1,3,5,7...
                    <svg
                      width="180"
                      height="10"
                      viewBox="0 0 180 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="goldGradient"
                          x1="0"
                          y1="5"
                          x2="180"
                          y2="5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#E0A634" />
                        </linearGradient>
                      </defs>

                      {/* Border */}
                      <path
                        d="M1 1H178L172 9H7L1 1Z"
                        stroke="url(#goldGradient)"
                        strokeWidth="1"
                        fill="none"
                      />

                      {/* Gold Part */}
                      <path
                        d="M88 2H178L172 8H82L88 2Z"
                        fill="url(#goldGradient)"
                      />

                      {/* Black Part */}
                      <path
                        d="M2 2H89L83 8H8L2 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  ) : (
                    // Card 2,4,6,8...
                    <svg
                      width="180"
                      height="10"
                      viewBox="0 0 180 10"
                      fill="none"
                    >
                      <defs>
                        <linearGradient id={`gold-${index}`} x1="0" y1="0" x2="180" y2="0">
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#FFDB87" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M2 1H178L172 9H8L2 1Z"
                        stroke={`url(#gold-${index})`}
                        strokeWidth="1"
                        fill="transparent"
                      />

                      <path
                        d="M2 2H104L98 8H8L2 2Z"
                        fill={`url(#gold-${index})`}
                      />

                      <path
                        d="M104 2H178L172 8H98L104 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  )}
                </div>

                {/* Description */}
                <p
                  className="
            text-[#919191]
            text-[15px] xl:text-base font-[300]
            leading-[18px] xl:leading-[30px]
            mt-5 xl:mt-8 mx-auto
            max-w-[195px] xl:max-w-[240px]
          "
                >
                  {item.desc}
                </p>

                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mt-auto mb-3 xl:mb-6 h-[45] xl:h-[96px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" hidden lg:block relative pt-6 sm:pt-10">

          {/* SVG */}
          <svg
            viewBox="0 0 1259 309"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="ticket-mask" fill="white">
              <path d="M598 183.5C598 200.345 611.655 214 628.5 214C645.345 214 659 200.345 659 183.5V24C659 10.7452 669.745 0 683 0H915.372C923.512 0 929 10.3599 929 18.5V28.5C929 45.3447 942.655 59 959.5 59C976.345 59 990 45.3447 990 28.5V18.5C990 10.3599 995.488 0 1003.63 0H1235C1248.25 0 1259 10.7452 1259 24V285C1259 298.255 1248.25 309 1235 309H1014C1000.75 309 990 298.255 990 285V138.5C990 121.655 976.345 108 959.5 108C942.655 108 929 121.655 929 138.5V285C929 298.255 918.255 309 905 309H683C669.745 309 659 298.255 659 285V282.5C659 265.655 645.345 252 628.5 252C611.655 252 598 265.655 598 282.5V285C598 298.255 587.255 309 574 309H352C338.745 309 328 298.255 328 285V118.5C328 101.655 314.345 88 297.5 88C280.655 88 267 101.655 267 118.5V285C267 298.255 256.255 309 243 309H24C10.7452 309 0 298.255 0 285V24C0 10.7452 10.7452 0 24 0H251.5C260.06 0 267 6.93959 267 15.5C267 32.3447 280.655 46 297.5 46C314.345 46 328 32.3447 328 15.5C328 6.93959 334.94 0 343.5 0H574C587.255 0 598 10.7452 598 24V183.5Z" />
            </mask>

            <path
              d="M598 183.5C598 200.345 611.655 214 628.5 214C645.345 214 659 200.345 659 183.5V24C659 10.7452 669.745 0 683 0H915.372C923.512 0 929 10.3599 929 18.5V28.5C929 45.3447 942.655 59 959.5 59C976.345 59 990 45.3447 990 28.5V18.5C990 10.3599 995.488 0 1003.63 0H1235C1248.25 0 1259 10.7452 1259 24V285C1259 298.255 1248.25 309 1235 309H1014C1000.75 309 990 298.255 990 285V138.5C990 121.655 976.345 108 959.5 108C942.655 108 929 121.655 929 138.5V285C929 298.255 918.255 309 905 309H683C669.745 309 659 298.255 659 285V282.5C659 265.655 645.345 252 628.5 252C611.655 252 598 265.655 598 282.5V285C598 298.255 587.255 309 574 309H352C338.745 309 328 298.255 328 285V118.5C328 101.655 314.345 88 297.5 88C280.655 88 267 101.655 267 118.5V285C267 298.255 256.255 309 243 309H24C10.7452 309 0 298.255 0 285V24C0 10.7452 10.7452 0 24 0H251.5C260.06 0 267 6.93959 267 15.5C267 32.3447 280.655 46 297.5 46C314.345 46 328 32.3447 328 15.5C328 6.93959 334.94 0 343.5 0H574C587.255 0 598 10.7452 598 24V183.5Z"
              fill="url(#bgGradient)"
            />

            <path
              d="M598 183.5C598 200.345 611.655 214 628.5 214C645.345 214 659 200.345 659 183.5V24C659 10.7452 669.745 0 683 0H915.372C923.512 0 929 10.3599 929 18.5V28.5C929 45.3447 942.655 59 959.5 59C976.345 59 990 45.3447 990 28.5V18.5C990 10.3599 995.488 0 1003.63 0H1235C1248.25 0 1259 10.7452 1259 24V285C1259 298.255 1248.25 309 1235 309H1014C1000.75 309 990 298.255 990 285V138.5C990 121.655 976.345 108 959.5 108C942.655 108 929 121.655 929 138.5V285C929 298.255 918.255 309 905 309H683C669.745 309 659 298.255 659 285V282.5C659 265.655 645.345 252 628.5 252C611.655 252 598 265.655 598 282.5V285C598 298.255 587.255 309 574 309H352C338.745 309 328 298.255 328 285V118.5C328 101.655 314.345 88 297.5 88C280.655 88 267 101.655 267 118.5V285C267 298.255 256.255 309 243 309H24C10.7452 309 0 298.255 0 285V24C0 10.7452 10.7452 0 24 0H251.5C260.06 0 267 6.93959 267 15.5C267 32.3447 280.655 46 297.5 46C314.345 46 328 32.3447 328 15.5C328 6.93959 334.94 0 343.5 0H574C587.255 0 598 10.7452 598 24V183.5Z"
              stroke="url(#borderGradient)"
              strokeWidth="2"
            />

            <defs>
              <linearGradient
                id="bgGradient"
                x1="0"
                y1="154.5"
                x2="1259"
                y2="154.5"
              >
                <stop stopColor="#0A0A0A" />
                <stop offset="1" stopColor="#111111" />
              </linearGradient>

              <linearGradient
                id="borderGradient"
                x1="0"
                y1="154.5"
                x2="1259"
                y2="154.5"
              >
                <stop stopColor="#E0A634" />
                <stop offset="1" stopColor="#FFDB87" />
              </linearGradient>
            </defs>
          </svg>

          {/* Content Overlay */}
          <div
            className="absolute inset-0"
            style={{
              display: "grid",
              gridTemplateColumns: "0.94fr 1.06fr 1.06fr 0.94fr",
            }}
          >
            {cardss.map((item, index) => (
              <div
                key={index}
                className={`
          flex flex-col items-center text-center h-full
          ${index === 0 ? "pt-10 pr-6 xl:pr-10" : ""}
          ${index === 1 ? "pt-10 px-0" : ""}
          ${index === 2 ? "pt-10 px-0" : ""}
          ${index === 3 ? "pt-10 pl-6 xl:pl-10" : ""}
        `}
              >

                {/* Title */}
                <h3
                  className="
            text-gradient
            text-base
            font-medium
            mt-3 xl:mt-6
          "
                >
                  {item.title}
                </h3>

                {/* Progress Bar */}
                <div className="relative mt-2 xl:mt-5">
                  {index % 2 === 0 ? (
                    // Card 1,3,5,7...
                    <svg
                      width="180"
                      height="10"
                      viewBox="0 0 180 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="goldGradient"
                          x1="0"
                          y1="5"
                          x2="180"
                          y2="5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#E0A634" />
                        </linearGradient>
                      </defs>

                      {/* Border */}
                      <path
                        d="M1 1H178L172 9H7L1 1Z"
                        stroke="url(#goldGradient)"
                        strokeWidth="1"
                        fill="none"
                      />

                      {/* Gold Part */}
                      <path
                        d="M88 2H178L172 8H82L88 2Z"
                        fill="url(#goldGradient)"
                      />

                      {/* Black Part */}
                      <path
                        d="M2 2H89L83 8H8L2 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  ) : (
                    // Card 2,4,6,8...
                    <svg
                      width="180"
                      height="10"
                      viewBox="0 0 180 10"
                      fill="none"
                    >
                      <defs>
                        <linearGradient id={`gold-${index}`} x1="0" y1="0" x2="180" y2="0">
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#FFDB87" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M2 1H178L172 9H8L2 1Z"
                        stroke={`url(#gold-${index})`}
                        strokeWidth="1"
                        fill="transparent"
                      />

                      <path
                        d="M2 2H104L98 8H8L2 2Z"
                        fill={`url(#gold-${index})`}
                      />

                      <path
                        d="M104 2H178L172 8H98L104 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  )}
                </div>

                {/* Description */}
                <p
                  className="
            text-[#919191]
            text-[15px] xl:text-base font-[300]
            leading-[18px] xl:leading-[30px]
            mt-5 xl:mt-8 mx-auto
            max-w-[195px] xl:max-w-[240px]
          "
                >
                  {item.desc}
                </p>

                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mt-auto mb-3 xl:mb-6 h-[45] xl:h-[96px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mt-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="p-[1px] rounded-[24px] bg-gradient-to-r from-[#E0A634] to-[#FFDB87]"
            >
              <div className="bg-[#000] rounded-[24px] px-3 sm:px-6 py-6 h-full min-h-[300px] flex flex-col items-center text-center">

                {/* Title */}
                <h3 className="text-gradient text-xl md:text-2xl font-medium">
                  {item.title}
                </h3>

                {/* Progress Bar */}
                

                <div className="mt-4 w-full max-w-[290px]">
                  {index % 2 === 0 ? (
                    <svg
                      className="w-full h-[10px]"
                      viewBox="0 0 180 10"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`goldOdd-${index}`}
                          x1="0"
                          y1="5"
                          x2="180"
                          y2="5"
                        >
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#FFDB87" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M1 1H178L172 9H7L1 1Z"
                        stroke={`url(#goldOdd-${index})`}
                        strokeWidth="1"
                        fill="none"
                      />

                      <path
                        d="M88 2H178L172 8H82L88 2Z"
                        fill={`url(#goldOdd-${index})`}
                      />

                      <path
                        d="M2 2H89L83 8H8L2 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-full h-[10px]"
                      viewBox="0 0 180 10"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`goldEven-${index}`}
                          x1="0"
                          y1="0"
                          x2="180"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#FFDB87" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M2 1H178L172 9H8L2 1Z"
                        stroke={`url(#goldEven-${index})`}
                        strokeWidth="1"
                        fill="transparent"
                      />

                      <path
                        d="M2 2H104L98 8H8L2 2Z"
                        fill={`url(#goldEven-${index})`}
                      />

                      <path
                        d="M104 2H178L172 8H98L104 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#919191] text-lg leading-7 mt-6 max-w-[400px] sm:max-w-[350px]">
                  {item.desc}
                </p>

                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mt-auto pt-8 h-[160px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mt-6 sm:mt-8">
          {cardss.map((item, index) => (
            <div
              key={index}
              className="p-[1px] rounded-[24px] bg-gradient-to-r from-[#E0A634] to-[#FFDB87]"
            >
              <div className="bg-[#000] rounded-[24px]  px-3 sm:px-6 py-6  h-full min-h-[300px] flex flex-col items-center text-center">

                {/* Title */}
                <h3 className="text-gradient text-xl md:text-2xl font-medium">
                  {item.title}
                </h3>

                {/* Progress Bar */}


                <div className="mt-4 w-full max-w-[290px]">
                  {index % 2 === 0 ? (
                    <svg
                      className="w-full h-[10px]"
                      viewBox="0 0 180 10"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`goldOdd-${index}`}
                          x1="0"
                          y1="5"
                          x2="180"
                          y2="5"
                        >
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#FFDB87" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M1 1H178L172 9H7L1 1Z"
                        stroke={`url(#goldOdd-${index})`}
                        strokeWidth="1"
                        fill="none"
                      />

                      <path
                        d="M88 2H178L172 8H82L88 2Z"
                        fill={`url(#goldOdd-${index})`}
                      />

                      <path
                        d="M2 2H89L83 8H8L2 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-full h-[10px]"
                      viewBox="0 0 180 10"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`goldEven-${index}`}
                          x1="0"
                          y1="0"
                          x2="180"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#E0A634" />
                          <stop offset="100%" stopColor="#FFDB87" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M2 1H178L172 9H8L2 1Z"
                        stroke={`url(#goldEven-${index})`}
                        strokeWidth="1"
                        fill="transparent"
                      />

                      <path
                        d="M2 2H104L98 8H8L2 2Z"
                        fill={`url(#goldEven-${index})`}
                      />

                      <path
                        d="M104 2H178L172 8H98L104 2Z"
                        fill="#0B0B0B"
                      />
                    </svg>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#919191] text-lg leading-7 mt-6 max-w-[400px] sm:max-w-[350px]">
                  {item.desc}
                </p>

                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mt-auto pt-8 h-[160px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default UseCases;