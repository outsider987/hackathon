"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useGlobalContext } from "@/app/store/global";
import { ContractStatus } from "@/app/enum";
import { useProgramContext } from "@/app/store/Propram";

const Client = ({ ...props }) => {
  const { status, setStatus } = useGlobalContext();
  const { sign, clientActivateCase, clientCompleteCase } = useProgramContext();

  const onClientAcivate = async () => {
    try {
      const res = await clientActivateCase();
      if (res) setStatus(ContractStatus.Activated);
      //   setStatus(ContractStatus.Activated);
    } catch (error) {
      //   setStatus(ContractStatus.Activated);
      alert(error);
    }
  };

  const onClientCompleteCase = async () => {
    try {
      const res = await clientCompleteCase();
      if (res) setStatus(ContractStatus.Completed);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const components = {
    Idle: (
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
    ),

    PendingExpert: <div className="text-yellow">Pending Experter agree</div>,

    Activated: (
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
    ),
    Created: (
      <Button variant="contained" onClick={onClientAcivate}>
        agree mortage
      </Button>
    ),
    ForceClosed: <div>get 1.3 sol back</div>,
    Completed: <div className=" text-green">compelete contract</div>,
    // ClientWaitForPlatformClose: <Agree />,
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
          <Typography
            variant="h5"
            component="h2"
            className={
              [
                ContractStatus.Activated,
                ContractStatus.Idle,
                ContractStatus.Created,
              ].includes(status)
                ? "text-purple-600 underline font-bold"
                : "text-white"
            }
          >
            Client
          </Typography>
        </div>

        {components[status] || null}
      </Card>
    </div>
  );
};

export default Client;
