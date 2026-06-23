import { GoArrowUpRight } from "react-icons/go";
import { BiWallet } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdOutlineToken } from "react-icons/md";

const PriceDetails = () => {
  const totalFunds = 2450000;
  const totalSupply = 100000000;
  const totalMintedSupply = 65000000;
  const totalUnminted = totalSupply - totalMintedSupply;

  const formatNumber = (number) => {
    if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`;
    if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`;
    if (number >= 1e3) return `${(number / 1e3).toFixed(2)}K`;
    return number.toString();
  };

  const cards = [
    {
      title: "TOTAL BACK FUND",
      value: `$ ${formatNumber(totalFunds)}`,
      icon: <BiWallet />,
    },
    {
      title: "TOTAL SUPPLY",
      value: `${formatNumber(totalSupply)} BBT`,
      icon: <FaCoins />,
    },
    {
      title: "TOTAL MINTED TOKEN",
      value: `${formatNumber(totalMintedSupply)} BBT`,
      icon: <BsDatabaseCheck />,
    },
    {
      title: "TOTAL UNMINTED TOKEN",
      value: `${formatNumber(totalUnminted)} BBT`,
      icon: <MdOutlineToken />,
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6 mb-3 md:mb-6">
      {cards.map((item, index) => (
       <div
  key={index}
  className="
  relative
  overflow-hidden
  rounded-[22px]
  border border-[#7f6225]
  bg-black
  px-5 py-4
  
  shadow-[0_0_30px_rgba(255,193,7,0.15)]
  hover:shadow-[0_0_45px_rgba(255,193,7,0.28)]
  transition-all duration-300
  "
>
  {/* Top Gold Glow */}
  <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFD56B] to-transparent" />

  {/* Top Light */}
  <div className="absolute top-0 left-10 right-10 h-10 bg-[#FFD56B]/10 blur-2xl"></div>

  {/* Main Content */}
  <div className="relative z-10 flex items-center gap-5">

    {/* Left Icon */}
    <div
      className="
      w-14 h-14
      rounded-full
      border border-[#C89B3C]
      bg-[#C89B3C]/10
      flex items-center justify-center
      text-[#FFD56B]
      text-2xl
      shrink-0
      "
    >
      {item.icon}
    </div>

    {/* Right Content */}
    <div className="flex flex-col">
      <p
        className="
        text-[#E5E7EB]
        uppercase
         text-xs sm:text-sm
        tracking-wider
        mb-2
        "
      >
        {item.title}
      </p>

      <h2
        className="
        text-[#FFD56B]
        text-base sm:text-lg lg:text-xl
        font-bold
        drop-shadow-[0_0_10px_rgba(255,213,107,0.35)]
        "
      >
        {item.value}
      </h2>
    </div>
  </div>

  {/* Bottom Waves */}
  <div className="absolute bottom-0 left-0 w-full opacity-25">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-14"
    >
      <path
        d="M0,80 C250,10 450,120 650,70 C850,10 1050,110 1200,50"
        fill="none"
        stroke="#FFD56B"
        strokeWidth="1"
      />

      <path
        d="M0,100 C220,30 420,100 620,60 C820,20 1020,90 1200,70"
        fill="none"
        stroke="#FFD56B"
        strokeWidth="0.8"
      />
    </svg>
  </div>
</div>
      ))}
    </div>
  );
};

export default PriceDetails;










// import { GoArrowUpRight } from "react-icons/go";

// const PriceDetails = () => {
//   const totalFunds = 2450000; // $2.45M
//   const totalSupply = 100000000; // 100M
//   const totalMintedSupply = 65000000; // 65M
//   const totalUnminted = totalSupply - totalMintedSupply;

//   const formatNumber = (number) => {
//     if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`;
//     if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`;
//     if (number >= 1e3) return `${(number / 1e3).toFixed(2)}K`;
//     return number.toString();
//   };

//   const cards = [
//     {
//       title: "Total Back Fund",
//       value: `$ ${formatNumber(totalFunds)}`,
//     },
//     {
//       title: "Total Supply",
//       value: `${formatNumber(totalSupply)} BBT`,
//     },
//     {
//       title: "Total Minted Token",
//       value: `${formatNumber(totalMintedSupply)} BBT`,
//     },
//     {
//       title: "Total Unminted Token",
//       value: `${formatNumber(totalUnminted)} BBT`,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-6">
//       {cards.map((item, index) => (
//         <div
//           key={index}
//           className="
//             relative overflow-hidden
//             bg-[#151618]
//             border border-[#2a2a2a]
//             rounded-2xl
//             p-6
//             min-h-[150px]
//             transition-all duration-300
//             hover:scale-[1.02]
//             hover:border-[#FFA200]
//             hover:shadow-[0_0_20px_rgba(255,162,0,0.25)]
//           "
//         >
//           {/* Top Border Glow */}
//           <div className="absolute top-0 left-0 h-1 w-full bg-[#FFA200]" />

//           <div className="flex justify-between items-center h-full">
//             <div>
//               <p className="text-gray-400 text-xs sm:text-sm mb-3 uppercase tracking-wider">
//                 {item.title}
//               </p>

//               <h2 className="text-white text-base sm:text-xl font-bold">
//                 {item.value}
//               </h2>
//             </div>

//             <div className="w-14 h-14 rounded-full border border-[#FFA200] flex items-center justify-center">
//               <GoArrowUpRight className="text-3xl text-[#FFA200]" />
//             </div>
//           </div>

//           {/* Background Circle */}
//           <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-[#FFA200]/10"></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PriceDetails;



// import { GoArrowUpRight } from "react-icons/go";
// import { useEffect, useState } from "react";
// import { TokenContract, TokenAbi } from "../../Pages/IcoDash/Herlper/Contract";
// import {helper_link} from './config'
// import Web3 from "web3";

// const PriceDetails = () => {
//     const Helper_Link = new Web3(helper_link);
//   const totalSupply = 100000000;
//   const [totalMintedSupply, setMintedTotalSupply] = useState(0);
//   const [totalBurn, setTotalBurn] = useState(0);

//   const [totalFunds, setTotalFunds] = useState([]);

//   const TokenDetails = async () => {
//     try {
//       const tokenContracts = new Helper_Link.eth.Contract(
//         TokenAbi,
//         TokenContract
//       );
//       const tMinted = await tokenContracts.methods.totalSupply().call();
//       const ttMinted = tMinted / 10 ** 18;
//       setMintedTotalSupply(ttMinted);

//       const tokenBurns = totalSupply - ttMinted;
//       setTotalBurn(tokenBurns);

//       const FundtsDetails= await tokenContracts.methods.fundingData().call();
//       FundtsDetails.totalFunds = Number(FundtsDetails.totalFunds); 
//       setTotalFunds(FundtsDetails);
//       console.log("Funds Details",FundtsDetails);
//     } catch (error) {
//       console.error("error in featching data:", error);
//     }
//   };

//   const formatNumber = (number) => {
//     if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`; 
//     if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`; 
//     if (number >= 1e3) return `${(number / 1e3).toFixed(2)}K`; 
//     return number.toFixed(2); 
//   };

// //   console.log("totalMintedSupply", totalMintedSupply);
// //   console.log("totalBurn", totalBurn);
// //   console.log("totalFunds.totalFunds", totalFunds.totalFunds);

//   useEffect(() => {
//     TokenDetails();
//   }, []);

//   return (
//     <>
//       <div className="grid grid-cols-4 laptop:grid-cols-2 laptop:phone:grid-cols-1  gap-4 mb-4">
//         <div className="flex items-center justify-center h-36    bg-[#151618] rounded-lg border-t-4 border-t-[#FFA200] border-[#424242] border-[2px] p-2 ">
//           <div className="flex justify-around items-center w-full h-full flex-wrap     ">
//             <div className="flex flex-col gap-2">
//               <p className="text-xl ">Total Back Fund</p>
//               <p className="text-2xl font-bold">$ {formatNumber(totalFunds.totalFunds || 0)}</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <GoArrowUpRight className=" text-2xl text-yellow-500 " />
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center h-36    bg-[#151618] rounded-lg border-t-4 border-t-[#FFA200] border-[#424242] border-[2px] p-2 ">
//           <div className="flex justify-around items-center w-full h-full flex-wrap  flex-wrap   ">
//             <div className="flex flex-col gap-2">
//               <p className="text-xl ">Total Supply</p>
//               <p className="text-2xl font-bold">{formatNumber(totalSupply)} BBT</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <GoArrowUpRight className=" text-2xl text-yellow-500 " />
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center h-36    bg-[#151618] rounded-lg border-t-4 border-t-[#FFA200] border-[#424242] border-[2px] p-2 ">
//           <div className="flex justify-around items-center w-full h-full flex-wrap     ">
//             <div className="flex flex-col gap-2">
//               <p className="text-xl ">Total Minted Token</p>
//               <p className="text-2xl font-bold">{formatNumber(totalMintedSupply)} BBT</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <GoArrowUpRight className=" text-2xl text-yellow-500 " />
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-center h-36    bg-[#151618] rounded-lg border-t-4 border-t-[#FFA200] border-[#424242] border-[2px] p-2 ">
//           <div className="flex justify-around items-center w-full h-full flex-wrap     ">
//             <div className="flex flex-col gap-2">
//               <p className="text-xl  ">Total Unminted Token</p>
//               <p className="text-2xl font-bold">{formatNumber(totalBurn)} BBT</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <GoArrowUpRight className=" text-2xl text-yellow-500 " />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PriceDetails;
