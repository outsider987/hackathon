import { useAnchorWallet } from "@solana/wallet-adapter-react";
import useAnchorProgram from "./useAnchorProgram";
import { useMemo, useState } from "react";
import { BN, web3 } from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";

const useProgram = () => {
  const [isSigned, setIsSigned] = useState(false);
  const SOL = anchor.web3.LAMPORTS_PER_SOL;
  const program = useAnchorProgram();
  const wallet = useAnchorWallet();

  const dataAccount = useMemo(() => web3.Keypair.generate(), []);

  const sign = async ({ platFormAccountKey, amount }) => {
    const expertDeposit = 0.3;
    const clientDeposit = 0.2;

    const AmountLamports = new anchor.BN(amount * SOL);
    const expertDepositLamports = new anchor.BN(expertDeposit * SOL);
    const clientDepositLamports = new anchor.BN(clientDeposit * SOL);

    const platFormAccount = new web3.PublicKey(platFormAccountKey);

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
      return res;
    }
  };

  return { sign };
};

export default useProgram;
