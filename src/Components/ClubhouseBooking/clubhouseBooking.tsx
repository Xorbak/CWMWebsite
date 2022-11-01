import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";
import { GlobalStyles } from "../../App";
import { CalendarPicker, PickersDay } from "@mui/x-date-pickers";
import { Badge, Button, Typography } from "@mui/material";
import { Version1 } from "./version1";
import { Version2 } from "./version2";

export const ClubhouseBookings = () => {
  const [version, setVersion] = useState(false);

  return (
    <Box>
      {version ? <Version1 /> : <Version2 />}
      <Button onClick={() => setVersion(!version)}>Show other Calander</Button>
    </Box>
  );
};
