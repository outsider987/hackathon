import { useAnchorWallet } from "@solana/wallet-adapter-react";
import useAnchorProgram from "./useAnchorProgram";
import { useMemo, useState } from "react";
import { BN, web3 } from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { AccountsConfig, LamportsConfig } from "./config";

const useProgram = () => {
  const [isSigned, setIsSigned] = useState(false);
  const SOL = anchor.web3.LAMPORTS_PER_SOL;
  const { program } = useAnchorProgram();
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

    const platFormAccount = new web3.PublicKey(AccountsConfig.platFormAccount);

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
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .signers([])
      .rpc();
    console.log("Status: Activated");
    return res;
  };

  const clientCompleteCase = async () => {
    const res = await program.methods
      .clientCompleteCase()
      .accounts({
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .signers([])
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
      .signers([])
      .rpc();
    console.log("Status: ForceClosed");
    return res;
  };

  const expertGetIncome = async () => {
    const res = await program.methods
      .expertGetIncome()
      .accounts({
        dataAccount: dataAccount.publicKey,
        signer: wallet.publicKey,
      })
      .signers([])
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

  return {
    sign,
    clientActivateCase,
    clientCompleteCase,
    platformForceCloseCaseForClient,
    expertGetIncome,
    platformCloseCase,
    platformForceCloseCaseForExpert
  };
};

export default useProgram;
