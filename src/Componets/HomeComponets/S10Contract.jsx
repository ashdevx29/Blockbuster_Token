import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";

const ContractAddress = () => {
  const contractAddress = "8DvyhyQwsNozFqdKdRmTqTvGX5QvpTFqpa1aVJ49tv8d";

  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Screen Size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shortAddress = `${contractAddress.slice(0, 9)}........${contractAddress.slice(-9)}`;

  // Copy Function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.log("Copy Failed", error);
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: "easeOut" } 
    },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 0 35px rgba(242, 222, 117, 0.4)" 
    },
  };

  return (
    <section className="w-full bg-[#000] px-3 font-['Poppins'] sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 lg:py-12 overflow-hidden">
      <div className="max-w-full relative">
        
        {/* Top Small Heading */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center text-sm font-[500] text-gradient mb-2 sm:mb-3"
        >
          Contract Address
        </motion.p>

        {/* Description */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          className="font-[400] text-center text-[#ffffff] text-sm sm:text-base lg:text-lg leading-relaxed max-w-5xl mx-auto mb-4 md:mb-8"
        >
          Get a clear and detailed overview of{" "}
          <span className="text-[#FFCC66] font-[700]">Blockbuster Token (BBT)</span>{" "}
          Token’s supply, allocation, and distribution strategy.
        </motion.h2>

       
          <div
            className="
              p-[1px]
              rounded-lg
              bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
            "
          >

            <div className=" bg-[#000000] rounded-lg px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-14">
              
              {/* Contract Address Box */}

               <motion.div
                  className="
                    p-[1px]
                    rounded-lg w-full max-w-4xl mx-auto
                    bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
                  "
                >
                <motion.div
                  className="w-full max-w-4xl mx-auto rounded-lg bg-[linear-gradient(90deg,#111111_0%,#090909_100%)] px-3 sm:px-6 py-4 flex items-center justify-center text-center overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={boxVariants}
                  whileHover="hover"
                >
                  <p className="text-gradient font-[400] text-base sm:text-base md:text-xl lg:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                    {isMobile ? shortAddress : contractAddress}
                  </p>
                </motion.div>
                </motion.div>


              {/* Copy Button */}
                  <motion.div
                    className="flex justify-center mt-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeInUp}
                  >
                    <motion.button
                      onClick={handleCopy}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 border border-[#FFCC66] text-gradient font-[400] px-5 sm:px-6 py-2.5 rounded-md text-sm sm:text-base lg:text-xl hover:bg-[#d4a62a] hover:text-black transition-all duration-300"
                    >
                      {/* <FiCopy size={18} /> */}
                      {copied ? "Copied!" : "Copy Address"}
                    </motion.button>
                  </motion.div>
            </div>
        </div>

        {/* Copied Popup */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-5 right-5 z-50"
          >
            <div className="bg-[#FFCC66] text-black px-5 py-3 rounded-lg shadow-xl text-sm sm:text-base font-semibold">
              Address Copied Successfully!
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContractAddress;






