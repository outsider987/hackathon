"use client";
import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useGlobalContext } from "@/app/store/global";
import { ContractStatus } from "@/app/enum";
import { useProgramContext } from "@/app/store/Propram";

const ThridParty = ({ ...props }) => {
  const { status, setStatus } = useGlobalContext();
  const {
    platformForceCloseCaseForClient,
    platformCloseCase,
    platformForceCloseCaseForExpert,
  } = useProgramContext();

  const onplatformForceCloseCaseForClient = async () => {
    try {
      const res = await platformForceCloseCaseForClient();
      if (res) setStatus(ContractStatus.ClientForPlatformClosed);
    } catch (error) {
      // setStatus(ContractStatus.ForceClosed);
      console.log(error);
      alert(error);
    }
  };

  const onplatformCloseCase = async () => {
    try {
      const res = await platformCloseCase();
      if (res) setStatus(ContractStatus.Closed);
    } catch (error) {
      console.log(error);
      alert(error);
      // setStatus(ContractStatus.Closed);
    }
  };

  const onplatformForceCloseCaseForExpert = async () => {
    try {
      const res = await platformForceCloseCaseForExpert();
      if (res) setStatus(ContractStatus.ForceClosed);
    } catch (error) {
      // setStatus(ContractStatus.ForceClosed);
      console.log(error);
      alert(error);
    }
  };

  const components = {
    ClientWaitForPlatformClose: (
      <Button variant="contained" onClick={onplatformForceCloseCaseForClient}>
        Force close from Client
      </Button>
    ),
    WaitForClose: (
      <Button variant="contained" onClick={onplatformCloseCase}>
        Close
      </Button>
    ),
    ExperterWaitForPlatformClose: (
      <Button variant="contained" onClick={onplatformForceCloseCaseForExpert}>
        Close
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
          <AccountBalanceIcon
            style={{ fontSize: 80, color: "#3f51b5", marginBottom: 10 }}
          />
          <Typography
            variant="h5"
            component="h2"
            className={
              [
                ContractStatus.WaitForClose,
                ContractStatus.ClientWaitForPlatformClose,
                ContractStatus.ExperterWaitForPlatformClose,
              ].includes(status)
                ? "text-purple-600 underline font-bold"
                : "text-white"
            }
          >
            Platform
          </Typography>
        </div>

        {components[status] || null}
      </Card>
    </div>
  );
};

export default ThridParty;
