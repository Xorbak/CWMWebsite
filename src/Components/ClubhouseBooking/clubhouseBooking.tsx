import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";
import { GlobalStyles } from "../../App";
import { CalendarPicker, PickersDay } from "@mui/x-date-pickers";
import { Badge, Button, Grid, Typography } from "@mui/material";
import { Calendar } from "./calendar";
import { BookingDetails } from "./bookingDetails";

export const ClubhouseBookings = () => {
  const [version, setVersion] = useState(false);

  return (
    <Box sx={GlobalStyles.App}>
      <Typography
        sx={{ marginBottom: "50px", marginTop: "100px" }}
        variant="h3"
      >
        Carlswald manor Clubhouse
      </Typography>
      <Grid container xs={12} justifyContent="center">
        <Grid item xs={5}>
          <BookingDetails />
        </Grid>
        <Grid alignSelf={"center"} item xs={3} position="sticky">
          <Calendar />
        </Grid>
      </Grid>
    </Box>
  );
};
