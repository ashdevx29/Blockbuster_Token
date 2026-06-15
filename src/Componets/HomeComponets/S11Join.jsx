import React from "react";
import coinImg from "../../assets/join-now.png"; // Right side coin image
import { BiLogoTelegram } from "react-icons/bi";
import {
  FaFacebookF,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";



const socialLinks = [
  {
    icon: FaFacebookF,
    link: "https://facebook.com/blockbuster",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/blockbuster",
  },
  {
    icon: BiLogoTelegram,
    link: "https://t.me/blockbuster",
  },
  {
    icon: FaDiscord,
    link: "https://discord.gg/blockbuster",
  },
];


const PresaleBanner = () => {
  return (
    <section className="w-full bg-black font-['Poppins'] py-5 md:py-10 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="relative overflow-hidden rounded-[20px] p-[1px] bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]">
  <div className="relative overflow-hidden rounded-[19px] bg-[linear-gradient(90deg,#000000_0%,#121212_100%)]">
   
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-3 md:px-10 py-4 md:py-8">
          {/* Left Content */}
          <div className="max-w-[780px]">
            <h2
              className="
                text-white
                sm:text-2xl text-xl
                md:text-3xl
                xl:text-[35px]
                leading-[1.5]
                font-normal
              "
            >
              Join the Blockbuster Token presale! Enjoy fast
              transactions, robust security, and a thriving
              community.
            </h2>

            {/* Button + Social */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              
              <button
                className="
                  h-[42px]
                  px-8
                  rounded-full
                  bg-gradient-to-r from-[#E0A634] to-[#FFDB87]
                  text-black
                  font-semibold
                  text-sm sm:text-lg
                  hover:scale-105
                  transition-all
                "
              >
                Join Now
              </button>

              <div className="flex items-center gap-3">
                 {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-9
                      h-9
                      rounded-full
                      border
                      border-[#2B2B2B]
                      bg-[#0D0D0D]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-sm
                      shadow-[0_0_15px_rgba(255,255,255,0.08)]
                      cursor-pointer
                      hover:border-[#D8A537]
                      transition-all
                    "
                  >
                   <Icon size={16} />
                  </a>
                );
              })}
              </div>
            </div>
          </div>

          {/* Right Coin */}
          <div className="relative mt-10 lg:mt-0">
            <img
              src={coinImg}
              alt="Token"
              className="
                w-[170px]
                md:w-[220px]
                lg:w-[260px]
                object-contain
              "
            />

            {/* Coin Shadow */}
            <div
              className="
                absolute
                bottom-2
                left-1/2
                -translate-x-1/2
                w-[120px]
                h-[18px]
                bg-[#F5B82A]
                blur-xl
                opacity-60
                rounded-full
              "
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;