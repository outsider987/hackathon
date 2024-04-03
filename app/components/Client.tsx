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
import { CaseEnum } from "../page";

const Client = ({ setCase }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    setCase(CaseEnum.step3);
  };

  return (
    <div>
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
      >
        <CardContent>
          <AccountCircleIcon
            style={{ fontSize: 80, color: "#3f51b5", marginBottom: 10 }}
          />
          <Typography variant="h5" component="h2">
            Taker
          </Typography>
          <TextField
            label="Taker Mortage Value"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 20, marginTop: 20 }}
            value={value}
            onChange={handleChange}
          />
        </CardContent>
      </Card>
      <Button variant="contained" fullWidth onClick={handleNext}>
        Mortgage
      </Button>
    </div>
  );
};

export default Client;
