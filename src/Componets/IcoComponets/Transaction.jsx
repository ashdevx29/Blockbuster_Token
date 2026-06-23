import React, { useEffect, useState } from "react";
import { CgCopy } from "react-icons/cg";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [copyStatus, setCopyStatus] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    setTransactions([
      {
        hash: "0x8f5a123456789abcdef",
        from: "0x1112222233334444",
        to: "0xAAAABBBBCCCCDDDD",
        value: "25",
      },
      {
        hash: "0x7c96b987654321abcd",
        from: "0x9999888877776666",
        to: "0xBBBBCCCCDDDDEEEE",
        value: "50",
      },
      {
        hash: "0x123456789abcdef12",
        from: "0xABCDEF123456789",
        to: "0xFEDCBA987654321",
        value: "100",
      },
      {
        hash: "0x456789abcdef1234",
        from: "0x111AAA222BBB",
        to: "0x999AAA888BBB",
        value: "75",
      },
      {
        hash: "0xabcdefabcdefabcd",
        from: "0x123123123123",
        to: "0x321321321321",
        value: "150",
      },
      {
        hash: "0x987654321abcdef",
        from: "0xAAA111BBB222",
        to: "0xFFF666EEE555",
        value: "45",
      },
    ]);
  }, []);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

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

  return (
    <div className="w-full mt-8">

      {/* Main Box */}
      <div className="rounded-[22px] overflow-hidden border border-[#7f6225] bg-[#05080d] shadow-[0_0_35px_rgba(255,193,7,0.12)]">

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
          Transaction
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="uppercase text-[#D6B15B] text-sm bg-[#10151d]">

              <tr>

                <th className="px-8 py-5 text-left">Sr No.</th>

                <th className="px-8 py-5 text-left">
                  TRX HASH
                </th>

                <th className="px-8 py-5 text-left">
                  FROM
                </th>

                <th className="px-8 py-5 text-left">
                  TO
                </th>

                <th className="px-8 py-5 text-left">
                  Amount
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
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>

                  {/* Hash */}

                  <td
                    className="px-8 py-6 cursor-pointer"
                    onClick={() =>
                      handleCopy(row.hash, `${index}-hash`)
                    }
                  >
                    <div className="flex items-center gap-2">

                      <CgCopy
                        className={`text-lg ${
                          copyStatus[`${index}-hash`]
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      />

                      <span className="text-[#D6A84D] hover:text-[#FFD56B]">
                        {row.hash}...
                      </span>

                    </div>
                  </td>

                  {/* From */}

                  <td
                    className="px-8 py-6 cursor-pointer"
                    onClick={() =>
                      handleCopy(row.from, `${index}-from`)
                    }
                  >
                    <div className="flex gap-2 items-center">

                      <CgCopy className="text-gray-300" />

                      <span className="text-white">
                        {row.from}...
                      </span>

                    </div>
                  </td>

                  {/* To */}

                  <td
                    className="px-8 py-6 cursor-pointer"
                    onClick={() =>
                      handleCopy(row.to, `${index}-to`)
                    }
                  >
                    <div className="flex gap-2 items-center">

                      <CgCopy className="text-gray-300" />

                      <span className="text-white">
                        {row.to}...
                      </span>

                    </div>
                  </td>

                  {/* Amount */}

                  <td className="px-8 py-6 text-[#E3C36B] font-semibold text-lg">
                    {row.value}.00000
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}

        <div className="flex justify-end gap-3 p-5">

          <button
            onClick={() =>
              setCurrentPage(
                currentPage > 1 ? currentPage - 1 : 1
              )
            }
            className="
            w-11 h-11
            rounded-xl
            bg-[#1a2230]
            border border-[#3b3b3b]
            text-[#FFD56B]
            hover:border-[#FFD56B]
            "
          >
            <FaAngleDoubleLeft className="mx-auto" />
          </button>

          {[...Array(totalPages)].map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`
              w-11 h-11 rounded-xl font-bold

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
            bg-[#1a2230]
            border border-[#3b3b3b]
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

export default Transaction;



// import React, { useEffect, useState } from "react";
// import { CgCopy } from "react-icons/cg";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

// const Transaction = () => {
//   // Static Dummy Data
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const dummyTransactions = [
//       {
//         hash: "0x8f5a123456789abcdef123456789abcdef",
//         from: "0x111122223333444455556666777788889999",
//         to: "0xAAAABBBBCCCCDDDDEEEEFFFF111122223333",
//         value: "25000000000000000000",
//       },
//       {
//         hash: "0x7c9b987654321abcdef987654321abcdef",
//         from: "0x999988887777666655554444333322221111",
//         to: "0xBBBBCCCCDDDDEEEEFFFF1111222233334444",
//         value: "50000000000000000000",
//       },
//       {
//         hash: "0x123456789abcdef123456789abcdef123456",
//         from: "0xABCDEF123456789ABCDEF123456789ABCDEF",
//         to: "0xFEDCBA987654321FEDCBA987654321FEDCBA",
//         value: "100000000000000000000",
//       },
//       {
//         hash: "0x456789abcdef123456789abcdef123456789",
//         from: "0x111AAA222BBB333CCC444DDD555EEE666FFF",
//         to: "0x999AAA888BBB777CCC666DDD555EEE444FFF",
//         value: "75000000000000000000",
//       },
//       {
//         hash: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
//         from: "0x123123123123123123123123123123123123",
//         to: "0x321321321321321321321321321321321321",
//         value: "150000000000000000000",
//       },
//       {
//         hash: "0x987654321abcdef987654321abcdef987654",
//         from: "0xAAA111BBB222CCC333DDD444EEE555FFF666",
//         to: "0xFFF666EEE555DDD444CCC333BBB222AAA111",
//         value: "45000000000000000000",
//       },
//     ];

//     setTransactions(dummyTransactions);
//   }, []);

//   const data = {
//     transaction: transactions,
//   };

//   const [currentData, setCurrentData] = useState("transaction");
//   const [currentPage, setCurrentPage] = useState(1);
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

//   const currentPageData = getCurrentPageData();

//   const handleSwitchData = (type) => {
//     setCurrentData(type);
//     setCurrentPage(1);
//   };

//   const handlePageClick = (pageNumber) => {
//     if (pageNumber !== "...") {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const createPagination = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }

//     return pageNumbers;
//   };

//   const [copyStatus, setCopyStatus] = useState({});

//   const handleCopyAddress = (text, index, column) => {
//     const key = `${index}-${column}`;

//     navigator.clipboard.writeText(text).then(() => {
//       setCopyStatus((prev) => ({
//         ...prev,
//         [key]: true,
//       }));

//       setTimeout(() => {
//         setCopyStatus((prev) => ({
//           ...prev,
//           [key]: false,
//         }));
//       }, 2000);
//     });
//   };

//   return (
//     <div id="ref-main" className="w-full Gregular">

//       {/* Header */}
//       <div className="space-x-5 w-full">
//         <button
//           onClick={() => handleSwitchData("transaction")}
//           className={`px-3 py-3 w-full text-2xl rounded-t-xl uppercase font-bold
//           ${
//             currentData === "transaction"
//               ? "bg-gradient text-black"
//               : "bg-gray-700 text-white"
//           }`}
//         >
//           Transaction
//         </button>
//       </div>

//       {/* Table */}
//       <div className="w-full">
//         <div className="relative overflow-x-auto shadow-md">

//           {currentPageData.length > 0 ? (
//             <table className="w-full text-sm text-left text-gray-300">

//               <thead className="text-xs text-gray-200 uppercase bg-gray-800">
//                 <tr>
//                   <th className="px-6 py-3">Sr No.</th>
//                   <th className="px-6 py-3">TRX Hash</th>
//                   <th className="px-6 py-3">From</th>
//                   <th className="px-6 py-3">To</th>
//                   <th className="px-6 py-3">Amount</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {currentPageData.map((row, index) => (
//                   <tr
//                     key={index}
//                     className="bg-[#151618] border-b hover:bg-[#292e35]"
//                   >
//                     <td className="px-6 py-4">
//                       {(currentPage - 1) * itemsPerPage + index + 1}
//                     </td>

//                     {/* Hash */}
//                     <td
//                       className="px-6 py-4 cursor-pointer"
//                       onClick={() =>
//                         handleCopyAddress(row.hash, index, "hash")
//                       }
//                     >
//                       <div className="flex gap-2 items-center">
//                         <CgCopy
//                           className={
//                             copyStatus[`${index}-hash`]
//                               ? "text-green-500"
//                               : "text-white"
//                           }
//                         />
//                         <p className="text-yellow-500">
//                           {row.hash.slice(0, 10)}...
//                         </p>
//                       </div>
//                     </td>

//                     {/* From */}
//                     <td
//                       className="px-6 py-4 cursor-pointer"
//                       onClick={() =>
//                         handleCopyAddress(row.from, index, "from")
//                       }
//                     >
//                       <div className="flex gap-2 items-center">
//                         <CgCopy
//                           className={
//                             copyStatus[`${index}-from`]
//                               ? "text-green-500"
//                               : "text-white"
//                           }
//                         />
//                         <p>
//                           {row.from.slice(0, 10)}...
//                         </p>
//                       </div>
//                     </td>

//                     {/* To */}
//                     <td
//                       className="px-6 py-4 cursor-pointer"
//                       onClick={() =>
//                         handleCopyAddress(row.to, index, "to")
//                       }
//                     >
//                       <div className="flex gap-2 items-center">
//                         <CgCopy
//                           className={
//                             copyStatus[`${index}-to`]
//                               ? "text-green-500"
//                               : "text-white"
//                           }
//                         />
//                         <p>
//                           {row.to.slice(0, 10)}...
//                         </p>
//                       </div>
//                     </td>

//                     {/* Amount */}
//                     <td className="px-6 py-4">
//                       {(Number(row.value) / 10 ** 18).toFixed(5)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           ) : (
//             <div className="text-center py-10 text-white">
//               No Transactions Found
//             </div>
//           )}
//         </div>

//         {/* Pagination */}
//         <nav className="flex gap-2 items-center justify-end pt-4">

//           <button
//             onClick={() =>
//               setCurrentPage(
//                 currentPage > 1 ? currentPage - 1 : 1
//               )
//             }
//             disabled={currentPage === 1}
//             className="px-3 h-8 bg-gray-700 rounded text-yellow-500"
//           >
//             <FaAngleDoubleLeft />
//           </button>

//           {createPagination().map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageClick(page)}
//               className={`px-3 h-8 rounded border
//               ${
//                 currentPage === page
//                   ? "bg-gray-500 text-yellow-500"
//                   : "bg-gray-700 text-yellow-500"
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
//             disabled={currentPage === totalPages}
//             className="px-3 h-8 bg-gray-700 rounded text-yellow-500"
//           >
//             <FaAngleDoubleRight />
//           </button>

//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Transaction;











// import { useEffect, useState } from "react";
// import { CgCopy } from "react-icons/cg";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
// import axios from "axios";
// import { api_key, api_url, contractAddress } from "./config";
// const Transaction = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const url = `${api_url}?module=account&action=tokentx&contractaddress=${contractAddress}&page=1&offset=10&startblock=0&endblock=999999999&sort=desc&apikey=${api_key}`;
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
//     transaction: transactions,
//   };
//   console.log("transaction", data);
//   const [currentData, setCurrentData] = useState("transaction");
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

//   console.log("data1111", currentPageData[0]);

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

//   return (
//     <div id="ref-main" className=" w-full Gregular     ">
//       <div className="  space-x-5 w-full    tablet:space-x-2 ">
//         <button
//           onClick={() => handleSwitchData("transaction")}
//           className={` px-3 py-1 
//                      ${
//                        currentData === "transaction"
//                          ? "bg-gradient"
//                          : "bg-gray-700"
//                      }
//                       text-black Gbold font-bold uppercase  w-full text-2xl rounded-t-xl tracking-wider py-3  `}
//         >
//           Transaction
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
//           {currentPageData.length > 0 ? (
//             <table className="w-full text-sm text-left text-gray-300">
//               <thead className="text-xs text-gray-200 uppercase bg-gray-800">
//                 <tr className="font-bold text-sm tracking-wider">
//                   <th scope="col" className="px-6 py-3 text-nowrap ">
//                     Sr no.
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     TRX Hash
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     From
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     To{" "}
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     {" "}
//                     Amount
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentPageData.map((row, index) => (
//                   <>
//                     <tr
//                       key={index}
//                       className="bg-[#151618] border-b hover:bg-[#292e35]"
//                     >
//                       <td className="px-6 py-4">
//                         {(currentPage - 1) * itemsPerPage + index + 1}
//                       </td>
//                       <td
//                         onClick={() =>
//                           handleCopyAddress(row.hash, index, "col0")
//                         }
//                         className="px-6 py-4 text-yellow-500 "
//                       >
//                         <div className="relative flex gap-2">
//                           <CgCopy
//                             className={`text-lg active:scale-[0.8] transition-all ease-in-out ${
//                               copyStatus[`${index}-col0`]
//                                 ? "text-green-500"
//                                 : "text-white"
//                             }`}
//                           />
//                           <p className="cursor-pointer">
//                             {row.hash?.length > 10
//                               ? `${row.hash.slice(0, 10)}...`
//                               : row.hash}
//                           </p>
//                         </div>
//                       </td>
//                       <td
//                         onClick={() =>
//                           handleCopyAddress(row.from, index, "col1")
//                         }
//                         className="px-6 py-4 text-white "
//                       >
//                         <div className="relative flex gap-2">
//                           <CgCopy
//                             className={`text-lg active:scale-[0.8] transition-all ease-in-out ${
//                               copyStatus[`${index}-col1`]
//                                 ? "text-green-500"
//                                 : "text-white"
//                             }`}
//                           />
//                           <p className="cursor-pointer">
//                             {row.from?.length > 10
//                               ? `${row.from.slice(0, 10)}...`
//                               : row.from}
//                           </p>
//                         </div>
//                       </td>

//                       <td
//                         onClick={() => handleCopyAddress(row.to, index, "col2")}
//                         className="px-6 py-4 26680394850 "
//                       >
//                         <div className="relative flex gap-2">
//                           <CgCopy
//                             className={`text-lg active:scale-[0.8] transition-all ease-in-out ${
//                               copyStatus[`${index}-col2`]
//                                 ? "text-green-500"
//                                 : "text-white"
//                             }`}
//                           />
//                           <p className="cursor-pointer">
//                             {row.to?.length > 10
//                               ? `${row.to.slice(0, 10)}...`
//                               : row.to}
//                           </p>
//                         </div>
//                       </td>

//                       {/* <td className="px-6 py-4 text-white text-nowrap ">$ {row.from}</td> */}
//                       {/* <td className="px-6 py-4 text-yellow-500 text-nowrap font-bold ">$ {row.to}</td> */}

//                       <td className="px-6 py-4">
//                         {typeof (row.value / 10 ** 18) === "number"
//                           ? (row.value / 10 ** 18).toFixed(5)
//                           : parseFloat(row.value / 10 ** 18).toFixed(5)}
//                       </td>
//                     </tr>
//                   </>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No transactions found.</p>
//           )}
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

// export default Transaction;
