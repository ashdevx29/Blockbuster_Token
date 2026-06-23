import { useState } from "react";
import { TbMoneybag, TbPigMoney } from "react-icons/tb";
import { useAccount } from "wagmi";
import { toast } from "react-hot-toast";

import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
import Connect from "./Connect";

import addData from "../../assets/ico_dash/addData.png";
import AddFundimg from "../../assets/ico_dash/addfund.png";

const AddFund = () => {
  const { isConnected, address } = useAccount();

  const [data, setData] = useState({
    fund: "",
  });

  const handleChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addFund = async () => {
    if (!isConnected || !address) {
      toast.error("Please connect your wallet!");
      return;
    }

    try {
      const toastId = toast.loading("Processing Transaction...");

      setTimeout(() => {
        toast.success("Fund Added Successfully", {
          id: toastId,
        });

        setData({
          fund: "",
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

      {/* Main Layout */}
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-7 mt-8">

        {/* Left Side */}
        <div className="xl:col-span-2 flex flex-col gap-7">

          {/* Add Fund Card */}
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
              text-3xl
              font-bold

              uppercase

              bg-[linear-gradient(90deg,#B37A14_0%,#F4D37A_50%,#B37A14_100%)]
              "
            >
              <TbPigMoney />
              <span>Add Fund</span>
            </div>

            {/* Form */}
            <div className="p-5 md:p-8">

              <div className="relative">

                <div className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2

                text-[#FFD56B]
                text-xl
                ">
                  <TbMoneybag />
                </div>

                <input
                  type="text"
                  placeholder="Enter Fund Amount"
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

              {/* Buttons */}

              <div className="
              flex
              justify-center
              items-center

              gap-4

              flex-wrap

              mt-8
              ">

                <Connect />

                <button
                  onClick={addFund}
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
                  Add Fund
                </button>

              </div>

            </div>

          </div>

          {/* Bottom Banner */}

          <img
            src={AddFundimg}
            alt="Add Fund"
            className="
            w-full

            rounded-[24px]

            border border-[#7f6225]

            shadow-[0_0_30px_rgba(255,193,7,0.08)]

            object-cover
            "
          />

        </div>

        {/* Right Side Image */}

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

export default AddFund;




// import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
// import { useState } from "react";
// import { TbMoneybag, TbPigMoney } from "react-icons/tb";
// import addData from "../../assets/ico_dash/addData.png";
// import AddFundimg from "../../assets/ico_dash/addFund.png";
// import Connect from "./Connect";
// import { TokenContract, TokenAbi } from "./Herlper/Contract";

// import { toast } from "react-hot-toast";
// import { useAccount } from "wagmi";
// // import { prepareWriteContract, writeContract } from "@wagmi/core";

// const AddFund = () => {
//   const { isConnected, address } = useAccount();

//   const [data, setData] = useState({
//     fund: "",
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

//   const addFund = async () => {
//     if (!address || !isConnected) {
//       toast.error("Please connect your wallet!");
//       return;
//     }

//     try {
//       const { fund } = data;

//       console.log("fund", fund);

//       const toastId = toast.loading("Processing Transaction..");
//       setTimeout(() => {
//         toast.success("Dummy Transaction completed successfully", { id: toastId });
//       }, 1500);

//       /* Backup of original API code:
//       const addTransaction = await prepareWriteContract({
//         address: TokenContract,
//         abi: TokenAbi,
//         functionName: "increaseFunding",
//         args: [fund],
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
//             <div className="flex flex-col gap-5 col-span-2  laptop:col-span-1   justify-center rounded-lg   h-fit    ">
//               <div className=" flex flex-col w-full  bg-[#151618] border-[#424242] border-[2px] rounded-lg ">
//                 <div
//                   className={` flex items-center gap-4 justify-center text-center px-3 py-1  text-black Gbold font-bold uppercase text-2xl rounded-t-lg tracking-wider  bg-gradient w-full h-fit   `}
//                 >
//                   <TbPigMoney />
//                   <p>Add Fund</p>
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
//                       placeholder=" Enter Fund amount  "
//                       value={data.fund}
//                       onChange={(e) => handleChange("fund", e.target.value)}
//                     />
//                   </div>

//                   <div className="flex justify-center">
//                     <Connect />

//                     <button className=" btn1 m-2 px-5 py-2   phone:px-3  border-[#F7A00B] "
//                       onClick={addFund}
//                     >
//                       <div className=" flex gap-2 font-semibold    rounded   tracking-wide Gregular       phone:text-sm text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">
//                         Add Fund
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <img src={AddFundimg} alt="" className="rounded-lg" />
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

// export default AddFund;
