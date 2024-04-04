import { ContractStatus } from "../enum";
import { useGlobalContext } from "../store/global";
import Client from "./Client";
import Experter from "./Experter";
import ThridParty from "./ThridParty";

const SignAndTake = () => {
  const { status } = useGlobalContext();
  return (
    <div className="flex min-w-[60vw] gap-2">
      <Client className="flex-1"></Client>

      {[
        ContractStatus.ClientWaitForPlatformClose,
        ContractStatus.WaitForClose,
        ContractStatus.ExperterWaitForPlatformClose
      ].includes(status) && <ThridParty />}

      {status !== ContractStatus.Idle && (
        <Experter className="flex-1"></Experter>
      )}
    </div>
  );
};

export default SignAndTake;
