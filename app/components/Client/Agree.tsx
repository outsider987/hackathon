import { ContractStatus } from "@/app/enum";
import useProgram from "@/app/hooks/useProgram";
import { useGlobalContext } from "@/app/store/global";
import { Button } from "@mui/material";

const Agree = () => {
  const { status, setStatus } = useGlobalContext();
  const { sign, clientActivateCase } = useProgram();

  const onClientAcivate = async () => {
    const res = await clientActivateCase();
    if (res) setStatus(ContractStatus.Activated);
  };
  return (
    <Button variant="contained" onClick={onClientAcivate}>
      agree
    </Button>
  );
};

export default Agree;