import React from "react";

import reelImg from "../../assets/mission/vision.png";
import filmStripImg from "../../assets/mission/left-img.png";
import missionIcon from "../../assets/mission/mission.png";

const VisionMission = () => {
    return (
        <section className="bg-black py-10 lg:py-12 overflow-visible font-['Poppins']">
            <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

                <div
                    className="
                        relative
                        p-[1px]
                        rounded-[16px]
                        bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
                    "
                >
                    <div
                        className="
                        relative
                        rounded-[15px]
                        bg-[linear-gradient(90deg,#000000_0%,#121212_100%)]
                        overflow-visible
                            "
                    >

                        {/* Reel Image */}
                        <img
                            src={reelImg}
                            alt="Vision"
                            className="
                            absolute
                            -top-10
                            -left-3
                            sm:-top-12
                            sm:-left-8
                            md:-top-16
                            md:-left-10
                            w-[90px]
                            sm:w-[120px]
                            md:w-[150px]
                            lg:w-[180px]
                            z-50
                            pointer-events-none
                            "
                        />

                        {/* Film Strip */}
                        <img
                            src={filmStripImg}
                            alt="Film Strip"
                            className="
                                absolute hidden md:block
                                left-0
                                bottom-[0px]
                                w-[120px]
                                sm:w-[180px]
                                md:w-[250px]
                                lg:w-[315px]
                                z-10
                                pointer-events-none
                                "
                        />

                        {/* Main Content */}
                        <div
                            className="
                                relative
                                z-30
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                items-center gap-8 md:gap-5
                                lg:gap-10
                                px-3
                                md:px-6
                                xl:px-14
                                py-8
                                lg:py-10
                                "
                        >

                            {/* Vision */}
                            <div className="ml-[20px] sm:ml-[105px] md:ml-[100px] lg:ml-[160px] xl:ml-[250px] max-w-full md:max-w-[400px] lg:max-w-[360px]">

                                <h3 className="text-[#FFC93B]  text-lg md:text-xl font-semibold mb-2 lg:mb-4">
                                    Our Vision
                                </h3>

                                <p className="text-[#ffffff] text-[13px] sm:text-sm lg:text-base xl:text-lg font-[400] leading-5 lg:leading-6 xl:leading-8  max-w-full md::max-w-[420px]">
                                    Leading blockchain ecosystem bridging entertainment and real-world assets, connecting creators and investors to revenue-backed economies worldwide.
                                </p>

                            </div>

                            {/* Mission */}
                            <div className="flex flex-col sm:flex-row items-left md:items-end  justify-left md:justify-end gap-3 lg:gap-6  self-end h-full">

                                <img
                                    src={missionIcon}
                                    alt="Mission"
                                    className="
                                        w-[70px] h-[70px]
                                        sm:w-[90px] sm:h-[90px]
                                        md:w-[110px] md:h-[110px]
                                        lg:w-[130px] lg:h-[130px]
                                        flex-shrink-0
                                        "
                                />

                                <div className="max-w-full md:max-w-[220px] lg:max-w-[240px] xl:max-w-[360px] ">

                                    <h3 className="text-[#FFC93B] text-lg md:text-xl font-semibold mb-2 lg:mb-4">
                                        Our Mission
                                    </h3>

                                    <p className="text-[#ffffff] text-[13px] sm:text-sm lg:text-base xl:text-lg font-[400] leading-5 lg:leading-6 xl:leading-8">
                                        Empower users through NFTs, RWA-backed rewards, staking, gaming, and decentralized governance with transparent, accessible on-chain value.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Background Glow */}
                        <div
                            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              w-[400px]
              h-[400px]
              bg-[radial-gradient(circle,_rgba(224,166,52,0.08)_0%,_transparent_70%)]
              blur-3xl
              pointer-events-none
            "
                        />

                    </div>
                    </div>

                </div>
        </section>
    );
};

export default VisionMission;






