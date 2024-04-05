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
  const { getExpertBalance, getPlatFormBalance, getClientBalance, wallet } =
    useProgramContext();
  const [clientBalance, setClientBalance] = useState(0);
  const [expertBalance, setExpertBalance] = useState(0);
  const [platformBalance, setPlatformBalance] = useState(0);

  useEffect(() => {
    if (currentCase !== lastCurrentCase.current) {
      lastCurrentCase.current = currentCase;
    }
  }, [setCase]);

  // useEffect(() => {
  //   const getBalance = async () => {
  //     try {
        
  //       const balance = await getClientBalance();

  //       setClientBalance(balance);

  //       const balance2 = await getPlatFormBalance();
  //       setPlatformBalance(balance2);

  //       const balance3 = await getExpertBalance();
  //       setExpertBalance(balance3);

  //       console.log("balance", balance);
  //     } catch (error) {
  //       console.error("Error connecting to Metamask:", error);
  //     }
  //   };
  //   getBalance();
  // }, [wallet, status]);

  return (
    <main className="flex space-y-4 flex-col items-start justify-between m-auto ">
      {/* <div className="flex flex-col justify-center m-auto gap-4">
        <span> platform balance:{platformBalance}</span>
        <span>client balance:{clientBalance}</span>
        <span>expert balance:{expertBalance}</span>
      </div> */}
      <h2 className=" m-auto text-xl font-extrabold text-center flex justify-center">
        status:{status}
      </h2>
      <div className=" ">
        <SignAndTake></SignAndTake>
      </div>
    </main>
  );
}
