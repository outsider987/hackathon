'use client'
import { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import { netWork } from "../config";
require("@solana/wallet-adapter-react-ui/styles.css");

const SolanaWalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const endpoint = web3.clusterApiUrl(netWork.local);
  const endpoint = 'http://127.0.0.1:8899';
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaWalletContextProvider;