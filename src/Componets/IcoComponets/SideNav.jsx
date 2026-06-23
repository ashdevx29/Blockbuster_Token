import { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BiArrowBack, BiWallet } from "react-icons/bi";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdPriceCheck } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { TbPigMoney, TbWalletOff } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import logo from "../../assets/logo.png";
import icon from "../../assets/faq.png";
import { Link } from "react-router-dom";

const SideNav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);

            // Auto expand on large screens
            if (width >= 1280) {
                setIsCollapsed(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(!isSidebarOpen);
        } else {
            setIsCollapsed(!isCollapsed);
        }
    };

    const closeSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <>
            <div className="Gregular">
                {/* Navbar */}
                <div className="bg-[#000000] border-b-[#EFC56F] border-b-[2px] fixed w-full z-[50] flex gap-5">

                    {/* Hamburger Button - Visible below 1280px */}
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg h-fit focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="#EFC56F"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            />
                        </svg>
                    </button>

                    <div className="bg-[#000000] flex justify-end w-full px-8 py-2 md:ml-0">
                        <div className="flex items-center gap-3">
                            <div className="flex text-right text-[#fff] text-xs sm:text-sm lg:text-lg flex-col">
                                <p>Blockbuster Admin</p>
                            </div>
                            <img src={icon} className="w-6 sm:w-8 md:w-10 h-fit" alt="" />
                        </div>
                    </div>
                </div>

                {/* Overlay for Mobile */}
                {/* <div
                    onClick={closeSidebar}
                    className={`fixed inset-0 z-[40] ${isMobile && isSidebarOpen ? "bg-[#000000] block" : "hidden"}`}
                /> */}
                {/* Overlay for Mobile */}
<div
    onClick={closeSidebar}
    className={`fixed inset-0 z-[40] 
        ${isMobile && isSidebarOpen 
            ? "  block" 
            : "hidden"
        }`}
/>

                {/* Sidebar */}
                <aside
                    id="default-sidebar"
                    className={`fixed border-r-[#EFC56F] border-r-[2px] top-0  left-0 z-50 h-screen bg-[#000000]  transition-all duration-300
    ${isMobile
                            ? `${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-36 sm:w-42`
                            : `${isCollapsed ? "w-20" : "w-54"} lg:w-64 lg:translate-x-0`
                        }`}
                >
                    {/* Mobile Close Button */}
                    {isMobile && isSidebarOpen && (
                        <div
                            onClick={toggleSidebar}
                            className="absolute left-[96%] top-10 p-1 bg-[#EFC56F] text-black rounded-lg text-sm cursor-pointer lg:hidden"
                        >
                            <BiArrowBack />
                        </div>
                    )}

                    <div className="h-full px-2 sm:px-3 py-3 sm:py-4 overflow-y-auto bg-[#000000]">
                        <ul className="space-y-1 sm:space-y-2 font-medium">
                            {/* Logo */}
                            <li className="mb-5 md:mb-8">
                                {/* <img
                                    className={`transition-all ${isCollapsed ? "w-12 mx-auto" : "w-[10rem]"}`}
                                    src={logo}
                                    alt=""
                                /> */}
                                <img
                                    src={logo}
                                    alt="logo"
                                    className={`
                                        transition-all duration-300
                                        ${isCollapsed ? "w-12 mx-auto" : "w-[100px] sm:w-[120px] lg:w-[10rem]"}
                                    `}
                                />
                            </li>

                            {/* Dashboard */}
                            <li>
                                <Link
                                    to="/dashboard"
                                    onClick={closeSidebar}
                                    className="flex items-center p-1 sm:p-2 rounded-lg text-[#F6D06B] hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212] group"
                                >
                                    <MdOutlineDashboard className="text-base sm:text:lg lg:text-2xl" />
                                    {!isCollapsed && <span className="Gbold text-xs sm:text-sm md:text-base lg:text-xl font-[500] lg:font-bold ms-3">Dashboard</span>}
                                </Link>
                            </li>

                            {/* Back Funding */}
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center  p-1 sm:p-2 rounded-lg text-[#F6D06B] hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]"
                                >
                                    <FaDollarSign className="text-base sm:text:lg lg:text-2xl" />
                                    {!isCollapsed && <span className="Gbold  text-[10px] sm:text-xs md:text-sm lg:text-xl font-[500] lg:font-bold ms-3">Back Funding</span>}
                                </a>

                                <ul className="space-y-1  sm:space-y-2 mt-1 sm:mt-2 ml-3 sm:ml-5 font-medium">
                                    <li className="list-inside">
                                        <Link to="/addData" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <BsDatabaseAdd className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Add Data</span>}
                                        </Link>
                                    </li>
                                    <li className="list-inside">
                                        <Link to="/addFund" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <TbPigMoney className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Add Fund</span>}
                                        </Link>
                                    </li>
                                    <li className="list-inside">
                                        <Link to="/decreaseFund" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <GiPayMoney className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Decrease Fund</span>}
                                        </Link>
                                    </li>
                                    <li className="list-inside">
                                        <Link to="/addWallet" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <BiWallet className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Add Wallet</span>}
                                        </Link>
                                    </li>
                                    <li className="list-inside">
                                        <Link to="/removeWallet" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <TbWalletOff className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Remove Wallet</span>}
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Presale */}
                            <li>
                                <div className="flex items-center p-2 rounded-lg text-[#EFC56F] hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212] group">
                                    <FaWallet className="text-base sm:text:lg lg:text-2xl" />
                                    {!isCollapsed && <span className="Gbold  text-xs sm:text-sm md:text-base lg:text-xl font-[500] lg:font-bold ms-3">Presale</span>}
                                </div>

                                <ul className="space-y-2 mt-2 ml-5 font-medium">
                                    <li className="list-inside">
                                        <Link to="/updatePrice" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <MdPriceCheck className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Update Price</span>}
                                        </Link>
                                    </li>
                                    <li className="list-inside">
                                        <Link to="/buyHistory" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gradient-to-r from-[#E0A634] to-[#FFDB87] hover:border hover:border-[#EFC56F] hover:text-[#131212]">
                                            <LuHistory className="text-base sm:text:lg lg:text-2xl" />
                                            {!isCollapsed && <span className="ms-3 text-[10px] sm:text-xs md:text-sm lg:text-lg">Buy History</span>}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default SideNav;



// import { useEffect, useState } from "react";
// import { BiArrowBack, BiWallet } from "react-icons/bi";

// import logo from "../../assets/logo.png"
// import { BsDatabaseAdd } from "react-icons/bs";
// import { MdPriceCheck } from "react-icons/md";
// import { GiPayMoney } from "react-icons/gi";
// import { TbPigMoney, TbWalletOff } from "react-icons/tb";
// import { LuHistory } from "react-icons/lu";
// import icon from "../../assets/faq.png"
// import { Link } from "react-router-dom";


// const SideNav = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//     // Toggle the sidebar visibility
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };


//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const closeSidebar = () => {
//         if (isMobile) {
//             setIsSidebarOpen(false);
//         }

//     };

//     return (
//         <>
//             <div className=" Gregular   " >
//                 <div className=" bg-[#151618] border-b-[#424242] border-b-[2px] fixed w-full z-[10] flex gap-5" >

//                     <button
//                         aria-controls="default-sidebar"
//                         type="button"
//                         onClick={toggleSidebar} // Toggle sidebar visibility on click
//                         className="tablet:inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg   h-fit hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
//                     >
//                         <span className="sr-only">Open sidebar</span>
//                         <svg
//                             className="w-6 h-6"
//                             aria-hidden="true"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 clipRule="evenodd"
//                                 fillRule="evenodd"
//                                 d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                             />
//                         </svg>
//                     </button>

//                     <div className=" bg-[#151618]   flex  justify-end w-full   px-8 py-2 tablet:ml-0" >

//                         <div className="flex   items-center gap-3">
//                             <div className="flex text-right flex-col">
//                                 <p>Blockbuster Admin</p>
//                                 {/* <p className="font-light text-sm  text-gray-400 ">Admin number 2</p> */}
//                             </div>
//                             <img src={icon} className="w-10 h-fit " alt="" />
//                         </div>

//                     </div>
//                 </div>

//                 <div onClick={closeSidebar} className={` ${isSidebarOpen ? "w-screen h-screen mt-14 bg-[#85838325] fixed z-[10]" : ""} `} >

//                     <aside
//                         id="default-sidebar"
//                         className={`fixed border-r-[#424242] border-r-[2px] top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : 'tablet:-translate-x-full'
//                             } translate-x-0`} // Dynamically apply translate-x-0 or -translate-x-full
//                         aria-label="Sidebar"
//                     >
//                         <div onClick={toggleSidebar} className={`absolute ${isSidebarOpen ? "block" : "hidden"} left-[96%] p-1 bg-gray-200 text-black rounded-lg text-sm top-10`}> <BiArrowBack /> </div>

//                         <div className="h-full px-3 py-4 overflow-y-auto bg-[#151618]">
//                             <ul className="space-y-2 font-medium">
//                                 <li className=" mb-10" >
//                                     <img className="w-[10rem]" src={logo} alt="" />
//                                 </li>
//                                 <li>
//                                     <Link to="/dashboard" onClick={closeSidebar} className="flex items-center p-2 rounded-lg text-white hover:bg-gray-600 group">
//                                         <span className=" Gbold  text-xl text-gradient font-bold ">Dashboard</span>
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-600 group">
//                                         <span className=" Gbold  text-xl text-gradient font-bold ">Back Funding</span>
//                                     </a>

//                                     <ul className="space-y-2 mt-2 ml-5 font-medium " >
//                                         <li className=" list-inside ">
//                                             <Link to="/addData" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <BsDatabaseAdd className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Add Data</span>
//                                             </Link>
//                                         </li>

//                                         <li className=" list-inside ">
//                                             <Link to="/addFund" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <TbPigMoney className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Add Fund</span>
//                                             </Link>
//                                         </li>
//                                         <li className=" list-inside ">
//                                             <Link to="/decreaseFund" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <GiPayMoney className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Decrease Fund </span>
//                                             </Link>
//                                         </li>
//                                         <li className=" list-inside ">
//                                             <Link to="/addWallet" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <BiWallet className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Add Wallet </span>
//                                             </Link>
//                                         </li>
//                                         <li className=" list-inside ">
//                                             <Link to="/removeWallet" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <TbWalletOff className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Remove Wallet </span>
//                                             </Link>
//                                         </li>

//                                     </ul>
//                                 </li>

//                                 <li>
//                                     <div className="flex items-center p-2 rounded-lg text-white hover:bg-gray-600 group">

//                                         <span className=" Gbold  text-xl text-gradient font-bold ">Presale</span>
//                                     </div>

//                                     <ul className="space-y-2 mt-2 ml-5 font-medium " >
//                                         <li className=" list-inside ">
//                                             <Link to="/updatePrice" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <MdPriceCheck className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Update Price</span>
//                                             </Link>
//                                         </li>
//                                         <li className=" list-inside ">
//                                             <Link to="/buyHistory" onClick={closeSidebar} className="flex items-center p-2 rounded-l-full text-white hover:bg-gray-500 group">
//                                                 <LuHistory className=" text-2xl" />
//                                                 <span className=" ms-3 text-lg   ">Buy History</span>
//                                             </Link>
//                                         </li>


//                                     </ul>
//                                 </li>



//                             </ul>
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SideNav;

