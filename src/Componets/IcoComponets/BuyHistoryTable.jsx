import { useState } from "react";
import { CgCopy } from "react-icons/cg";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const BuyHistoryTable = () => {
  const [copyStatus, setCopyStatus] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const transactions = [
    {
      hash: "0x8f4a1c9d5e7b123456789abcdef123456789abcd",
      value: "250000000000000000000",
      timeStamp: "1782105000",
    },
    {
      hash: "0x3b7d8f2e1a456789abcdef123456789abcdef123",
      value: "150000000000000000000",
      timeStamp: "1782108600",
    },
    {
      hash: "0x7c9e5a2b3456789abcdef123456789abcdef456",
      value: "50000000000000000000",
      timeStamp: "1782112200",
    },
    {
      hash: "0x1a2b3c4d5e6f789abcdef123456789abcdef789",
      value: "350000000000000000000",
      timeStamp: "1782115800",
    },
    {
      hash: "0x9f8e7d6c5b4a321abcdef123456789abcdef321",
      value: "100000000000000000000",
      timeStamp: "1782119400",
    },
    {
      hash: "0xabcdef1234567890abcdef1234567890abcdef12",
      value: "75000000000000000000",
      timeStamp: "1782123000",
    },
  ];

  const totalPages = Math.ceil(
    transactions.length / itemsPerPage
  );

  const currentPageData = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);

    setCopyStatus((prev) => ({
      ...prev,
      [key]: true,
    }));

    setTimeout(() => {
      setCopyStatus((prev) => ({
        ...prev,
        [key]: false,
      }));
    }, 1500);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}
    ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="w-full">

      <div
        className="
        rounded-[22px]
        overflow-hidden

        border border-[#7f6225]

        bg-[#05080d]

        shadow-[0_0_35px_rgba(255,193,7,0.12)]
      "
      >

        {/* Header */}

        <div
          className="
          py-3 px-4

          text-center

          text-black

          font-bold

          text-2xl

          uppercase

          bg-[linear-gradient(90deg,#B37A14_0%,#F4D37A_50%,#B37A14_100%)]
        "
        >
          Buy History
        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px]">

            <thead className="uppercase text-[#D6B15B] text-sm bg-[#10151d]">

              <tr>

                <th className="px-8 py-5 text-left">
                  Sr No.
                </th>

                <th className="px-8 py-5 text-left">
                  TRX HASH
                </th>

                <th className="px-8 py-5 text-left">
                  Amount
                </th>

                <th className="px-8 py-5 text-left">
                  Buying Date
                </th>

              </tr>

            </thead>

            <tbody>

              {currentPageData.map((row, index) => (

                <tr
                  key={index}
                  className="
                  border-b border-[#242424]

                  bg-[#05080d]

                  hover:bg-[#0e141d]

                  transition-all duration-300
                "
                >

                  <td className="px-8 py-6 text-white">

                    {(currentPage - 1) *
                      itemsPerPage +
                      index +
                      1}

                  </td>

                  <td
                    className="px-8 py-6 cursor-pointer"

                    onClick={() =>
                      handleCopy(
                        row.hash,
                        `${index}-hash`
                      )
                    }
                  >

                    <div className="flex items-center gap-2">

                      <CgCopy
                        className={`text-lg ${
                          copyStatus[
                            `${index}-hash`
                          ]
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      />

                      <span
                        className="
                        text-[#D6A84D]

                        hover:text-[#FFD56B]

                        transition
                      "
                      >
                        {row.hash.slice(0, 14)}...
                      </span>

                    </div>

                  </td>

                  <td
                    className="
                    px-8 py-6

                    text-[#E3C36B]

                    font-semibold

                    text-lg
                  "
                  >
                    {(
                      Number(row.value) /
                      10 ** 18
                    ).toFixed(5)}
                  </td>

                  <td
                    className="
                    px-8 py-6

                    text-gray-300
                  "
                  >
                    {formatDate(row.timeStamp)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Pagination */}

        <div className="flex justify-end gap-3 p-5 flex-wrap">

          <button
            onClick={() =>
              setCurrentPage(
                currentPage > 1
                  ? currentPage - 1
                  : 1
              )
            }

            className="
            w-11 h-11

            rounded-xl

            bg-[#1A2230]

            border border-[#3a3a3a]

            text-[#FFD56B]

            hover:border-[#FFD56B]
          "
          >
            <FaAngleDoubleLeft className="mx-auto" />
          </button>

          {[...Array(totalPages)].map((_, i) => (

            <button
              key={i}

              onClick={() =>
                setCurrentPage(i + 1)
              }

              className={`
              w-11 h-11

              rounded-xl

              font-bold

              ${
                currentPage === i + 1
                  ? "bg-[linear-gradient(180deg,#D09C31,#F4D37A)] text-black shadow-[0_0_20px_rgba(255,213,107,0.35)]"
                  : "bg-[#1A2230] border border-[#3a3a3a] text-[#FFD56B]"
              }
            `}
            >
              {i + 1}
            </button>

          ))}

          <button
            onClick={() =>
              setCurrentPage(
                currentPage < totalPages
                  ? currentPage + 1
                  : totalPages
              )
            }

            className="
            w-11 h-11

            rounded-xl

            bg-[#1A2230]

            border border-[#3a3a3a]

            text-[#FFD56B]

            hover:border-[#FFD56B]
          "
          >
            <FaAngleDoubleRight className="mx-auto" />
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyHistoryTable;




// import { useState } from "react";
// import { CgCopy } from "react-icons/cg";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

// const BuyHistoryTable = () => {
//   // Static Data
//   const [transactions] = useState([
//     {
//       hash: "0x8f4a1c9d5e7b123456789abcdef123456789abcd",
//       value: "250000000000000000000",
//       timeStamp: "1782105000",
//     },
//     {
//       hash: "0x3b7d8f2e1a456789abcdef123456789abcdef123",
//       value: "150000000000000000000",
//       timeStamp: "1782108600",
//     },
//     {
//       hash: "0x7c9e5a2b3456789abcdef123456789abcdef456",
//       value: "50000000000000000000",
//       timeStamp: "1782112200",
//     },
//     {
//       hash: "0x1a2b3c4d5e6f789abcdef123456789abcdef789",
//       value: "350000000000000000000",
//       timeStamp: "1782115800",
//     },
//     {
//       hash: "0x9f8e7d6c5b4a321abcdef123456789abcdef321",
//       value: "100000000000000000000",
//       timeStamp: "1782119400",
//     },
//     {
//       hash: "0xabcdef1234567890abcdef1234567890abcdef12",
//       value: "75000000000000000000",
//       timeStamp: "1782123000",
//     },
//     {
//       hash: "0x123456789abcdef123456789abcdef123456789a",
//       value: "450000000000000000000",
//       timeStamp: "1782126600",
//     },
//     {
//       hash: "0x987654321abcdef987654321abcdef987654321a",
//       value: "90000000000000000000",
//       timeStamp: "1782130200",
//     },
//     {
//       hash: "0xa1b2c3d4e5f67890abcdef1234567890abcdef34",
//       value: "120000000000000000000",
//       timeStamp: "1782133800",
//     },
//     {
//       hash: "0xfedcba9876543210abcdef1234567890abcdef56",
//       value: "200000000000000000000",
//       timeStamp: "1782137400",
//     },
//     {
//       hash: "0xaaaaaa111111bbbbbb222222cccccc333333dddd",
//       value: "80000000000000000000",
//       timeStamp: "1782141000",
//     },
//     {
//       hash: "0xeeeeee444444ffffff555555gggggg666666hhhh",
//       value: "60000000000000000000",
//       timeStamp: "1782144600",
//     },
//   ]);

//   const data = {
//     withdrawal: transactions,
//   };

//   const [currentData, setCurrentData] = useState("withdrawal");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [copyStatus, setCopyStatus] = useState({});

//   const itemsPerPage = 10;

//   const totalPages = Math.ceil(
//     data[currentData].length / itemsPerPage
//   );

//   const getCurrentPageData = () => {
//     const dataset = data[currentData];
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     return dataset.slice(startIndex, endIndex);
//   };

//   const handleSwitchData = (type) => {
//     setCurrentData(type);
//     setCurrentPage(1);
//   };

//   const handlePageClick = (pageNumber) => {
//     if (pageNumber === "...") return;
//     setCurrentPage(pageNumber);
//   };

//   const createPagination = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }

//     return pageNumbers;
//   };

//   const currentPageData = getCurrentPageData();

//   const handleCopyAddress = (code, index, column) => {
//     const key = `${index}-${column}`;

//     navigator.clipboard
//       .writeText(code)
//       .then(() => {
//         setCopyStatus((prev) => ({
//           ...prev,
//           [key]: true,
//         }));

//         setTimeout(() => {
//           setCopyStatus((prev) => ({
//             ...prev,
//             [key]: false,
//           }));
//         }, 2000);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);

//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();

//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");

//     return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
//   };

//   return (
//     <div id="ref-main" className="w-full Gregular">
//      <div className="rounded-[22px] overflow-hidden border border-[#7f6225] bg-[#05080d] shadow-[0_0_35px_rgba(255,193,7,0.12)]">
//       {/* Header */}
//       <div className="space-x-5 w-full">
//         <button
//           onClick={() => handleSwitchData("withdrawal")}
//           className={`px-3 py-3 w-full text-2xl uppercase font-bold tracking-wider
//           ${
//             currentData === "withdrawal"
//               ? "bg-gradient"
//               : "bg-gray-700"
//           } text-black`}
//         >
//           Buy History
//         </button>
//       </div>

//       {/* Table */}
//       <div className="w-full mt-5">
//         <div className="relative overflow-x-auto shadow-md">
//           <table className="w-full text-sm text-left text-gray-300">
//             <thead className="text-xs text-gray-200 uppercase bg-gray-800">
//               <tr className="font-bold text-sm tracking-wider">
//                 <th className="px-6 py-3">Sr No.</th>
//                 <th className="px-6 py-3">TRX Hash</th>
//                 <th className="px-6 py-3">Amount</th>
//                 <th className="px-6 py-3">Buying Date</th>
//               </tr>
//             </thead>

//             <tbody>
//               {currentPageData.map((row, index) => (
//                 <tr
//                   key={index}
//                   className="bg-[#151618] border-b hover:bg-[#292e35]"
//                 >
//                   <td className="px-6 py-4">
//                     {(currentPage - 1) *
//                       itemsPerPage +
//                       index +
//                       1}
//                   </td>

//                   <td
//                     className="px-6 py-4 text-yellow-500 cursor-pointer"
//                     onClick={() =>
//                       handleCopyAddress(
//                         row.hash,
//                         index,
//                         "col0"
//                       )
//                     }
//                   >
//                     <div className="flex gap-2 items-center">
//                       <CgCopy
//                         className={`text-lg ${
//                           copyStatus[
//                             `${index}-col0`
//                           ]
//                             ? "text-green-500"
//                             : "text-white"
//                         }`}
//                       />

//                       <span>
//                         {row.hash.slice(0, 12)}...
//                       </span>
//                     </div>
//                   </td>

//                   <td className="px-6 py-4">
//                     {(
//                       row.value /
//                       10 ** 18
//                     ).toFixed(5)}
//                   </td>

//                   <td className="px-6 py-4 text-white">
//                     {formatDate(row.timeStamp)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <nav className="flex gap-2 items-center justify-end pt-4">
//           <button
//             onClick={() =>
//               setCurrentPage(
//                 currentPage > 1
//                   ? currentPage - 1
//                   : 1
//               )
//             }
//             className="px-3 h-8 text-yellow-500 bg-gray-700 rounded"
//             disabled={currentPage === 1}
//           >
//             <FaAngleDoubleLeft />
//           </button>

//           {createPagination().map((page, index) => (
//             <button
//               key={index}
//               onClick={() =>
//                 handlePageClick(page)
//               }
//               className={`px-3 h-8 rounded border border-gray-600
//               ${
//                 currentPage === page
//                   ? "bg-gray-500 text-yellow-500"
//                   : "bg-gray-700 text-yellow-500 hover:bg-gray-600"
//               }`}
//             >
//               {page}
//             </button>
//           ))}

//           <button
//             onClick={() =>
//               setCurrentPage(
//                 currentPage < totalPages
//                   ? currentPage + 1
//                   : totalPages
//               )
//             }
//             className="px-3 h-8 text-yellow-500 bg-gray-700 rounded"
//             disabled={currentPage === totalPages}
//           >
//             <FaAngleDoubleRight />
//           </button>
//         </nav>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default BuyHistoryTable;








// import { useEffect, useState } from "react";
// import { CgCopy } from "react-icons/cg";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
// import axios from "axios";
// import { api_key, api_url, contractAddress, address } from "./config";
// const BuyHistoryTable = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
      
//       const url = `${api_url}?module=account&action=tokentx&contractaddress=${contractAddress}&address=${address}&page=1&offset=10&startblock=0&endblock=999999999&sort=desc&apikey=${api_key}`;
//       try {
//         const response = await axios.get(url);
//         const data = response.data;

//         setTransactions(data.result);
//       } catch (err) {
//         err(err.message);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   const data = {
//     withdrawal: transactions,
//   };

//   const [currentData, setCurrentData] = useState("withdrawal");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const totalPages = Math.ceil(data[currentData].length / itemsPerPage);

//   const getCurrentPageData = () => {
//     const dataset = data[currentData];
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return dataset.slice(startIndex, endIndex);
//   };

//   const handleSwitchData = (type) => {
//     setCurrentData(type);
//     setCurrentPage(1);
//   };

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const createPagination = () => {
//     const pageNumbers = [];
//     const visibleRange = 3;

//     pageNumbers.push(1);

//     if (totalPages <= visibleRange) {
//       for (let i = 2; i <= totalPages; i++) {
//         pageNumbers.push(i);
//       }
//     } else {
//       let startRange = Math.max(2, currentPage - 1);
//       let endRange = Math.min(totalPages - 1, currentPage + 1);

//       if (startRange > 2) {
//         pageNumbers.push("...");
//       }

//       for (let i = startRange; i <= endRange; i++) {
//         pageNumbers.push(i);
//       }

//       if (endRange < totalPages - 1) {
//         pageNumbers.push("...");
//       }

//       if (totalPages > 1) {
//         pageNumbers.push(totalPages);
//       }
//     }

//     return pageNumbers;
//   };

//   const currentPageData = getCurrentPageData();

//   const [copyStatus, setCopyStatus] = useState({});

//   const handleCopyAddress = (code, index, column) => {
//     const key = `${index}-${column}`;
//     // console.log(key)
//     navigator.clipboard
//       .writeText(code)
//       .then(() => {
//         setCopyStatus((prevState) => ({ ...prevState, [key]: true }));
//         setTimeout(() => {
//           setCopyStatus((prevState) => ({ ...prevState, [key]: false }));
//         }, 2000); // Hide the "Copied" message after 2 seconds
//       })
//       .catch((err) => {
//         console.error("Failed to copy text: ", err);
//       });
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");

//     const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

//     return formattedDateTime;
//   };

//   return (
//     <div id="ref-main" className=" w-full Gregular     ">
//       <div className="  space-x-5 w-full    tablet:space-x-2 ">
//         <button
//           onClick={() => handleSwitchData("withdrawal")}
//           className={` px-3 py-1 
//                      ${
//                        currentData === "withdrawal"
//                          ? "bg-gradient"
//                          : "bg-gray-700"
//                      }
//                       text-black Gbold font-bold uppercase  w-full text-2xl   tracking-wider py-3  `}
//         >
//           Buy History
//         </button>
//         {/* <button
//                     onClick={() => handleSwitchData('Refral')}
//                     className={`px-3 py-1
//                      ${currentData === 'Refral' ? 'bg-yellow-500' : 'bg-gray-700'}
//                       text-white rounded-3xl`}
//                 >
//                     Referral
//                 </button> */}
//       </div>
//       <div className=" w-full    ">
//         <div className="relative overflow-x-auto shadow-md   ">
//           <table className="w-full text-sm text-left text-gray-300">
//             <thead className="text-xs text-gray-200 uppercase bg-gray-800">
//               <tr className="font-bold text-sm tracking-wider">
//                 <th scope="col" className="px-6 py-3 text-nowrap ">
//                   Sr no.
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   TRX Hash
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Amount
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Buying Date{" "}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentPageData.map((row, index) => (
//                 <>
//                   <tr
//                     key={index}
//                     className="bg-[#151618] border-b hover:bg-[#292e35]"
//                   >
//                     <td className="px-6 py-4">
//                       {(currentPage - 1) * itemsPerPage + index + 1}
//                     </td>
//                     <td
//                       onClick={() => handleCopyAddress(row.hash, index, "col0")}
//                       className="px-6 py-4 text-yellow-500 "
//                     >
//                       <div className="relative flex gap-2">
//                         <CgCopy
//                           className={`text-lg active:scale-[0.8] transition-all ease-in-out ${
//                             copyStatus[`${index}-col0`]
//                               ? "text-green-500"
//                               : "text-white"
//                           }`}
//                         />
//                         <p className="cursor-pointer">
//                           {row.hash?.length > 10
//                             ? `${row.hash.slice(0, 10)}...`
//                             : row.hash}
//                         </p>
//                       </div>
//                     </td>

//                     <td className="px-6 py-4">
//                       {typeof (row.value / 10 ** 18) === "number"
//                         ? (row.value / 10 ** 18).toFixed(5)
//                         : parseFloat(row.value / 10 ** 18).toFixed(5)}
//                     </td>

//                     <td className="px-6 py-4 text-white ">
//                       <div className="relative flex gap-2">
//                         <p className="cursor-pointer">
//                           {formatDate(row.timeStamp)?.length > 10
//                             ? `${formatDate(row.timeStamp)}`
//                             : formatDate(row.timeStamp)}
//                         </p>
//                       </div>
//                     </td>
//                   </tr>
//                 </>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <nav
//           className="flex gap-2 items-center justify-end pt-4"
//           aria-label="Table navigation"
//         >
//           <button
//             onClick={() =>
//               setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
//             }
//             className="px-3 h-8 text-yellow-500 bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
//             disabled={currentPage <= 1}
//           >
//             <FaAngleDoubleLeft />
//           </button>

//           <div className="inline-flex space-x-2 text-sm">
//             {createPagination().map((page, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageClick(page)}
//                 className={`px-3 h-8 border border-gray-600 rounded ${
//                   currentPage === page
//                     ? "bg-gray-500 text-yellow-500"
//                     : "bg-gray-700 text-yellow-500 hover:text-white hover:bg-gray-600"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() =>
//               setCurrentPage(
//                 currentPage < totalPages ? currentPage + 1 : totalPages
//               )
//             }
//             className="px-3 h-8 text-yellow-500 bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
//             disabled={currentPage >= totalPages}
//           >
//             <FaAngleDoubleRight />
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default BuyHistoryTable;
