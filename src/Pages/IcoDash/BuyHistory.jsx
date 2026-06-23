 import BuyHistoryTable from "../../Componets/IcoComponets/BuyHistoryTable";
import PriceDetails from "../../Componets/IcoComponets/PriceDetails";
import addData from "../../assets/ico_dash/addData.png";

const BuyHistory = () => {
  return (
    <>
      <div className="Gregular p-2 md:p-4 mt-14 ml-0 md:ml-56 lg:ml-64">

        <div className="p-0 md:p-4 rounded-lg">

          <PriceDetails />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">

            {/* Left Section */}

            <div className="xl:col-span-2">

              <div
                className="
                w-full

                overflow-hidden

                rounded-lg

                h-fit
                "
              >

                <div className="w-full overflow-x-auto">

                  <BuyHistoryTable />

                </div>

              </div>

            </div>

            {/* Right Image */}

            <div
              className="
              hidden xl:grid

              col-span-1

              items-center
              justify-center

              rounded-lg

              bg-gray-50

              dark:bg-[#151618]

              border border-[#424242]

              overflow-hidden
              "
            >

              <img
                src={addData}
                alt=""

                className="
                w-full
                h-full

                object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default BuyHistory;
// import BuyHistoryTable from "../../Componets/IcoComponets/BuyHistoryTable"
// import PriceDetails from "../../Componets/IcoComponets/PriceDetails"
// import addData from "../../assets/ico_dash/addData.png"

 


// const BuyHistory = () => {
  
//   return (
//     <>
//       <div className="  Gregular p-2 lg:p-4 h-fit mt-14 md:ml-54 lg:ml-64 ml-0  ">
//         <div className="p-4  tablet:p-0      rounded-lg   ">
//           <PriceDetails />

//           <div className="grid grid-cols-3 laptop:grid-cols-1  gap-4 mb-4">
//             <div className="flex col-span-2  laptop:col-span-1   justify-center overflow-hidden rounded-lg bg-gray-50 h-fit  ">

//               <div className=" flex flex-col w-full ">
//                 <BuyHistoryTable/>
                  
//               </div>

//             </div>


//             <div className="grid laptop:hidden col-span-1 items-center justify-center rounded-lg bg-gray-50   dark:bg-[#151618] border-[#424242] border-[2px] ">
//               <img src={addData} className=" h-full " alt="" />
//             </div>

//           </div>



//         </div>
//       </div>

//     </>
//   )
// }

// export default BuyHistory