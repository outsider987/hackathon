"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Logo from "../assets/logo.svg";

const Hedaer = () => {
  const { publicKey, sendTransaction } = useWallet();
  return (
    <header className="flex justify-between  items-center px-[8vw] bg-opacity-70 h-[72px]">
      <div>
        <img src={Logo.src} alt="logo" className="h-6" />
      </div>
      <div>
        <WalletMultiButton />
      </div>
    </header>
  );
};

export default Hedaer;
