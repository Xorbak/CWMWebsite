import Box from "@mui/system/Box";
import { GlobalStyles } from "../../App";

import { Kalvest } from "./kalvest";
import { Prestige } from "./prestige";
import { Trafalgar } from "./trafalgar";

export const EmergencyContact = () => {
  return (
    <Box sx={GlobalStyles.App}>
      <Trafalgar />
      <Kalvest />
      <Prestige />
    </Box>
  );
};
