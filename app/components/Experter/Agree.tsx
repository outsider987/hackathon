import { ContractStatus } from "@/app/enum";
import { LamportsConfig } from "@/app/hooks/config";
import useProgram from "@/app/hooks/useProgram";
import { useGlobalContext } from "@/app/store/global";
import { Button, CardContent } from "@mui/material";

const Agree = () => {
  const { setStatus } = useGlobalContext();
  const { sign } = useProgram();
  const onAgree = async () => {
    const res = await sign(LamportsConfig.caseAmount);
    if (res) setStatus(ContractStatus.Created);
  };
  return (
    <>
      <div className="flex">
        <Button onClick={() => setStatus(ContractStatus.Idle)}>Cacel</Button>
        <Button
          onClick={() => setStatus(ContractStatus.Created)}
          variant="contained"
        >
          Agree
        </Button>
      </div>
    </>
  );
};

export default Agree;