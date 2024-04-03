import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ClientAgee = ({ setCase }) => {
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
        </CardContent>
      </Card>
      <div className=" flex gap-4">
        <Button fullWidth >
          Cancel
        </Button>
        <Button variant="contained" fullWidth onClick={setCase}>
          Agree
        </Button>
      </div>
    </div>
  );
};
export default ClientAgee;
