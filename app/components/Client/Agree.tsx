import { ContractStatus } from "@/app/enum";
import useProgram from "@/app/hooks/useProgram";
import { useProgramContext } from "@/app/store/Propram";
import { useGlobalContext } from "@/app/store/global";
import { Button } from "@mui/material";

const Agree = () => {
  const { status, setStatus } = useGlobalContext();
  const { sign, clientActivateCase, clientCompleteCase } = useProgramContext();

  const onClientAcivate = async () => {
    try {
        const res = await clientActivateCase();
        if (res) setStatus(ContractStatus.Activated);
    //   setStatus(ContractStatus.Activated);
    } catch (error) {
      setStatus(ContractStatus.Activated);
    }
  };

  const onClientCompleteCase = async () => {
    try {
      //   const res = await clientCompleteCase();
      //   if (res) setStatus(ContractStatus.Completed);
      setStatus(ContractStatus.Completed);
    } catch (error) {
      setStatus(ContractStatus.Completed);
    }
  };
  return (
    <>
      {status === ContractStatus.Created ? (
        <Button variant="contained" onClick={onClientAcivate}>
          agree mortage
        </Button>
      ) : (
        <div className="flex gap-2 w-full">
          <Button
            className="w-full"
            onClick={() => setStatus(ContractStatus.ClientWaitForPlatformClose)}
          >
            unexpected: Force Close
          </Button>
          <Button
            className="w-full"
            variant="contained"
            onClick={onClientCompleteCase}
          >
            Compelete
          </Button>
        </div>
      )}
    </>
  );
};

export default Agree;
