import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";

import logo from "../assets/logo.png";
import footerCoin from "../assets/footer/f-image.png";

const quickLinks = [
  { name: "About", link: "/?=about" },
  { name: "Use Cases", link: "/?=usecase" },
  { name: "Tokenomics", link: "/?=tokenomics" },
  { name: "FAQ", link: "/?=faq" },
  {
    name: "Whitepaper",
    link: "/",
    external: true,
  },
];

const quickkLinks = [
  { name: "Presale Information", link: "/presale" },
  { name: "Roadmap", link: "/?=roadmap" },
  // { name: "Faqs", link: "/?=faq" },
];

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

const Footer = () => {
  return (
    <footer className="bg-[#050505] font-['Poppins'] text-[#919191]">
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

        {/* Top Area */}
        <div className="pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">

            {/* Left Content */}
            <div className="lg:max-w-[550px] md:max-w-[400px] max-w-full">
              <img
                src={logo}
                alt="Blockbuster"
                className="h-14 object-contain"
              />

              <p className="mt-4 text-[#919191] text-sm sm:text-lg font-[300]  leading-7">
                Blockbuster Token (BBT) is a utility token. Cryptocurrency
                investments involve significant risk. Please conduct your own
                research before participating. Past performance is not
                indicative of future results.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <img
                src={footerCoin}
                alt="Coin"
                className="w-[280px] lg:w-[370px] object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[5px] mt-6 lg:mt-0 bg-[#373737]"></div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row font-['Public Sans'] justify-between py-6 gap-10">

            {/* Left Columns */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-10"> */}
            <div className="flex flex-wrap gap-10 justify-start">

              {/* Quick Links */}
              <div className="min-w-[180px]">
                <h4 className="text-white font-[500]  text-lg md:text-xl mb-4">
                  Quick Links
                </h4>

                <ul className="space-y-2">
                  {quickLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : ""}
                        className="text-[#FFFFFF7D] font-[400] text-sm hover:text-[#F0C35D] transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Legal */}
              <div className="min-w-[180px]">
                <h4 className="text-white font-[500]  text-lg md:text-xl mb-4">
                  Legal
                </h4>



                <ul className="space-y-2">
                  {quickkLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : ""}
                        className="text-[#FFFFFF7D] font-[400] text-sm hover:text-[#F0C35D] transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="">
                <h4 className="text-white font-[500]  text-lg md:text-xl mb-4">
                  Contact Us
                </h4>

                <p className="text-[#FFFFFFCC] font-[400] text-sm leading-7">
                  Address: [Insert Company Address]
                </p>

                <p className="text-[#FFFFFFCC] font-[400] text-sm leading-7">
                  Email: support@blockbuster.io
                </p>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          w-12 h-12
          rounded-full
          border border-[#FFDB87]
          bg-[radial-gradient(50%_50%_at_50%_50%,_#424242_0%,_rgba(19,19,19,0)_50%)]
          flex items-center justify-center
          text-[#F0C35D]
          hover:bg-[#F0C35D]
          hover:text-black
          transition-all duration-300
        "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            {/* <div className="flex items-center gap-4">

              {[FaFacebookF, FaXTwitter, BiLogoTelegram, FaDiscord].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="/"
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-[#FFDB87] bg-[radial-gradient(50%_50%_at_50%_50%,_#424242_10%,_rgba(19,19,19,0)_70%)]
                      flex
                      items-center
                      justify-center
                      text-[#F0C35D]
                      hover:bg-[#F0C35D]
                      hover:text-black
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div> */}

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-grey-300">
        <div className="max-w-full px-6 lg:px-12 py-5">

          <p className="text-center text-grey-400 text-sm sm:text-base">
            Copyright © {new Date().getFullYear()} <span className="font-[600] bg-[linear-gradient(180.02deg,_#E0A634_1.86%,_#FFDB87_97.83%)] bg-clip-text text-transparent">Blockbuster Token (BBT)</span>. All
            Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;