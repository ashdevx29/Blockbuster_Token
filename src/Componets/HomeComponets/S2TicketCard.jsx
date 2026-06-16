import React from "react";

const TicketCard = ({ title, icon, variant }) => {
  const isGold = variant === "gold";

  return (
    
    <div
      className={`
    relative
    w-[210px]
    h-[100px]
    mx-auto
    transition-all
    duration-300
    hover:scale-105
    hover:-translate-y-2
    ${isGold ? "-rotate-3" : "rotate-3"}
  `}
    >
      <svg
        viewBox="0 0 210 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFA533" />
            <stop offset="100%" stopColor="#FFDB87" />
          </linearGradient>

          <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C88D19" />
            <stop offset="100%" stopColor="#FFD97B" />
          </linearGradient>
        </defs>

       

        <path
            d="
            M28 12
            Q28 5 40 5
            H170

            Q182 5 182 12

            Q182 18 190 20
            H198

            Q205 20 205 30

            V70

            Q205 80 198 80
            H190

            Q182 82 182 88

            Q182 95 170 95
            H40

            Q28 95 28 88

            Q28 82 20 80
            H12

            Q5 80 5 70

            V30

            Q5 20 12 20
            H20

            Q28 18 28 12
            Z
            "
          fill={isGold ? "url(#goldFill)" : "#070707"}
          stroke={isGold ? "none" : "url(#goldStroke)"}
          strokeWidth={isGold ? "0" : "1.5"}
        />

        {/* Left */}
        <line
          x1="22"
          y1="30"
          x2="22"
          y2="70"
          stroke={isGold ? "#111" : "#C88D19"}
          strokeWidth="2"
          strokeDasharray="2 3"
        />

        {/* Right */}
        <line
          x1="188"
          y1="30"
          x2="188"
          y2="70"
          stroke={isGold ? "#111" : "#C88D19"}
          strokeWidth="2"
          strokeDasharray="2 3"
        />
      </svg>

      {/* Floating Icon */}
      <img
        src={icon}
        alt={title}
        className={`
    absolute
    left-1/2
    -translate-x-1/2
    ${isGold ? "-top-6" : "-top-8"}
    w-[72px]
    h-[72px]
    object-contain
    z-20
    pointer-events-none
    drop-shadow-[0_0_15px_rgba(255,215,100,0.6)]
  `}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10">
        <h4
          className={`
    absolute
    top-[52px]
    left-1/2
    -translate-x-1/2
    text-center
    text-[11px]
    font-[600]
    leading-tight
    w-[160px]
    ${isGold ? "text-black" : "text-[#F5D77C]"}
  `}
        >
          {title}
        </h4>

        <div
          className={`
    absolute
    bottom-[14px]
    left-1/2
    -translate-x-1/2
    text-[11px]
    tracking-[2px]
    ${isGold ? "text-black" : "text-[#F5D77C]"}
  `}
        >
          ★★★★★
        </div>
      </div>
    </div>
  );
};

export default TicketCard;