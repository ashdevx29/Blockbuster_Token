
import PriceDetails from '../../Componets/IcoComponets/PriceDetails';
import Transaction from '../../Componets/IcoComponets/Transaction';
import UseScrollToElement from '../../Componets/IcoComponets/UseScrollToElement';




const HomePage = () => {
    UseScrollToElement();

    return (
        <>
            <div className=" Gregular p-1 sm:p-2 lg:p-4 h-fit mt-14 md:ml-54 lg:ml-64 ml-0 ">
                <div className="p-2  md:p-0      rounded-lg   ">

                    <PriceDetails />

                    <div className="flex items-center justify-center h-auto mb-4 pb-3 rounded-xl  overflow-hidden   ">
                        {/* <p className="text-2xl text-gray-500">
                          <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                      </p> */}

                        <Transaction />

                    </div>

                    {/* <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                  </div>

                  <div className="flex items-center justify-center h-48 mb-4 rounded bg-[#151618] border-[#424242] border-[2px] ">
                      <p className="text-2xl text-gray-500">
                          <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                      </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                      <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-[#151618] border-[#424242] border-[2px] ">
                          <p className="text-2xl text-gray-500">
                              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                          </p>
                      </div>
                  </div> */}

                </div>
            </div>
        </>
    )
}

export default HomePage