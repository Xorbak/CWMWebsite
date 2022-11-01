import { MenuItem, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { GlobalStyles } from "../../App";
import trafalgar from "../../images/Trafalgar.jpg";
import { Kalvest } from "./kalvest";
import { Prestige } from "./prestige";
import { Trafalgar } from "./trafalgar";

interface Rules {
  name: string;
  rules: string[];
}
export const EmergencyContact = () => {
  return (
    <Box sx={GlobalStyles.App}>
      <Trafalgar />
      <Kalvest />
      <Prestige />
    </Box>
  );
};

const styles = {
  contactBox: {
    display: "flex",
    flexDirection: "column",
    marginY: "100px",
    minWidth: "500px",
    minHeight: "100px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
  },
  imageContainer: {
    backgroundImage: `url(${trafalgar})`,
    backgroundAttachment: "absolute",
    backgroundPosition: "50% 35%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "100px",
    width: "100px",
    height: "100px",
  },
};
