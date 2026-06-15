

// import React from "react";
// import { Wallet, Coins } from "lucide-react";
import usdt from "../../assets/usdt.png";
import vault from "../../assets/faq.png";
import bgImage from "../../assets/buy-bg.png";
import { Link } from "react-router-dom";
export default function TokenSaleSection() {



  return (
    <section id="joinpresale"
      className="relative py-8 md:py-16 lg:py-20 xl:py-24 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-full px-3 font-['Poppins'] sm:px-4 md:px-6 lg:px-8 xl:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <div
              className="inline-block px-3 py-1 text-[#FFCC66] text-sm md:text-base rounded-full mb-2 md:mb-4"
            >
              Designed for All. Prepared for Tomorrow.
            </div>

            <h2 className="text-lg md:text-3xl lg:text-5xl max-w-full lg:max-w-[640px] font-[400] leading-tight">
              Blockbuster Token{" "}
              <span className="text-[#FFC93B] font-[500]">
                Presale
              </span>{" "}
              is{" "}
              <span className="text-[#FFC93B] font-[500]">
                Live
              </span>
            </h2>

            <p className="text-[#FFFFFF80] text-sm md:text-base lg:text-lg  xl:text-xl mt-3 md:mt-6 max-w-full lg:max-w-[580px]">
              Join the next generation of Web3 entertainment with Blockbuster Token (BBT). Built for NFTs, gaming, staking, rewards, and community-driven growth, BBT empowers users to participate in a thriving decentralized ecosystem from day one.
            </p>
            <p className="text-[#FFFFFF80] text-sm md:text-base lg:text-lg xl:text-xl mt-2 max-w-full lg:max-w-[580px]">
              Engineered for scalability, security, and real-world utility, Blockbuster Token is creating new opportunities for creators, collectors, gamers, and investors across the digital entertainment landscape.
            </p>

            <button
              className="
    mt-4 md:mt-8
    relative
    rounded-[12px]
    p-[1px]
    overflow-hidden
    group
    transition-all
    duration-500
    hover:-translate-y-1
    hover:scale-[1.01]
    hover:shadow-[0_5px_10px_rgba(242,222,117,0.25)]
    active:scale-[0.98]
  "
              style={{
                background:
                  "linear-gradient(94.58deg, #B17E1C 3.26%, #F2DE75 28.5%, #F2DE75 60.93%, #C9A43E 95.37%)",
              }}
            >
              <span
                className="
      relative
      flex
      items-center
      justify-center
      px-4 md:px-8
      py-1.5 md:py-3
      rounded-[11px]
      text-white
      font-medium
      tracking-wide
      transition-all
      duration-500
      group-hover:tracking-[2px]
    "
                style={{
                  background:
                    "linear-gradient(270deg, #000000 0%, #000000 100%)",
                }}
              >
                Buy BBT Now
              </span>

              <span
                className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]
    "
              />
            </button>

          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-[580px] mx-auto">



            {/* Border SVG */}
            <svg
              viewBox="0 0 541 517"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="goldBorder" x1="0" y1="0" x2="541" y2="517">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#8B6A12" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>

              <path
                d="
      M55 1
      H468
      C490 1 507 8 520 22
      L536 42
      C539 46 540 52 540 60
      V458
      C540 491 514 516 481 516
      H64
      C45 516 30 508 18 494
      L2 474
      C1 472 1 468 1 464
      V60
      C1 27 22 1 55 1
      Z
    "
                fill="#000"
                stroke="url(#goldBorder)"
                strokeWidth="3"
              />
            </svg>

            <div className="relative z-10 px-4 py-8 lg:px-12 lg:py-12 min-h-[480px] lg:min-h-[550px]">

              <h2 className="text-center text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-8">
                You Can Buy With
              </h2>

              <div className="flex justify-center mb-4 md:mb-8">
              <Link to="/presale/?=joinpresale"
                
              >
                <button
                  className="
    rounded-full
    p-[1px]
    overflow-hidden
  "
                  style={{
                    background:
                      "linear-gradient(180deg, #363636 0%, #D4AF37 100%)",
                  }}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      px-8
                      py-[10px]
                      rounded-full
                    "
                    style={{
                      background:
                        "linear-gradient(180deg, #363636 0%, #000000 100%)",
                    }}
                  >
                    {/* Icon */}
                    <img
                      src={usdt}
                      alt="USDT"
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />

                    {/* Text */}
                    <span
                      className="
                          text-sm
                          lg:text-lg
                          text-white
                          leading-none
                        "
                    >
                      USDT
                    </span>
                  </div>
                </button>
                </Link>
              </div>

              <div className="space-y-6 ">

                {/* USDT */}
                <div>

                  <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                    Amount You Pay
                    <span className="text-[#FFCC66]">
                      {" "} (Balance = 0.00 USDT)
                    </span>
                  </label>

                  <div
                    className="relative p-[0.8px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                      clipPath:
                        "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                    }}
                  >
                    <div
                      className="h-[56px] flex items-center bg-black"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                      }}
                    >
                      {/* Icon */}
                      <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                        <img
                          src={usdt}
                          alt=""
                          className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                      </div>

                      {/* Divider */}
                      <div className="w-[1px] h-[100%] bg-[#FFCC66]  shrink-0" />

                      <input
                        type="text"
                        placeholder="Enter USDT Amount"
                        className="
                          flex-1
                            min-w-0
                            h-full
                            bg-transparent
                            px-3 md:px-5 text-[10px]
                            min-[330px]:text-sm md:text-base
                            outline-none
                            text-transparent
                            bg-clip-text
                            bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
                            placeholder:text-[#F0C95E]
                                "
                      />
                    </div>
                  </div>

                </div>

                {/* Blockbuster */}
                <div>

                  <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                    Amount You Get
                    <span className="text-[#FFCC66]">
                      {" "} (Balance = 0.00 BLOCKBUSTER)
                    </span>
                  </label>

                  <div
                    className="relative p-[0.8px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                      clipPath:
                        "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                    }}
                  >
                    <div
                      className="h-[56px] flex items-center bg-black"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                      }}
                    >
                      {/* Icon */}
                      <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                        <img
                          src={vault}
                          alt=""
                          className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                      </div>

                      {/* Divider */}
                      <div className="w-[1px] h-[100%] bg-[#FFCC66]  shrink-0 " />

                      <input
                        type="text"
                        placeholder="Enter Blockbuster Amount"
                        className="
    flex-1
    min-w-0
    h-full
    bg-transparent
    px-3 md:px-5 text-[10px]
    min-[330px]:text-sm md:text-base
    outline-none
    text-transparent
    bg-clip-text
    bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
    placeholder:text-[#F0C95E]
  "
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 min-[330px]:grid-cols-2 gap-3 md:gap-4">

                  <button
                                    className="
                    h-12
                    rounded-lg
                    font-[500]
                    text-black
                    px-2
                    transition-all
                    duration-300
                    text-[11px] md:text-base
                    hover:brightness-110
                    hover:scale-[1.02]
                  "
                    style={{
                      background:
                        "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                    }}
                  >
                    CONNECT WALLET
                  </button>

                  <button
                    className="
                      h-12
                      rounded-lg
                      p-[1px]
                      overflow-hidden
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_20px_rgba(242,222,117,0.25)]
                    "
                    style={{
                      background:
                        "linear-gradient(94.58deg, #B17E1C 3.26%, #F2DE75 28.5%, #F2DE75 60.93%, #C9A43E 95.37%)",
                    }}
                  >
                    <span
                      className="
      w-full
      h-full
      flex
      items-center
      justify-center
      rounded-[7px]
      font-[500]
      text-[#FFCC66]
      text-[13px] md:text-base
      px-6
    "
                      style={{
                        background:
                          "linear-gradient(270deg, #0A0A0A 0%, #0A0A0A 100%)",
                      }}
                    >
                      BUY NOW
                    </span>
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
