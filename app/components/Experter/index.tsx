import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import useProgram from "../../hooks/useProgram";
import Agree from "./Agree";
import { useGlobalContext } from "@/app/store/global";
import { ContractStatus } from "@/app/enum";
import { useProgramContext } from "@/app/store/Propram";

const Experter = ({ ...props }): JSX.Element => {
  const { sign, clientActivateCase, expertGetIncome } = useProgramContext();
  const { setStatus } = useGlobalContext();
  const { status } = useGlobalContext();

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onClientAcivate = async () => {
    const res = await clientActivateCase();
    if (res) setStatus(ContractStatus.Activated);
  };

  const onexpertGetIncome = async () => {
    try {
      const res = await expertGetIncome();
      if (res) setStatus(ContractStatus.WaitForClose);
    } catch (error) {
      setStatus(ContractStatus.WaitForClose);
    }
  };

  const components = {
    PendingExpert: <Agree />,
    Created: <div className="text-yellow">Pending</div>,
    Activated: (
      <div className="flex flex-col gap-4">
        <span>status:Start Working</span>
        <Button
          onClick={() => setStatus(ContractStatus.ExperterWaitForPlatformClose)}
        >
          unexpected: Force Close
        </Button>
      </div>
    ),
    ClientWaitForPlatformClose: <div>wait for mortaged</div>,
    ForceClosed: <div>lose 0.3 sol</div>,
    Completed: (
      <Button onClick={onexpertGetIncome} variant="contained">
        Get Income
      </Button>
    ),
  };

  return (
    <div {...props}>
      <Card
        variant="outlined"
        style={{
          maxWidth: 400,
          margin: "auto",
          marginTop: 20,
          background: "transparent",
          textAlign: "center",
          color: "white",
        }}
        className="flex flex-col items-center justify-between h-full"
      >
        <div>
          <ManageAccountsIcon
            style={{ fontSize: 80, color: "#3f51b5", marginBottom: 10 }}
          />
          <Typography
            variant="h5"
            component="h2"
            className={
              [ContractStatus.PendingExpert, ContractStatus.Completed].includes(
                status
              )
                ? "text-purple-600 underline font-bold"
                : "text-white"
            }
          >
            Expert
          </Typography>
        </div>
        {components[status]}
      </Card>
    </div>
  );
};

export default Experter;
