import { ProgramProvider } from "./Propram";
import { WalletProvider } from "./Wallet";
import { GlobalProvider } from "./global";

type RootContextProviderProps = {
  children?: React.ReactNode;
};
const RootContextProvider: React.FC<RootContextProviderProps> = ({
  children,
}) => {
  return (
    <ProgramProvider>
      <GlobalProvider>
        <WalletProvider>{children}</WalletProvider>
      </GlobalProvider>
    </ProgramProvider>
  );
};
export default RootContextProvider;
