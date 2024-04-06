import { LamportsConfig } from "@/app/config";
import { ContractStatus } from "@/app/enum";
import { useProgramContext } from "@/app/store/Propram";
import { useGlobalContext } from "@/app/store/global";
import { Button, CardContent } from "@mui/material";

const Agree = () => {
  const { setStatus } = useGlobalContext();
  const { sign } = useProgramContext();
  const onAgree = async () => {
    try {
      const res = await sign(LamportsConfig.caseAmount as any);
      if (res) setStatus(ContractStatus.Created);
    } catch (error) {
      console.log(error);
alert(error);
    }
   

    // setStatus(ContractStatus.Created);
  };
  return (
    <div>
      <div className="flex w-full gap-5">
        <Button
          variant="outlined"
          className="flex-1"
          onClick={() => setStatus(ContractStatus.Idle)}
        >
          Cacel
        </Button>
        <Button className="flex-1" onClick={onAgree} variant="contained">
          Agree
        </Button>
      </div>
    </div>
  );
};

export default Agree;
