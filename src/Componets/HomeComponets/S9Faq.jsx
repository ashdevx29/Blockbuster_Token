import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import coinImg from "../../assets/faq.png";

const faqData = [
  {
    question: "What is BBT?",
    answer:
      "A BEP-20 utility token powering the Blockbuster entertainment ecosystem on Binance Smart Chain.",
  },
  {
    question: "What can BBT be used for?",
    answer:
      "BBT can be used for ticket purchases, NFT access, rewards, staking, and governance features within the ecosystem.",
  },
  {
    question: "Is staking available?",
    answer:
      "Yes. Users can stake BBT tokens and earn rewards through the staking platform.",
  },
  {
    question: "Which blockchain is used?",
    answer:
      "BBT is deployed on Binance Smart Chain (BSC) for fast and low-cost transactions.",
  },
  {
    question: "What is the referral reward?",
    answer:
      "Users can earn referral commissions by inviting new participants into the ecosystem.",
  },
  {
    question: "Will BBT support governance?",
    answer:
      "Yes. Governance functionality will allow token holders to vote on ecosystem proposals.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-6 md:py-16">
      <div className="max-w-full px-3 font-['Poppins'] sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-16 items-center">

          {/* Left Coin */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex justify-center">
            <div className="relative">
              {/* Glow */}
              {/* <div className="absolute inset-0 bg-[#E0A634] blur-[80px] opacity-40 rounded-full" /> */}

              <img
                src={coinImg}
                alt="BBT Coin"
                className="relative w-[300px] sm:w-[400px] lg:w-[500px]"
              />
            </div>
          </div>

          {/* Right FAQ */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <h2 className="text-white text-center lg:text-start text-2xl sm:text-4xl lg:text-3xl xl:text-[35px] font-[500] leading-tight mb-2">
              Frequently Asked{" "}
              <span
                className="bg-gradient-to-r from-[#E0A634] to-[#FFDB87] bg-clip-text text-transparent"
              >
                Questions
              </span>
            </h2>

            <p className="text-[#9CA3AF] text-center lg:text-start text-base md:text-lg font-[400]  mb-4">
              Have questions? We've compiled the best answers.
            </p>

            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="
    p-[1px]
    rounded-lg
    bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
  "
                >
                  <div
                    className="
      rounded-lg
      overflow-hidden
      bg-[linear-gradient(91.54deg,#000000_0.56%,#181717_100%)]
    "
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="
        w-full
        flex
        justify-between
        items-center
        px-6
        py-4
        text-left
      "
                    >
                      <span className="text-[#F5F5F5] font-[400] text-base sm:text-lg lg:text-xl">
                        {faq.question}
                      </span>

                      {active === index ? (
                        <FaMinus
                          size={18}
                          className="text-white shrink-0"
                        />
                      ) : (
                        <FaPlus
                          size={18}
                          className="text-white shrink-0"
                        />
                      )}
                    </button>

                    <div
                      className={`
        transition-all
        duration-300
        overflow-hidden
        ${active === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                        }
      `}
                    >
                      <div className="px-6 pb-3 text-[#F5F5F5B2] text-sm md:text-base leading-7">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;