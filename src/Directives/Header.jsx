import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Active Menu Function
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Common Classes
    const menuClass = (path) => `
  font-['Poppins']
  uppercase
  transition-all
  duration-300

  ${isActive(path)
            ? `
        text-sm sm:text-base xl:text-lg
        font-[500] xl:font-[700] sm:font-[600]
        bg-[linear-gradient(94.58deg,_#FFD873_3.26%,_#FFD873_28.5%,_#FFD873_60.93%,_#FFD873_95.37%)]
        bg-clip-text
        text-transparent
      `
            : `
        text-xs lg:text-sm xl:text-base
        text-white
        font-[400]

        hover:text-sm
        sm:hover:text-base
        lg:hover:text-lg

        lg:hover:font-[600] sm:hover:font-[600] hover:font-[500]
        hover:bg-[linear-gradient(94.58deg,_#FFD873_3.26%,_#FFD873_28.5%,_#FFD873_60.93%,_#FFD873_95.37%)]
        hover:bg-clip-text
        hover:text-transparent
      `
        }
`;

    //     const lineClass = (path) => `
    //     absolute
    //     left-1/2
    //     -translate-x-1/2
    //     bottom-[-10px]
    //     h-[2px]
    //     bg-[#FFCC66]
    //     rounded-full
    //     transition-all
    //     duration-300

    //     ${isActive(path)
    //             ? "w-[24px]"
    //             : "w-0 group-hover:w-[24px]"
    //         }
    //   `;

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className={`
                flex items-center justify-between gap-3
                px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12
                py-2 sm:py-4
                sticky top-0 z-50
                transition-all duration-300

                ${scrolled
                        ? "bg-black/70 backdrop-blur-xl border-b border-[#1A1A1A]"
                        : "bg-transparent"
                    }
            `}
            >

                {/* Logo */}
                <motion.div
                    whileHover={{
                        scale: 1.05,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                    }}
                    className="logo relative z-[999]"
                >
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-w-[130px] md:max-w-[150px] lg:max-w-[172px] h-auto"
                        />
                    </Link>
                </motion.div>

                {/* Desktop Section */}
                <div className="hidden lg:flex items-center gap-[25px] lg:gap-[30px] xl:gap-[40px]">

                    {/* Desktop Menu */}
                    <nav>
                        <ul
                            className="
                            flex flex-row
                            items-center
                            gap-5 lg:gap-8 xl:gap-12
                            font-['Poppins']
                            "
                        >

                            {/* HOME */}
                            <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/" className={menuClass("/")}>
                                    HOME
                                </Link>

                                {/* <span className={lineClass("/")}></span> */}
                            </motion.li>

                            <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/?=about" className={menuClass("/about")}>
                                    About Us
                                </Link>

                                {/* <span className={lineClass("/about")}></span> */}
                            </motion.li>

                            {/* USECASE */}
                            <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/?=usecase" className={menuClass("/usecase")}>
                                    USECASE
                                </Link>

                                {/* <span className={lineClass("/usecase")}></span> */}
                            </motion.li>

                            {/* TOKENOMICS */}
                            <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/?=tokenomics" className={menuClass("/#tokenomics")}>
                                    TOKENOMICS
                                </Link>

                                {/* <span className={lineClass("/#tokenomics")}></span> */}
                            </motion.li>

                            {/* ROADMAP */}
                            <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/?=roadmap" className={menuClass("/#roadmap")}>
                                    ROADMAP
                                </Link>

                                {/* <span className={lineClass("/#roadmap")}></span> */}
                            </motion.li>
                            {/* <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/presale" className={menuClass("/presale")}>
                                    Presale
                                </Link>

                            </motion.li> */}

                            {/* PRESALE */}
                            <motion.li
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative group"
                            >
                                <Link to="/?=faq" className={menuClass("/#faq")}>
                                    FAQ
                                </Link>

                                {/* <span className={lineClass("/#faq")}></span> */}
                            </motion.li>
                        </ul>
                    </nav>

                    {/* Desktop Button */}
                    <div>
                        <Link to="/presale">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    background:
                                        "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                                    color: "#000",
                                }}
                                className="
    h-[36px] lg:h-[40px]
    w-[90px] lg:w-[100px]
    rounded-[6px]
    text-sm
    font-['Poppins']
    font-[500]
    border border-[#9D7F31]
    bg-gradient-to-b from-black to-[#101010]
    text-[#E0A634]
    transition-all duration-300
  "
                            >
                                BUY BBT
                            </motion.button>
                        </Link>
                    </div>

                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.45,
                                ease: "easeInOut",
                            }}
                            className="
                                fixed
                                top-0
                                right-0
                                lg:hidden
                                w-[85%]
                                h-screen
                                overflow-y-auto
                                overflow-x-hidden
                                bg-[#080808]
                                z-[1000]
                                border-l
                                border-[#1F1F1F]
                                shadow-[-10px_0px_40px_rgba(0,0,0,0.7)]
                            "
                        >

                            {/* Top Blur */}
                            <div className="absolute top-[-120px] right-[-80px] w-[250px] h-[250px] bg-[#FFCC66]/10 blur-[120px] rounded-full"></div>

                            {/* Mobile Header */}
                            <div className="relative flex items-center justify-between px-5 py-5 border-b border-[#1A1A1A]">

                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-[135px]"
                                />
                            </div>

                            {/* Mobile Links */}
                            <ul
                                onClick={closeMenu}
                                className="
                                flex
                                flex-col
                                gap-3
                                px-4
                                py-6
                                font-['Poppins']
                            "
                            >

                                {[
                                    {
                                        name: "HOME",
                                        link: "/",
                                    },
                                    {
                                        name: "ABOUT US",
                                        link: "/?=about",
                                    },
                                    {
                                        name: "USECASE",
                                        link: "/?=usecase",
                                    },
                                    {
                                        name: "TOKENOMICS",
                                        link: "/?=tokenomics",
                                    },
                                    {
                                        name: "ROADMAP",
                                        link: "/?=roadmap",
                                    },
                                    {
                                        name: "FAQ",
                                        link: "/?=faq",
                                    },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            x: 30,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: index * 0.08,
                                        }}
                                    >
                                        <Link
                                            to={item.link}
                                            className="
                                            flex
                                            items-center
                                            justify-between
                                            px-4
                                            py-[15px]
                                            rounded-[14px]
                                            bg-[#0D0D0D]
                                            border border-transparent
                                            hover:border-[#3A2D12]
                                            transition-all
                                            duration-300
                                        "
                                        >
                                            <span className="text-[15px] text-white font-[600]">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}

                                {/* Mobile Button */}
                                <motion.li
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.4,
                                    }}
                                    className="pt-4"
                                >
                                    <Link to="/presale">
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            whileHover={{
                                                scale: 1.02,
                                            }}
                                            className="
                                            w-full
                                            h-[40px]
                                            rounded-[6px]
                                            font-['Poppins']
                                            text-sm
                                            font-[500] border-2 border-[#9D7F31]
                                            text-gradient
                                            bg-gradient-to-b from-black to-[#101010]
                                            transition-all
                                            duration-300
                                        "
                                        >
                                            BUY BBT
                                        </motion.button>
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>

                {/* Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMobileMenu}
                            className="
                            fixed
                            inset-0
                            md:hidden
                            bg-black/70
                            backdrop-blur-[3px]
                            z-[100]
                        "
                        ></motion.div>
                    )}
                </AnimatePresence>

                {/* Tablet Buy Button (sm to lg) */}
                <div className="hidden sm:block lg:hidden mr-[30px] ml-auto">
                    <Link to="/presale">
                        <button
                            className="
                h-[38px]
                w-[100px]
                rounded-[6px]
                text-sm
                font-['Poppins']
                font-[500]
                border-2 border-[#9D7F31]
                text-gradient
                bg-gradient-to-b from-black to-[#101010]
            "
                        >
                            BUY BBT
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{
                        boxShadow:
                            "0px 0px 18px rgba(242,222,117,0.18)",
                    }}
                    className="
                    lg:hidden
                    w-[42px]
                    h-[42px]
                    rounded-full
                    border
                    border-[#242424]
                    bg-[#0D0D0D]
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    relative
                    z-[1000]
                    transition-all
                    duration-300
                "
                    onClick={toggleMobileMenu}
                >

                    {/* Hamburger */}
                    <div className="relative w-[18px] h-[18px] flex items-center justify-center">

                        {/* Top */}
                        <span
                            className={`
                            absolute
                            w-[18px]
                            h-[2px]
                            rounded-full
                            transition-all
                            duration-300
                            bg-[linear-gradient(94.58deg,_#B17E1C_3.26%,_#F2DE75_28.5%,_#F2DE75_60.93%,_#C9A43E_95.37%)]

                            ${isMobileMenuOpen
                                    ? "rotate-45"
                                    : "-translate-y-[6px]"
                                }
                        `}
                        ></span>

                        {/* Middle */}
                        <span
                            className={`
                            absolute
                            w-[18px]
                            h-[2px]
                            rounded-full
                            transition-all
                            duration-300
                            bg-[linear-gradient(94.58deg,_#B17E1C_3.26%,_#F2DE75_28.5%,_#F2DE75_60.93%,_#C9A43E_95.37%)]

                            ${isMobileMenuOpen
                                    ? "opacity-0"
                                    : "opacity-100"
                                }
                        `}
                        ></span>

                        {/* Bottom */}
                        <span
                            className={`
                            absolute
                            w-[18px]
                            h-[2px]
                            rounded-full
                            transition-all
                            duration-300
                            bg-[linear-gradient(94.58deg,_#B17E1C_3.26%,_#F2DE75_28.5%,_#F2DE75_60.93%,_#C9A43E_95.37%)]

                            ${isMobileMenuOpen
                                    ? "-rotate-45"
                                    : "translate-y-[6px]"
                                }
                        `}
                        ></span>

                    </div>
                </motion.div>

            </motion.header>
        </>
    );
}

export default Header;

