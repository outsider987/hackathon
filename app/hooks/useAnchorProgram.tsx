import { useEffect, useState } from "react";
import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import idlFile from "@/app/assets/idl/solva.json";

const useAnchorProgram = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [program, setProgram] = useState<Program | null>(null);

  const idl = idlFile as Idl;

  useEffect(() => {
    if (wallet) {
      const provider = new AnchorProvider(connection, wallet, {});
      const programInstance = new Program(idl, idl.metadata.address, provider);
      setProgram(programInstance);
    }
  }, [wallet, connection, idl]);

  return { connection, program };
};

export default useAnchorProgram;
