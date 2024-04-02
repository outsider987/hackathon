import React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Maker = () => {
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
          <TextField
            label="Maker Value"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 20, marginTop: 20 }}
          />
          <TextField
            label="Crypto Wallet"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 20 }}
          />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>
          <Typography variant="body1" style={{ marginTop: 20 }}>
            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            imperdiet nec, imperdiet iaculis, ipsum.
          </Typography>
        </CardContent>
      </Card>
      <Button className="w-full" variant="contained">
        Next
      </Button>
    </div>
  );
};

export default Maker;
