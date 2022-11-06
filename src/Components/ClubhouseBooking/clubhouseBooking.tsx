import Box from "@mui/material/Box";

import { useState } from "react";
import { GlobalStyles } from "../../App";

import { Grid, Typography } from "@mui/material";
import { Calendar } from "./calendar";
import { BookingDetails } from "./bookingDetails";

export const ClubhouseBookings = () => {
  const [version, setVersion] = useState(false);

  return (
    <Box sx={GlobalStyles.App}>
      <Typography
        sx={{ marginBottom: "50px", marginTop: { xs: "0px", md: "60px" } }}
        variant="h3"
      >
        Carlswald manor Clubhouse
      </Typography>
      <Grid container xs={12} justifyContent="center">
        <Grid item xs={11} lg={6} xl={10}>
          <BookingDetails />
        </Grid>
        <Grid item xs={12} lg={4} xl={10}>
          <Calendar />
        </Grid>
      </Grid>
    </Box>
  );
};
