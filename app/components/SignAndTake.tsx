import { ContractStatus } from "../enum";
import { useGlobalContext } from "../store/global";
import Client from "./Client";
import Experter from "./Experter";

const SignAndTake = () => {
  const { status } = useGlobalContext();
  return (
    <div className="flex min-w-[50vw] gap-2">
      <Client className="flex-1"></Client>

      {status !== ContractStatus.Idle && (
        <Experter className="flex-1"></Experter>
      )}
    </div>
  );
};

export default SignAndTake;
