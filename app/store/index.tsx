import { WalletProvider } from "./Wallet";
import { GlobalProvider } from "./global";

type RootContextProviderProps = {
  children?: React.ReactNode;
};
const RootContextProvider: React.FC<RootContextProviderProps> = ({
  children,
}) => {
  return (
    <GlobalProvider>
      <WalletProvider>{children}</WalletProvider>
    </GlobalProvider>
  );
};
export default RootContextProvider;
