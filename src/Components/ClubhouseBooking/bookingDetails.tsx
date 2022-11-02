import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

export const BookingDetails = () => {
  return (
    <Grid sx={styles.App}>
      <Typography
        variant="h5"
        sx={{ textAlign: "start", marginBottom: "20px" }}
      >
        Booking process
      </Typography>
      <Typography sx={{ textAlign: "start" }}>
        Bookings are on a first come first served basis. To book, a resident
        must email Trafalgar at either shavikac@trafalgar.co.za or
        rethav@trafalgar.co.za
      </Typography>
      <Typography component={"div"} sx={{ textAlign: "start" }}>
        Full details of the date, times, contact details, nature of event,
        number of guests expected and unit number must be supplied. The Trustees
        reserve the right to refuse a booking. Once the booking has been
        confirmed arrangements for deposit payment,{" "}
        <Box display="inline" fontWeight={"bold"}>
          R1500{" "}
        </Box>
        , and accessing the clubhouse keys will be made.
      </Typography>
      <Typography sx={{ textAlign: "start" }}>
        An amount of the deposit will be refunded provided that the clubhouse is
        clean and undamaged after the event. The monies kept will be used to
        upgrade the complex facilities.
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "start", marginY: "20px" }}>
        Availabilty
      </Typography>{" "}
      <Typography sx={{ textAlign: "start" }}>
        To ensure Availability please reference the calendar.
      </Typography>
      <Typography fontWeight={"bold"} sx={{ textAlign: "start" }}>
        Please note, availability can change at any moment as previous bookings
        are approved.
      </Typography>
    </Grid>
  );
};
export const styles = {
  App: {
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "50px",
    fontSize: "calc(10px + 2vmin)",
  },
};
