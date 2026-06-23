import React, { useState } from "react";
import { MdPriceCheck } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";

import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
import Connect from "./Connect";

import addData from "../../assets/ico_dash/addData.png";
import upPrice from "../../assets/ico_dash/update price.png";

const UpdatePrice = () => {
  const [usdtPrice] = useState(1500);
  const [bnbPrice] = useState(450000);

  const [data, setData] = useState({
    usdtRate: "",
    bnbRate: "",
  });

  const handleChange = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setRate = () => {
    console.log("USDT :", data.usdtRate);
    console.log("BNB :", data.bnbRate);

    alert("Price Updated Successfully");
  };

  return (
    <div className="mt-14 lg:ml-64 md:ml-56 ml-0 p-3 md:p-5">

      {/* Price Cards */}
      <PriceDetails />

      {/* Main Layout */}

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-7 mt-8">

        {/* Left Section */}

        <div className="xl:col-span-2 flex flex-col gap-7">

          {/* Update Price Card */}

          <div
            className="
            rounded-[26px]
            overflow-hidden

            border border-[#7f6225]

            bg-[#05080d]

            shadow-[0_0_35px_rgba(255,193,7,0.10)]
            "
          >

            {/* Header */}

            <div
              className="
              flex
              items-center
              justify-center
              gap-3

              py-5

              text-black

              text-2xl
              md:text-3xl

              font-bold

              uppercase

              bg-[linear-gradient(90deg,#B37A14_0%,#F4D37A_50%,#B37A14_100%)]
              "
            >
              <MdPriceCheck size={30} />

              <span>Update Price</span>
            </div>

            {/* Body */}

            <div className="p-5 md:p-8">

              {/* USDT */}

              <p className="text-white text-lg mb-3">
                1 USDT =

                <span className="text-[#FFD56B] font-bold ml-2">
                  {usdtPrice} BBT
                </span>
              </p>

              <div className="relative mb-8">

                <div
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2

                  text-[#FFD56B]
                  text-xl
                  "
                >
                  <TbMoneybag />
                </div>

                <input
                  type="text"

                  placeholder="Enter USDT Rate"

                  value={data.usdtRate}

                  onChange={(e) =>
                    handleChange("usdtRate", e.target.value)
                  }

                  className="
                  w-full

                  pl-12
                  pr-4
                  py-4

                  rounded-xl

                  bg-[#0B1018]

                  border border-[#2A2F38]

                  text-white

                  placeholder:text-gray-500

                  focus:border-[#FFD56B]

                  focus:ring-2
                  focus:ring-[#FFD56B]/20

                  outline-none

                  transition-all
                  "
                />
              </div>

              {/* BNB */}

              <p className="text-white text-lg mb-3">
                1 BNB =

                <span className="text-[#FFD56B] font-bold ml-2">
                  {bnbPrice} BBT
                </span>
              </p>

              <div className="relative mb-8">

                <div
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2

                  text-[#FFD56B]
                  text-xl
                  "
                >
                  <TbMoneybag />
                </div>

                <input
                  type="text"

                  placeholder="Enter BNB Rate"

                  value={data.bnbRate}

                  onChange={(e) =>
                    handleChange("bnbRate", e.target.value)
                  }

                  className="
                  w-full

                  pl-12
                  pr-4
                  py-4

                  rounded-xl

                  bg-[#0B1018]

                  border border-[#2A2F38]

                  text-white

                  placeholder:text-gray-500

                  focus:border-[#FFD56B]

                  focus:ring-2
                  focus:ring-[#FFD56B]/20

                  outline-none

                  transition-all
                  "
                />
              </div>

              {/* Buttons */}

              <div
                className="
                flex

                justify-center
                items-center

                gap-4

                flex-wrap

                mt-8
                "
              >
                <Connect />

                <button
                  onClick={setRate}

                  className="
                  px-8

                  h-12

                  rounded-xl

                  font-semibold

                  text-black

                  bg-[linear-gradient(90deg,#C28B1C,#FFD56B,#C28B1C)]

                  hover:scale-105

                  transition-all

                  shadow-[0_0_20px_rgba(255,213,107,0.25)]
                  "
                >
                  Update Price
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Banner */}

          <img
            src={upPrice}
            alt="Update Price"

            className="
            w-full

            rounded-[24px]

            border border-[#7f6225]

            shadow-[0_0_30px_rgba(255,193,7,0.08)]

            object-cover
            "
          />

        </div>

        {/* Right Image */}

        <div
          className="
          xl:col-span-1

          flex
          items-center
          justify-center

          rounded-[26px]

          border border-[#7f6225]

          bg-[#05080d]

          overflow-hidden

          shadow-[0_0_35px_rgba(255,193,7,0.10)]

          min-h-[500px]
          "
        >

          <img
            src={addData}

            alt="Illustration"

            className="
            w-full
            h-full

            object-cover

            hover:scale-105

            transition-all duration-500
            "
          />

        </div>

      </div>

    </div>
  );
};

export default UpdatePrice;






// import React, { useState } from "react";
// import { MdPriceCheck } from "react-icons/md";
// import { TbMoneybag } from "react-icons/tb";

// import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
// import Connect from "./Connect";

// import addData from "../../assets/ico_dash/addData.png";
// import upPrice from "../../assets/ico_dash/update price.png";

// const UpdatePrice = () => {

//   // Dummy Current Price
//   const [usdtPrice] = useState(1500);
//   const [bnbPrice] = useState(450000);

//   // Form Data
//   const [data, setData] = useState({
//     usdtRate: "",
//     bnbRate: "",
//   });

//   const handleChange = (key, value) => {
//     setData({
//       ...data,
//       [key]: value,
//     });
//   };

//   const setRate = () => {

//     console.log("USDT Rate :", data.usdtRate);
//     console.log("BNB Rate :", data.bnbRate);

//     alert("Dummy Data Updated Successfully");
//   };

//   return (
//     <>
//       <div className=" Gregular p-2 lg:p-4 h-fit mt-14 md:ml-54 lg:ml-64 ml-0 ">

//         {/* <PriceDetails /> */}

//         <div className="grid grid-cols-3 laptop:grid-cols-1 gap-6 mt-5">

//           {/* LEFT SIDE */}

//           <div className="col-span-2 laptop:col-span-1 flex flex-col gap-6">

//             <div className="bg-[#151618] border-2 border-[#2E2E2E] rounded-2xl overflow-hidden">

//               {/* Header */}

//               <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-4">

//                 <div className="flex justify-center items-center gap-3">

//                   <MdPriceCheck
//                     className="text-black"
//                     size={30}
//                   />

//                   <h2 className="text-black font-bold text-2xl uppercase">
//                     Update Price
//                   </h2>

//                 </div>

//               </div>

//               {/* Body */}

//               <div className="p-8">

//                 {/* USDT */}

//                 <p className="text-white mb-3 text-lg">
//                   1 USDT =

//                   <span className="text-yellow-400 font-bold ml-2">
//                     {usdtPrice} BBT
//                   </span>
//                 </p>

//                 <div className="relative mb-8">

//                   <div className="absolute left-4 top-4 text-yellow-400 text-2xl">
//                     <TbMoneybag />
//                   </div>

//                   <input
//                     type="text"
//                     placeholder="Enter USDT Rate"
//                     className="w-full pl-14 p-4 bg-black border-2 border-[#343434] rounded-xl text-white outline-none"
//                     value={data.usdtRate}
//                     onChange={(e) =>
//                       handleChange("usdtRate", e.target.value)
//                     }
//                   />

//                 </div>

//                 {/* BNB */}

//                 <p className="text-white mb-3 text-lg">

//                   1 BNB =

//                   <span className="text-yellow-400 font-bold ml-2">
//                     {bnbPrice} BBT
//                   </span>

//                 </p>

//                 <div className="relative mb-8">

//                   <div className="absolute left-4 top-4 text-yellow-400 text-2xl">
//                     <TbMoneybag />
//                   </div>

//                   <input
//                     type="text"
//                     placeholder="Enter BNB Rate"
//                     className="w-full pl-14 p-4 bg-black border-2 border-[#343434] rounded-xl text-white outline-none"
//                     value={data.bnbRate}
//                     onChange={(e) =>
//                       handleChange("bnbRate", e.target.value)
//                     }
//                   />

//                 </div>

//                 {/* Buttons */}

//                 <div className="flex justify-center items-center gap-4 flex-wrap">

//                   <Connect />

//                   <button
//                     onClick={setRate}
//                     className="
//                     px-8
//                     py-3
//                     rounded-xl
//                     font-bold
//                     bg-gradient-to-r
//                     from-yellow-400
//                     to-orange-500
//                     text-black
//                     hover:scale-105
//                     duration-300
//                     "
//                   >
//                     Update Price
//                   </button>

//                 </div>

//               </div>

//             </div>

//             {/* Bottom Image */}

//             <img
//               src={upPrice}
//               alt=""
//               className="rounded-2xl w-full object-cover"
//             />

//           </div>

//           {/* RIGHT SIDE */}

//           <div className="laptop:hidden bg-[#151618] border-2 border-[#2E2E2E] rounded-2xl overflow-hidden flex justify-center items-center">

//             <img
//               src={addData}
//               alt=""
//               className="w-full h-full object-cover"
//             />

//           </div>

//         </div>

//       </div>
//     </>
//   );
// };

// export default UpdatePrice;





// import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
// import { TbMoneybag } from "react-icons/tb";
// import { useEffect, useState } from "react";
// import addData from "../../assets/ico_dash/addData.png";
// import upPrice from "../../assets/ico_dash/update price.png";
// import { MdPriceCheck } from "react-icons/md";
// import Connect from "./Connect";
// import { PresaleContract, PresaleAbi } from "./Herlper/Contract";
// import Web3 from "web3";
// import { toast } from "react-hot-toast";
// import { useAccount } from "wagmi";
// import {helper_link} from '../../Componets/IcoComponets/config'
// import { prepareWriteContract, writeContract } from "@wagmi/core";
// const UpdatePrice = () => {
//   const { isConnected, address } = useAccount();
//   const [usdtPrice, setUsdtPrice] = useState(0);
//   const [bnbPrice, setBnbPrice] = useState(0);
//   const Helper_Link = new Web3(
//     helper_link
//   );
  
//   const presaleContract = new Helper_Link.eth.Contract(
//     PresaleAbi,
//     PresaleContract
//   );
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usdtPri = await presaleContract.methods.tokensPerUSDT().call();
//         setUsdtPrice(usdtPri / 10000);

//         const bnbPri = await presaleContract.methods.tokensPerBNB().call();
//         setBnbPrice(bnbPri / 10000);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [data, setData] = useState({
//     usdtRate: "",
//     bnbRate: "",
//   });

//   const handleChange = (key, value) => {
//     setData((prevState) => ({
//       ...prevState,
//       [key]: value,
//     }));
//   };

//   const setRate = async () => {
//     if (!address || !isConnected) {
//       toast.error("Please connect your wallet!");
//       return;
//     }

//     try {
//       const { usdtRate, bnbRate } = data;

//       console.log("usdtRate", usdtRate);
//       console.log("bnbRate", bnbRate);

//       const addTransaction = await prepareWriteContract({
//         address: PresaleContract,
//         abi: PresaleAbi,
//         functionName: "updateRate",
//         args: [bnbRate, usdtRate],
//         from: address,
//       });

//       const toastId = toast.loading("Processing Transaction..");
//       await writeContract(addTransaction);
//       toast.success("Transaction completed successfully", { id: toastId });
//     } catch (error) {
//       toast.dismiss();
//       toast.error("Error in transaction");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="  Gregular p-2 lg:p-4 h-fit mt-14 md:ml-54 lg:ml-64 ml-0  ">
//         <div className="p-4  tablet:p-0      rounded-lg   ">
//           <PriceDetails />

//           <div className="grid grid-cols-3 laptop:grid-cols-1  gap-4 mb-4">
//             <div className="flex flex-col gap-5 col-span-2  laptop:col-span-1   justify-center rounded-lg   h-fit    ">
//               <div className=" flex flex-col w-full  bg-[#151618] border-[#424242] border-[2px] rounded-lg ">
//                 <div
//                   className={` flex items-center gap-4 justify-center text-center px-3 py-1  text-black Gbold font-bold uppercase text-2xl rounded-t-lg tracking-wider  bg-gradient w-full h-fit   `}
//                 >
//                   <MdPriceCheck />
//                   <p>Update Price</p>
//                 </div>

//                 <div className=" py-10 px-5 phone:px-2 ">
//                   <div className="flex flex-col gap-2  w-full">
//                     <p>1 USDT = {usdtPrice}BBT</p>
//                   </div>
//                   <div className="relative mb-8">
//                     <div className="absolute inset-y-0 start-0 flex items-center text-xl ps-3.5 pointer-events-none">
//                       <TbMoneybag />
//                     </div>
//                     <input
//                       type="text"
//                       id="input-group-1"
//                       className=" capitalize  border-[#424242]   text-lg rounded-lg  block w-full ps-10 p-3    bg-black   placeholder-gray-400 text-white focus:ring-gray-700  border-[2px] focus:border-gray-700 "
//                       placeholder=" Enter Enter USDT Rate "
//                       onChange={(e) => handleChange("usdtRate", e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2  w-full">
//                     <p>1 BNB = {bnbPrice}BBT</p>
//                   </div>
//                   <div className="relative mb-8">
//                     <div className="absolute inset-y-0 start-0 flex items-center text-xl ps-3.5 pointer-events-none">
//                       <TbMoneybag />
//                     </div>
//                     <input
//                       type="text"
//                       id="input-group-1"
//                       className=" capitalize  border-[#424242]   text-lg rounded-lg  block w-full ps-10 p-3    bg-black   placeholder-gray-400 text-white focus:ring-gray-700  border-[2px] focus:border-gray-700 "
//                       placeholder=" Enter Enter BNB Rate "
//                       onChange={(e) => handleChange("bnbRate", e.target.value)}
//                     />
//                   </div>

//                   <div className="flex justify-center">
//                     <Connect />

//                     <button
//                       className=" btn1 m-2 px-5 py-2   phone:px-3  border-[#F7A00B] "
//                       onClick={setRate}
//                     >
//                       <div className=" flex gap-2 font-semibold    rounded   tracking-wide Gregular       phone:text-sm text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">
//                         {" "}
//                         Update Price
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <img src={upPrice} alt="" className="rounded-lg" />
//             </div>

//             <div className="grid laptop:hidden col-span-1 items-center justify-center rounded-lg      bg-[#151618] border-[#424242] border-[2px] ">
//               <img src={addData} className=" h-full " alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdatePrice;
