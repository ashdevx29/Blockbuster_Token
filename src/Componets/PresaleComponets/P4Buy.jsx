import React, { useState, useEffect } from "react";
// import { Wallet, Coins } from "lucide-react";
import usdt from "../../assets/usdt.png";
import vault from "../../assets/faq.png";
import bgImage from "../../assets/buy-bg.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./connect";

import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
} from "@reown/appkit/react";
import { BrowserProvider, Contract, ethers } from "ethers";
import {
  MIN_INVESTMENT_USD,
  USDT_ADDRESS,
  PRESALE_ADDRESS,
  TOKEN_ADDRESS,
} from "./utils/constants";
import { PRESALE_ABI, TOKEN_ABI, USDT_ABI } from "./utils/presaleABI";

const PRIMARY_RPC_URL = "https://bsc-dataseed.binance.org/";
const FALLBACK_RPC_URL = "https://bsc-dataseed.binance.org/";
const publicProvider = new ethers.JsonRpcProvider(PRIMARY_RPC_URL);

export default function TokenSaleSection() {
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { walletProvider } = useAppKitProvider("eip155");
  const [loading, setLoading] = useState(false);
  const [totalSold, setTotalSold] = useState("0");
  const [totalRaised, setTotalRaised] = useState("0");
  const [progressPercent, setProgressPercent] = useState(0);
  const [price, setPrice] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [usdtAmount, setUsdtAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [error, setError] = useState("");
  // const [bnbBalance, setBnbBalance] = useState("0");
  const [usdtBalance, setUsdtBalance] = useState("0");
  const [smcBalance, setSMCBalance] = useState("0");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPresaleActive, setIsPresaleActive] = useState(true);

  // Calculate token amount based on USDT input
  const calculateTokenAmount = (usdt) => {
    const usdtNum = parseFloat(usdt) || 0;
    const tokenPrice = parseFloat(price);
    if (tokenPrice === 0) return (0).toFixed(6);
    return (1 / tokenPrice).toFixed(6);
  };

  const [usdtPlaceholder, setUsdtPlaceholder] = useState("USDT YOU PAY");
  const [semiconPlaceholder, setSemiconPlaceholder] = useState(
    "SEMICON YOU RECEIVE",
  );

  // Handle USDT input

  const handleUsdtInput = (value) => {
    let cleanedValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\./g, "$1");

    // ✅ Limit to 2 decimal places
    if (cleanedValue.includes(".")) {
      const [integerPart, decimalPart] = cleanedValue.split(".");
      cleanedValue = integerPart + "." + decimalPart.slice(0, 2);
    }

    if (cleanedValue && Number(cleanedValue) < 0) {
      toast.error("Amount cannot be negative", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (cleanedValue && Number(cleanedValue) > 1000000) {
      toast.error("Amount exceeds maximum limit", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setUsdtAmount(cleanedValue);

    if (cleanedValue && !isNaN(cleanedValue)) {
      // ✅ Round token amount to 2 decimals
      const calculated = calculateTokenAmount(cleanedValue);
      setTokenAmount(parseFloat(calculated).toFixed(2));
    } else {
      setTokenAmount("");
      if (value && cleanedValue === "") {
        toast.error("Please enter a valid number", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  // Fetch USDT balance
  const fetchUsdtBalance = async () => {
    if (!address) return;
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const balance = await usdtContract.balanceOf(address);
      setUsdtBalance(ethers.formatUnits(balance, 18));
    } catch (error) {
      console.error("Error fetching USDT balance:", error);
      toast.error("Failed to fetch USDT balance", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Fetch ABTC balance
  const fetchSMCBalance = async () => {
    if (!address) return;
    try {
      const tokenContract = new Contract(
        TOKEN_ADDRESS,
        TOKEN_ABI,
        publicProvider,
      );
      const balance = await tokenContract.balanceOf(address);
      setSMCBalance(ethers.formatUnits(balance, 18));
    } catch (error) {
      console.error("Error fetching ABTC balance:", error);
      setSMCBalance("0");
      toast.error(
        "Failed to fetch ABTC balance. Ensure the contract supports balanceOf.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
    }
  };

  // Fetch presale information with fallback
  const fetchPresaleInfo = async () => {
    try {
      let provider = publicProvider;
      try {
        // Test primary RPC
        await provider.getBlockNumber();
      } catch {
        console.warn("Primary RPC failed, switching to fallback");
        provider = new ethers.JsonRpcProvider(FALLBACK_RPC_URL);
      }

      const presaleContract = new Contract(
        PRESALE_ADDRESS,
        PRESALE_ABI,
        provider,
      );
      const promises = [
        presaleContract.totalTokensSold().catch(() => ethers.BigNumber.from(0)),
        presaleContract
          .totalUSDTCollected()
          .catch(() => ethers.BigNumber.from(0)),
        presaleContract
          .tokensPerUSDT()
          .catch(() => ethers.BigNumber.from(10000)),
      ];

      const [sold, raised, tokenPrice] = await Promise.all(promises);

      const soldInTokens = Number(sold) / 1e18;
      const raisedInUSDT = Number(raised) / 1e18;
      const priceInTokensPerUSDT = Number(tokenPrice) / 10 ** 18;
      const priceInTokensPerUSDTs = priceInTokensPerUSDT
        ? priceInTokensPerUSDT
        : 0;

      setTotalSold(soldInTokens.toFixed(2));
      setTotalRaised(raisedInUSDT.toFixed(2));
      setProgressPercent(
        Math.min((raisedInUSDT.toFixed(2) / 100000) * 100, 100),
      );
      setPrice(priceInTokensPerUSDTs);
      setIsPresaleActive(true);
    } catch (error) {
      console.error("Error fetching presale info:", error);
      setError(
        "Failed to load presale data. Check contract address and network.",
      );
      toast.error(
        "Failed to load presale data. Check contract address and network.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
    }
  };

  // Check USDT allowance
  const checkAllowance = async () => {
    if (!address) return;
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const allowance = await usdtContract.allowance(address, PRESALE_ADDRESS);
      const requiredAmount = ethers.parseUnits(usdtAmount || "0", 18);
      setIsApproved(allowance >= requiredAmount);
    } catch (error) {
      console.error("Error checking allowance:", error);
      setError("Failed to check allowance");
      toast.error("Failed to check allowance", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Approve USDT
  const approveUSDT = async () => {
    if (!address) {
      setError("Please connect your wallet");
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (
      !isPresaleActive ||
      (timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0)
    ) {
      setError("Presale has ended");
      toast.error("Presale has ended", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (!usdtAmount || parseFloat(usdtAmount) < MIN_INVESTMENT_USD) {
      setError(`Minimum investment is $${MIN_INVESTMENT_USD}`);
      toast.error(`Minimum investment is $${MIN_INVESTMENT_USD}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const amount = ethers.parseUnits(usdtAmount, 18);
      const tx = await usdtContract.approve(PRESALE_ADDRESS, amount);
      await tx.wait();
      setIsApproved(true);
      toast.success("USDT approved successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error approving USDT:", error);
      const errorMessage =
        error.code === 4001
          ? "Transaction rejected by user"
          : `Failed to approve USDT`;
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Buy with USDT
  const buyWithUSDT = async () => {
    if (!address) {
      setError("Please connect your wallet");
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (
      !isPresaleActive ||
      (timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0)
    ) {
      setError("Presale has ended");
      toast.error("Presale has ended", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (!usdtAmount || parseFloat(usdtAmount) < MIN_INVESTMENT_USD) {
      setError(`Minimum investment is $${MIN_INVESTMENT_USD}`);
      toast.error(`Minimum investment is $${MIN_INVESTMENT_USD}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (parseFloat(usdtBalance) < parseFloat(usdtAmount)) {
      setError("Insufficient USDT balance");
      toast.error("Insufficient USDT balance", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const presaleContract = new Contract(
        PRESALE_ADDRESS,
        PRESALE_ABI,
        signer,
      );
      const amount = ethers.parseUnits(usdtAmount, 18);
      const tx = await presaleContract.buyWithUSDT(amount);
      await tx.wait();
      setUsdtAmount("");
      setTokenAmount("");
      await Promise.all([
        fetchPresaleInfo(),
        fetchUsdtBalance(),
        fetchSMCBalance(),
      ]);

      toast.success("Purchase successful!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error buying with USDT:", error);
      const errorMessage =
        error.code === 4001
          ? "Transaction rejected by user"
          : `Failed to complete purchase`;
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Countdown timer logic
  const calculateTimeLeft = () => {
    const endDate = new Date("2026-04-20T09:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setUsdtPlaceholder("USDT...");
        setSemiconPlaceholder("SMC...");
      } else {
        setUsdtPlaceholder("USDT YOU PAY");
        setSemiconPlaceholder("SEMICON YOU RECEIVE");
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data and update timer
  useEffect(() => {
    fetchPresaleInfo();
    if (address) {
      Promise.all([fetchUsdtBalance(), fetchSMCBalance(), checkAllowance()]);
    } else {
      setUsdtBalance("0");
      setSMCBalance("0");
      setIsApproved(false);
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [address, usdtAmount]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
      />

      <section
        id="joinpresale"
        className="relative py-8 md:py-16 lg:py-20 xl:py-24 text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-full px-3 font-['Poppins'] sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
            {/* LEFT */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-block px-3 py-1 text-[#FFCC66] text-sm md:text-base rounded-full mb-2 md:mb-4">
                Designed for All. Prepared for Tomorrow.
              </div>

              <h2 className="text-lg md:text-3xl lg:text-5xl max-w-full lg:max-w-[640px] font-[400] leading-tight">
                Blockbuster Token{" "}
                <span className="text-[#FFC93B] font-[500]">Presale</span> is{" "}
                <span className="text-[#FFC93B] font-[500]">Live</span>
              </h2>

              <p className="text-[#FFFFFF80] text-sm md:text-base lg:text-lg  xl:text-xl mt-3 md:mt-6 max-w-full lg:max-w-[580px]">
                Join the next generation of Web3 entertainment with Blockbuster
                Token (BBT). Built for RWA, staking, rewards, and
                community-driven growth, BBT empowers users to participate in a
                thriving decentralized ecosystem from day one.
              </p>
              <p className="text-[#FFFFFF80] text-sm md:text-base lg:text-lg xl:text-xl mt-2 max-w-full lg:max-w-[580px]">
                Engineered for scalability, security, and real-world utility,
                Blockbuster Token is creating new opportunities for creators,
                collectors, gamers, and investors across the digital
                entertainment landscape.
              </p>

              <button
                className="
    mt-4 md:mt-8
    relative
    rounded-[12px]
    p-[1px]
    overflow-hidden
    group
    transition-all
    duration-500
    hover:-translate-y-1
    hover:scale-[1.01]
    hover:shadow-[0_5px_10px_rgba(242,222,117,0.25)]
    active:scale-[0.98]
  "
                style={{
                  background:
                    "linear-gradient(94.58deg, #B17E1C 3.26%, #F2DE75 28.5%, #F2DE75 60.93%, #C9A43E 95.37%)",
                }}
              >
                <span
                  className="
      relative
      flex
      items-center
      justify-center
      px-4 md:px-8
      py-1.5 md:py-3
      rounded-[11px]
      text-white
      font-medium
      tracking-wide
      transition-all
      duration-500
      group-hover:tracking-[2px]
    "
                  style={{
                    background:
                      "linear-gradient(270deg, #000000 0%, #000000 100%)",
                  }}
                >
                  Buy BBT Now
                </span>

                <span
                  className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]
    "
                />
              </button>
            </div>

            {/* RIGHT */}
            <div className="relative w-full max-w-[580px] mx-auto">
              {/* Border SVG */}
              <svg
                viewBox="0 0 541 517"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="goldBorder"
                    x1="0"
                    y1="0"
                    x2="541"
                    y2="517"
                  >
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#8B6A12" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>

                <path
                  d="
      M55 1
      H468
      C490 1 507 8 520 22
      L536 42
      C539 46 540 52 540 60
      V458
      C540 491 514 516 481 516
      H64
      C45 516 30 508 18 494
      L2 474
      C1 472 1 468 1 464
      V60
      C1 27 22 1 55 1
      Z
    "
                  fill="#000"
                  stroke="url(#goldBorder)"
                  strokeWidth="3"
                />
              </svg>

              <div className="relative z-10 px-4 py-8 lg:px-12 lg:py-12 min-h-[480px] lg:min-h-[550px]">
                <h2 className="text-center text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-8">
                  You Can Buy With
                </h2>

                <div className="flex justify-center mb-4 md:mb-8">
                  <Link to="/presale/?=joinpresale">
                    <button
                      className="
    rounded-full
    p-[1px]
    overflow-hidden
  "
                      style={{
                        background:
                          "linear-gradient(180deg, #363636 0%, #D4AF37 100%)",
                      }}
                    >
                      <div
                        className="
                      flex
                      items-center
                      gap-3
                      px-8
                      py-[10px]
                      rounded-full
                    "
                        style={{
                          background:
                            "linear-gradient(180deg, #363636 0%, #000000 100%)",
                        }}
                      >
                        {/* Icon */}
                        <img
                          src={usdt}
                          alt="USDT"
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />

                        {/* Text */}
                        <span
                          className="
                          text-sm
                          lg:text-lg
                          text-white
                          leading-none
                        "
                        >
                          USDT
                        </span>
                      </div>
                    </button>
                  </Link>
                </div>

                <div className="space-y-6 ">
                  {/* USDT */}
                  <div>
                    <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                      Amount You Pay
                      <span className="text-[#FFCC66]">
                        {" "}
                        (Balance = {parseFloat(usdtBalance).toFixed(2)} USDT)
                      </span>
                    </label>

                    <div
                      className="relative p-[0.8px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                      }}
                    >
                      <div
                        className="h-[56px] flex items-center bg-black"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                        }}
                      >
                        {/* Icon */}
                        <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                          <img
                            src={usdt}
                            alt=""
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                          />
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-[100%] bg-[#FFCC66]  shrink-0" />

                        <input
                          type="text"
                          placeholder="Enter USDT Amount"
                          value={usdtAmount}
                          onChange={(e) => handleUsdtInput(e.target.value)}
                          className="
                          flex-1
                            min-w-0
                            h-full
                            bg-transparent
                            px-3 md:px-5 text-[10px]
                            min-[330px]:text-sm md:text-base
                            outline-none
                            text-transparent
                            bg-clip-text
                            bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
                            placeholder:text-[#F0C95E]
                                "
                        />
                      </div>
                    </div>
                  </div>

                  {/* Blockbuster */}
                  <div>
                    <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                      Amount You Get
                      <span className="text-[#FFCC66]">
                        {" "}
                        (Balance = {parseFloat(smcBalance).toFixed(2)} BBT)
                      </span>
                    </label>

                    <div
                      className="relative p-[0.8px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                      }}
                    >
                      <div
                        className="h-[56px] flex items-center bg-black"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                        }}
                      >
                        {/* Icon */}
                        <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                          <img
                            src={vault}
                            alt=""
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                          />
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-[100%] bg-[#FFCC66]  shrink-0 " />

                        <input
                          type="text"
                          placeholder="Enter Blockbuster Amount"
                          value={tokenAmount}
                          readOnly
                          className="
    flex-1
    min-w-0
    h-full
    bg-transparent
    px-3 md:px-5 text-[10px]
    min-[330px]:text-sm md:text-base
    outline-none
    text-transparent
    bg-clip-text
    bg-[linear-gradient(90deg,#E0A634_0%,#FFDB87_100%)]
    placeholder:text-[#F0C95E]
  "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 min-[330px]:grid-cols-2 gap-3 md:gap-4">
                    <button
                      className="
                    h-12
                    rounded-lg
                    font-[500]
                    text-black
                    px-2
                    transition-all
                    duration-300
                    text-[11px] md:text-base
                    hover:brightness-110
                    hover:scale-[1.02]
                  "
                      style={{
                        background:
                          "linear-gradient(90deg, #E0A634 0%, #FFDB87 100%)",
                      }}
                      onClick={() => open()}
                    >
                      {address
                        ? `${address.slice(0, 4)}...${address.slice(-4)}`
                        : "Connect"}
                    </button>

                    <button
                      className="
                      h-12
                      rounded-lg
                      p-[1px]
                      overflow-hidden
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_20px_rgba(242,222,117,0.25)]
                    "
                      style={{
                        background:
                          "linear-gradient(94.58deg, #B17E1C 3.26%, #F2DE75 28.5%, #F2DE75 60.93%, #C9A43E 95.37%)",
                      }}
                    >
                      <span
                        className="
      w-full
      h-full
      flex
      items-center
      justify-center
      rounded-[7px]
      font-[500]
      text-[#FFCC66]
      text-[13px] md:text-base
      px-6
    "
                        style={{
                          background:
                            "linear-gradient(270deg, #0A0A0A 0%, #0A0A0A 100%)",
                        }}
                        onClick={isApproved ? buyWithUSDT : approveUSDT}
                      >
                        {loading
                          ? "Processing..."
                          : isApproved
                            ? "Buy Now"
                            : "Approve USDT"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
