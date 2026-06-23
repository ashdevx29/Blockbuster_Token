import { useState } from "react";
import { BsDatabaseAdd } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { AiOutlineDatabase } from "react-icons/ai";
import { SiWalletconnect } from "react-icons/si";
import { useAccount } from "wagmi";
import { toast } from "react-hot-toast";

import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
import Connect from "./Connect";
import addData from "../../assets/ico_dash/addData.png";

const AddData = () => {
  const { isConnected, address } = useAccount();

  const [data, setData] = useState({
    fund: "",
    walletAddress: "",
    additionalData: "",
  });

  const handleChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addDatas = async () => {
    if (!isConnected || !address) {
      toast.error("Please connect your wallet!");
      return;
    }

    try {
      const toastId = toast.loading("Processing Transaction...");

      setTimeout(() => {
        toast.success("Dummy Transaction Completed Successfully", {
          id: toastId,
        });

        setData({
          fund: "",
          walletAddress: "",
          additionalData: "",
        });
      }, 1500);
    } catch (error) {
      toast.dismiss();
      toast.error("Error in Transaction");
      console.log(error);
    }
  };

  return (
    <div className="mt-14 lg:ml-64 md:ml-56 ml-0 p-3 md:p-5">

      {/* Price Cards */}
      <PriceDetails />

      {/* Main Section */}
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-7 mt-8">

        {/* Form Card */}
        <div
          className="
          xl:col-span-2
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
            text-3xl
            font-bold
            uppercase

            bg-[linear-gradient(90deg,#B37A14_0%,#F4D37A_50%,#B37A14_100%)]
          "
          >
            <BsDatabaseAdd />
            <span>Add Data</span>
          </div>

          {/* Form */}
          <div className="p-5 md:p-8">

            {/* Amount */}

            <div className="relative mb-7">

              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD56B] text-xl">
                <TbMoneybag />
              </div>

              <input
                type="text"
                placeholder="Enter The Amount"
                value={data.fund}
                onChange={(e) =>
                  handleChange("fund", e.target.value)
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

            {/* Wallet */}

            <div className="relative mb-7">

              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD56B] text-xl">
                <SiWalletconnect />
              </div>

              <input
                type="text"
                placeholder="Enter Wallet Address"
                value={data.walletAddress}
                onChange={(e) =>
                  handleChange("walletAddress", e.target.value)
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

            {/* Additional Data */}

            <div className="relative mb-8">

              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD56B] text-xl">
                <AiOutlineDatabase />
              </div>

              <input
                type="text"
                placeholder="Enter Additional Data"
                value={data.additionalData}
                onChange={(e) =>
                  handleChange("additionalData", e.target.value)
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

            <div className="flex justify-center items-center gap-4 flex-wrap">

              <Connect />

              <button
                onClick={addDatas}
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
                Add Data
              </button>

            </div>
          </div>
        </div>

        {/* Image Card */}

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
            alt="Add Data"
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

export default AddData;



// import { useState } from "react";
// import { BsDatabaseAdd } from "react-icons/bs";
// import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
// import addData from "../../assets/ico_dash/addData.png";

// import { TbMoneybag } from "react-icons/tb";
// import { AiOutlineDatabase } from "react-icons/ai";
// import { SiWalletconnect } from "react-icons/si";
// import Connect from "./Connect";

// import { TokenContract, TokenAbi } from "./Herlper/Contract";

// import { toast } from "react-hot-toast";
// import { useAccount } from "wagmi";
// // import { prepareWriteContract, writeContract } from "@wagmi/core";

// const AddData = () => {
//   const { isConnected, address } = useAccount();

//   const [data, setData] = useState({
//     fund: "",
//     walletAddress: "",
//     additionalData: "",
//   });

//   const handleChange = (field, value, index = null) => {
//     if (field === "walletAddress") {
//       const updatedWallets = [...data.walletAddress];
//       updatedWallets[index] = value;
//       setData({ ...data, walletAddress: updatedWallets });
//     } else {
//       setData({ ...data, [field]: value });
//     }
//   };

//   const addDatas = async () => {
//     if (!address || !isConnected) {
//       toast.error("Please connect your wallet!");
//       return;
//     }

//     try {
//       const { fund, walletAddress, additionalData } = data;

//       console.log("fund", fund);
//       console.log("walletAddress", walletAddress);
//       console.log("additionalData", additionalData);

//       const toastId = toast.loading("Processing Transaction..");

//       setTimeout(() => {
//         toast.success("Dummy Transaction completed successfully", { id: toastId });
//       }, 1500);

//       /* Backup of original API code:
//       const addTransaction = await prepareWriteContract({
//         address: TokenContract,
//         abi: TokenAbi,
//         functionName: "addFunding",
//         args: [fund, walletAddress, additionalData],
//         from: address,
//       });

//       await writeContract(addTransaction);
//       */
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
//             <div className="flex col-span-2  laptop:col-span-1   justify-center rounded-lg bg-gray-50 h-fit dark:bg-[#151618] border-[#424242] border-[2px]   ">
//               <div className=" flex flex-col w-full ">
//                 <div
//                   className={` flex items-center gap-4 justify-center text-center px-3 py-1  text-black Gbold font-bold uppercase text-2xl rounded-t-lg tracking-wider  bg-gradient w-full h-fit   `}
//                 >
//                   <BsDatabaseAdd />
//                   <p>Add Data</p>
//                 </div>

//                 <div className=" py-10 px-5 phone:px-2 ">
//                   <div className="relative mb-8">
//                     <div className="absolute inset-y-0 start-0 flex items-center text-xl ps-3.5 pointer-events-none">
//                       <TbMoneybag />
//                     </div>
//                     <input
//                       type="text"
//                       id="input-group-1"
//                       className=" capitalize  border-[#424242]   text-lg rounded-lg  block w-full ps-10 p-3    bg-black   placeholder-gray-400 text-white focus:ring-gray-700  border-[2px] focus:border-gray-700 "
//                       placeholder=" Enter The amount  "
//                       value={data.fund}
//                       onChange={(e) => handleChange("fund", e.target.value)}
//                     />
//                   </div>

//                   <div className="relative mb-8">
//                     <div className="absolute inset-y-0 start-0 flex items-center text-xl ps-3.5 pointer-events-none">
//                       <SiWalletconnect />
//                     </div>
//                     <input
//                       type="text"
//                       id="input-group-1"
//                       className=" capitalize  border-[#424242]   text-lg rounded-lg  block w-full ps-10 p-3    bg-black   placeholder-gray-400 text-white focus:ring-gray-700  border-[2px] focus:border-gray-700 "
//                       placeholder=" Enter The wallet address  "
//                       onChange={(e) => handleChange("walletAddress", e.target.value)}
//                     />
//                   </div>
//                   <div className="relative mb-8">
//                     <div className="absolute inset-y-0 start-0 flex items-center text-xl ps-3.5 pointer-events-none">
//                       <AiOutlineDatabase />
//                     </div>
//                     <input
//                       type="text"
//                       id="input-group-1"
//                       className=" capitalize  border-[#424242]   text-lg rounded-lg  block w-full ps-10 p-3    bg-black   placeholder-gray-400 text-white focus:ring-gray-700  border-[2px] focus:border-gray-700 "
//                       placeholder=" Enter  additional data  "
//                       value={data.additionalData}
//                       onChange={(e) =>
//                         handleChange("additionalData", e.target.value)
//                       }
//                     />
//                   </div>

//                   <div className="flex justify-center">
//                     <Connect />
//                     <button className=" btn1 m-2 px-5 py-2   phone:px-3  border-[#F7A00B] "
//                       onClick={addDatas}
//                     >
//                       <div className=" flex gap-2 font-semibold    rounded   tracking-wide Gregular       phone:text-sm text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">
//                         Add Data
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid laptop:hidden col-span-1 items-center justify-center rounded-lg bg-gray-50   dark:bg-[#151618] border-[#424242] border-[2px] ">
//               <img src={addData} className=" h-full " alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddData;
