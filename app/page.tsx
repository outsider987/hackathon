"use client";
import Maker from "./components/Maker";
import { useState, Ref, useRef, useEffect } from "react";
import Taker from "./components/Taker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGlobalContext } from "./store/global";
import TakerAgee from "./components/TakerAgee";

export enum CaseEnum {
  step1 = "step1",
  step2 = "step2",
  step3 = "step3",
}

export default function Home() {
  const [currentCase, setCase] = useState("step1");
  const lastCurrentCase = useRef(currentCase);
  const { status, setStatus } = useGlobalContext();

  useEffect(() => {
    if (currentCase !== lastCurrentCase.current) {
      lastCurrentCase.current = currentCase;
    }
  }, [setCase]);

  useEffect(() => {
    switch (currentCase) {
      case CaseEnum.step1:
        setStatus("Idle");
        break;
      case CaseEnum.step2:
        setStatus("Pending");
        break;
      case CaseEnum.step3:
        setStatus("Taken");
        break;

      default:
        break;
    }
  }, [currentCase]);

  const stepCompoents = {
    step1: <Maker setCase={setCase} />,
    step2: <Taker setCase={setCase} />,
    step3: <TakerAgee setCase={setCase} />,
  };

  return (
    <main className="flex space-y-4 flex-col items-start justify-between m-auto ">
      {currentCase !== "step1" && (
        <div
          onClick={() => setCase(lastCurrentCase.current)}
          className=" cursor-pointer"
        >
          <ArrowBackIcon />
        </div>
      )}
      <h2 className=" m-auto text-xl font-extrabold text-center flex justify-center">
        status:{status}
      </h2>
      <div className=" min-w-96">{stepCompoents[currentCase]}</div>
    </main>
  );
}
