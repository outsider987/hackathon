"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import useAnchorProgram from "../hooks/useAnchorProgram";
import * as anchor from "@coral-xyz/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { LamportsConfig, walletPublicKeys } from "../config";
import { BN, web3 } from "@coral-xyz/anchor";

const ProgramContext = createContext({
  sign: async ({ amount }: { amount: number }): Promise<any> => {},
  clientActivateCase: async (): Promise<any> => {},
  clientCompleteCase: async (): Promise<any> => {},
  platformForceCloseCaseForExpert: async (): Promise<any> => {},
  platformCloseCase: async (): Promise<any> => {},
  platformForceCloseCaseForClient: async (): Promise<any> => {},
  expertGetIncome: async (): Promise<any> => {},
  indemniteeRecieveCompensation: async (): Promise<any> => {},
  getClientBalance: async (): Promise<any> => {},
  getExpertBalance: async (): Promise<any> => {},
  getPlatFormBalance: async (): Promise<any> => {},
  getdataAccountBalance: async (): Promise<any> => {},
  wallet: null,
});

export const useProgramContext = () => useContext(ProgramContext);

export const ProgramProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const { program, connection } = useAnchorProgram();

  const SOL = anchor.web3.LAMPORTS_PER_SOL;

  const wallet = useAnchorWallet();

  const dataAccount = useMemo(() => web3.Keypair.generate(), []);

  const expertDepositLamports = new anchor.BN(
    LamportsConfig.experterDepositLamports * SOL
  );
  const clientDepositLamports = new anchor.BN(
    LamportsConfig.clientDepositLamports * SOL
  );
  const sign = async ({ amount }: { amount: number }) => {
    const AmountLamports = new anchor.BN(amount * SOL);

    const platFormAccount = new web3.PublicKey(walletPublicKeys.platform);

    if (program && wallet) {
      const res = await program.methods
        .new(
          platFormAccount,
          AmountLamports,
          expertDepositLamports,
          clientDepositLamports
        )
        .accounts({
          payer: wallet.publicKey,
          dataAccount: dataAccount.publicKey,
        })
        .signers([dataAccount])
        .rpc();
      setIsSigned(true);
      console.log("Status: Created");
      return res;
    }
  };

  const clientActivateCase = async () => {
    const res = await program.methods
      .clientActivateCase(clientDepositLamports)
      .accounts({
        DA: dataAccount.publicKey,
        signer: wallet.publicKey,
        dataAccount: dataAccount.publicKey,
      })
      .rpc();
    console.log("Status: Activated");
    return res;
  };

  const clientCompleteCase = async () => {
    const res = await program.methods
      .clientCompleteCase()
      .accounts({
        DA: dataAccount.publicKey,
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .rpc();
    console.log("Status: Completed");
    return res;
  };

  const platformForceCloseCaseForClient = async () => {
    const res = await program.methods
      .platformForceCloseCaseForClient()
      .accounts({
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })

      .rpc();
    console.log("Status: ForceClosed");
    return res;
  };

  const expertGetIncome = async () => {
    const res = await program.methods
      .expertGetIncome()
      .accounts({
        DA: dataAccount.publicKey,
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })

      .rpc();
    console.log("Status: GetIncome");
    return res;
  };

  const platformCloseCase = async () => {
    const res = await program.methods
      .platformCloseCase()
      .accounts({
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .signers([])
      .rpc();
    console.log("Status: Closed");
    return res;
  };

  const platformForceCloseCaseForExpert = async () => {
    const res = await program.methods
      .platformForceCloseCaseForExpert()
      .accounts({
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .signers([])
      .rpc();
    console.log("Status: ForceClosed");
    return res;
  };

  const indemniteeRecieveCompensation = async () => {
    const res = await program.methods
      .indemniteeRecieveCompensation()
      .accounts({
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .signers([])
      .rpc();
    console.log("Status: Received");
    return res;
  };

  const getPlatFormBalance = async () => {
    const platFormAccount = new web3.PublicKey(walletPublicKeys.platform);

    const res = await connection.getBalance(platFormAccount);
    return res;
  };
  const getExpertBalance = async () => {
    const expertFormAccount = new web3.PublicKey(walletPublicKeys.experter);

    const res = await connection.getBalance(expertFormAccount);
    return res;
  };

  const getClientBalance = async () => {
    const clientFormAccount = new web3.PublicKey(walletPublicKeys.client);

    const res = await connection.getBalance(clientFormAccount);
    return res;
  };

  const getdataAccountBalance = async () => {
    const res = await connection.getBalance(dataAccount.publicKey);
    return res;
  };

  return (
    <ProgramContext.Provider
      value={{
        sign,
        clientActivateCase,
        indemniteeRecieveCompensation,
        clientCompleteCase,
        platformForceCloseCaseForExpert,
        platformCloseCase,
        platformForceCloseCaseForClient,
        expertGetIncome,
        getPlatFormBalance,
        getExpertBalance,
        getClientBalance,
        wallet,
        getdataAccountBalance,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};
