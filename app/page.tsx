"use client";
import Experter from "./components/Experter";
import { useState, Ref, useRef, useEffect } from "react";
import Client from "./components/Client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGlobalContext } from "./store/global";
import ClientAgee from "./components/ClientAgee";

import SignAndTake from "./components/SignAndTake";
import { useProgramContext } from "./store/Propram";

export default function Home() {
  const [currentCase, setCase] = useState("step1");
  const lastCurrentCase = useRef(currentCase);
  const { status, setStatus } = useGlobalContext();
  const {
    getExpertBalance,
    getPlatFormBalance,
    getClientBalance,
    getdataAccountBalance,
    wallet,
  } = useProgramContext();
  const [clientBalance, setClientBalance] = useState(0);
  const [expertBalance, setExpertBalance] = useState(0);
  const [platformBalance, setPlatformBalance] = useState(0);
  const [dataAccountBalance, setDataAccountBalance] = useState(0);

  useEffect(() => {
    if (currentCase !== lastCurrentCase.current) {
      lastCurrentCase.current = currentCase;
    }
  }, [setCase]);

  useEffect(() => {
    const getBalance = async () => {
      try {
        const balance = await getClientBalance();
        const toRealAmountConst = 1000000000;
        setClientBalance(balance / 1000000000);
        console.log("client balance", balance);

        const balance2 = await getPlatFormBalance();
        setPlatformBalance(balance2 / toRealAmountConst);
        console.log("platform balance", balance2);

        const balance3 = await getExpertBalance();
        setExpertBalance(balance3 / toRealAmountConst);
        console.log("expert balance", balance3);

        const balance4 = await getdataAccountBalance();
        setDataAccountBalance(balance4 / toRealAmountConst);
        console.log("dataAccount balance", balance4);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    };
    getBalance();
  }, [wallet, status]);

  return (
    <main className="flex space-y-4 flex-col items-start justify-between m-auto ">
      <div className="flex   m-auto gap-4 w-full justify-center">
        <div className="flex flex-1 ">
          <span className="flex-1">
            <div className="flex items-center flex-col gap-2">
              <span>platform balance:</span>
              <span>{platformBalance}</span>
            </div>
          </span>

          <span className="flex-1">
            <div className="flex items-center flex-col gap-2">
              <span>dataAccount balance:</span>
              <span>{dataAccountBalance}</span>
            </div>
          </span>
        </div>

        <div className="flex flex-1 ">
          <span className="flex-1">
            <div className="flex  items-center flex-col gap-2">
              <span>expert balance:</span>
              <span> {expertBalance}</span>
            </div>
          </span>
          <span className="flex-1">
            <div className="flex items-center flex-col gap-2">
              <span>client balance:</span>
              <span>{clientBalance}</span>
            </div>
          </span>
        </div>
      </div>
      <h2 className=" m-auto text-xl font-extrabold text-center flex justify-center">
        status:{status}
      </h2>
      <div className=" ">
        <SignAndTake></SignAndTake>
      </div>
    </main>
  );
}
