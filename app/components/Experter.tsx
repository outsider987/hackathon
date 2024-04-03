import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CaseEnum } from "../page";
import useProgram from "../hooks/useProgram";

const Experter = ({ setCase }) => {
  const { sign } = useProgram();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const res = await sign({
      platFormAccountKey: data.cryptoWallet,
      amount: data.makerValue,
    });
    if (res) setCase(CaseEnum.step2);
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
            Maker
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("makerValue", {
                required: true,
                valueAsNumber: true,
                value: 1,
              })}
              label="Maker Value"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 20, marginTop: 20 }}
            />
            <TextField
              {...register("cryptoWallet")}
              label="Crypto Wallet"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 20 }}
            />
            <Typography variant="body1">
              Provide: Block Chain contractor
            </Typography>
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Price: Base on what you input
            </Typography>
            <Button type="submit" className="w-full" variant="contained">
              Take Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experter;
