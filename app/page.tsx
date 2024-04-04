"use client";
import Experter from "./components/Experter";
import { useState, Ref, useRef, useEffect } from "react";
import Client from "./components/Client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGlobalContext } from "./store/global";
import ClientAgee from "./components/ClientAgee";

import SignAndTake from "./components/SignAndTake";

export default function Home() {
  const [currentCase, setCase] = useState("step1");
  const lastCurrentCase = useRef(currentCase);
  const { status, setStatus } = useGlobalContext();

  useEffect(() => {
    if (currentCase !== lastCurrentCase.current) {
      lastCurrentCase.current = currentCase;
    }
  }, [setCase]);

  return (
    <main className="flex space-y-4 flex-col items-start justify-between m-auto ">
      {/* {currentCase !== "step1" && (
        <div
          onClick={() => setCase(lastCurrentCase.current)}
          className=" cursor-pointer"
        >
          <ArrowBackIcon />
        </div>
      )} */}

      <h2 className=" m-auto text-xl font-extrabold text-center flex justify-center">
        status:{status}
      </h2>
      <div className=" ">
        <SignAndTake></SignAndTake>
      </div>
    </main>
  );
}
