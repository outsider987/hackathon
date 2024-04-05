import { ContractStatus } from "@/app/enum";
import { useGlobalContext } from "@/app/store/global";
import { CardContent, Typography, Button } from "@mui/material";

const Idle = () => {
  const { setStatus } = useGlobalContext();
  return (
    <>
      <CardContent className=" space-y-4 ">
        <Typography className="text-start" variant="body1">
          Provid Service: block chain contractor
        </Typography>
        <Typography
          className="text-start"
          variant="body1"
          style={{ marginTop: 20 }}
        >
          Price:1
        </Typography>
      </CardContent>
      <Button
        onClick={() => setStatus(ContractStatus.PendingExpert)}
        type="submit"
        className="w-full"
        variant="contained"
      >
        Take Now
      </Button>
    </>
  );
};

export default Idle;
