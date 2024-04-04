"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useForm } from "react-hook-form";
import Idle from "./Idle";
import { useGlobalContext } from "@/app/store/global";
import useProgram from "@/app/hooks/useProgram";
import { ContractStatus } from "@/app/enum";
import Agree from "./Agree";

const Client = ({ ...props }) => {
  const {status} = useGlobalContext();
  const components = {
    Idle: <Idle />,
    PendingExperter: <div className="text-yellow">Pending Experter agree</div>,
    Created: <Agree/> ,
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
            Client
          </Typography>
        </div>

        {components[status] || null}
      </Card>
    </div>
  );
};

export default Client;
