import { Web3Button } from "@web3modal/react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Web3 from "web3";
import { helper_link } from "../../Componets/IcoComponets/config";
import { BiWallet } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Connect = () => {
  const { isConnected, address } = useAccount();

  const [isOpen, setIsOpen] = useState(false);
  const [walletBal, setWalletBal] = useState("0");

  const Helper_Link = new Web3(helper_link);

  const closeModal = () => {
    setIsOpen(false);
  };

  const checkWalletAddress = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isConnected && address) {
      checkwalletBal(address);
    }
  }, [isConnected, address]);

  const checkwalletBal = async (walletAddress) => {
    try {
      const balance = await Helper_Link.eth.getBalance(walletAddress);

      const balanceInEther =
        Helper_Link.utils.fromWei(balance, "ether");

      setWalletBal(balanceInEther);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Connect Button */}

      <button
        onClick={checkWalletAddress}
        className="
        h-12

        px-6

        rounded-xl

        font-semibold

        text-black

        bg-[linear-gradient(90deg,#B37A14_0%,#FFD56B_50%,#B37A14_100%)]

        hover:scale-105

        transition-all duration-300

        shadow-[0_0_20px_rgba(255,213,107,0.25)]

        flex items-center gap-2
        "
      >
        <BiWallet className="text-xl" />

        {isConnected
          ? `Bal : ${parseFloat(walletBal || 0).toFixed(
              3
            )} BNB`
          : "Connect Wallet"}
      </button>

      {/* Modal */}

      {isOpen && (
        <div
          onClick={closeModal}
          className="
          fixed

          inset-0

          z-[999]

          bg-black/70

          backdrop-blur-sm

          flex

          items-center

          justify-center

          p-4
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
            relative

            w-full

            max-w-md

            rounded-[28px]

            overflow-hidden

            border border-[#7f6225]

            bg-[#05080d]

            shadow-[0_0_45px_rgba(255,193,7,0.18)]
            "
          >
            {/* Header */}

            <div
              className="
              py-5

              text-center

              text-2xl

              font-bold

              uppercase

              text-black

              bg-[linear-gradient(90deg,#B37A14_0%,#F4D37A_50%,#B37A14_100%)]
              "
            >
              Connect Wallet
            </div>

            {/* Close */}

            <button
              onClick={closeModal}
              className="
              absolute

              top-3
              right-3

              w-10
              h-10

              rounded-full

              bg-[#10151d]

              text-[#FFD56B]

              flex
              items-center
              justify-center

              hover:bg-[#1d2430]

              transition
              "
            >
              <IoClose size={22} />
            </button>

            {/* Body */}

            <div className="px-6 py-8">

              <div className="flex justify-center mb-5">

                <div
                  className="
                  w-20
                  h-20

                  rounded-full

                  border border-[#7f6225]

                  bg-[#0b1018]

                  flex
                  items-center
                  justify-center

                  shadow-[0_0_25px_rgba(255,213,107,0.12)]
                  "
                >
                  <BiWallet
                    className="text-[#FFD56B]"
                    size={38}
                  />
                </div>

              </div>

              <p
                className="
                text-center

                text-gray-400

                text-sm

                leading-7

                mb-8
                "
              >
                Connect with one of our available wallet
                providers or create a new wallet.
              </p>

              {/* Web3 Button */}

              <div className="flex justify-center">

                <Web3Button />

              </div>

              {/* Footer */}

              <div className="text-center mt-8">

                <a
                  href="#"
                  className="
                  text-[#D6B15B]

                  text-sm

                  hover:text-[#FFD56B]

                  transition-all
                  "
                >
                  Why do I need to connect my wallet?
                </a>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Connect;










// import { Web3Button } from "@web3modal/react";
// import { useEffect, useState } from "react";
// import { useAccount } from "wagmi";
// import Web3 from "web3";
// import {helper_link} from '../../Componets/IcoComponets/config'
// const Connect = () => {
//   const { isConnected, address } = useAccount();
//   const [isOpen, setIsOpen] = useState(false);
//   const [walletBal, setwalletBal] = useState("");

//   const Helper_Link = new Web3(helper_link);
  
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const checkWalletAddress = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isConnected) {
//       checkwalletBal(address);
//     }
//   }, [isConnected, address]);

//   const checkwalletBal = async (walletAddress) => {
//     try {
//       const balance = await Helper_Link.eth.getBalance(walletAddress);
//       const balanceInEther = Helper_Link.utils.fromWei(balance);
//       setwalletBal(balanceInEther);
//     } catch (error) {
//       console.error("Error fetching wallet balance:", error);
//     }
//   };

//   return (
//     <>
//       {isConnected ? (
//         <button
//           className=" btn1 m-2 px-5 py-2   phone:px-3  border-[#F7A00B] "
//           onClick={checkWalletAddress}
//         >
//           <div className=" flex gap-2 font-semibold    rounded   tracking-wide Gregular       phone:text-sm text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">
//             Bal: {parseFloat(walletBal).toFixed(3)} BNB
//           </div>
//         </button>
//       ) : (
//         <button
//           className=" btn1 m-2 px-5 py-2   phone:px-3  border-[#F7A00B] "
//           onClick={checkWalletAddress}
//         >
//           <div className=" flex gap-2 font-semibold    rounded   tracking-wide Gregular       phone:text-sm text-white md:text-white  hover:text-white md:hover:bg-transparent border-gray-700">
//             Connect Wallet
//           </div>
//         </button>
//       )}

//       {isOpen && (
//         <div
//           id="popup-modal"
//           onClick={closeModal}
//           tabIndex="-1"
//           className="fixed  h-[100vh] inset-0 z-50  bg-slate-900  bg-opacity-50    "
//         >
//           <div className="h-[100vh] flex items-center justify-center">
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative h-fit   rounded-3xl shadow bg-gray-900 border-2 border-[--primary-color] bg-opacity-90 "
//             >
//               <button
//                 onClick={closeModal}
//                 type="button"
//                 className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 data-modal-hide="popup-modal"
//               >
//                 <svg
//                   className="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>

//               <div className=" max-w-[40rem] p-4 md:p-5 text-center">
//                 <div className="flex gap-3 flex-col items-center justify-center">
//                   <div className="p-4 md:p-5">
//                     <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
//                       Connect with one of our available wallet providers or
//                       create a new one.
//                     </p>
//                     <ul className="my-4 space-y-3">
//                       <Web3Button />
//                     </ul>
//                     <div>
//                       <a
//                         href="#"
//                         className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
//                       >
//                         <svg
//                           className="w-3 h-3 me-2"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                         Why do I need to connect with my wallet?
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Connect;
