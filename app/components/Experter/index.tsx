import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useProgram from "../../hooks/useProgram";
import Agree from "./Agree";
import { useGlobalContext } from "@/app/store/global";
import { ContractStatus } from "@/app/enum";

const Experter = ({ ...props }): JSX.Element => {
  const { sign, clientActivateCase } = useProgram();
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

  const components = {
    PendingExperter: <Agree />,
    Created: <div>Pending</div>,
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
          <AccountCircleIcon
            style={{ fontSize: 80, color: "#3f51b5", marginBottom: 10 }}
          />
          <Typography variant="h5" component="h2">
            Experter
          </Typography>
        </div>
        {components[status]}
      </Card>
    </div>
  );
};

export default Experter;
