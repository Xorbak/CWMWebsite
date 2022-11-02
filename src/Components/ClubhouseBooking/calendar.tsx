import { ButtonUnstyled } from "@mui/base";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import {
  add,
  differenceInDays,
  isToday,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";
import { endOfMonth } from "date-fns/esm";
import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import { CalendarDays } from "./calanderDays";

import { DaysOfTheWeek } from "./daysOfTheWeek";
import { Header } from "./header";

export interface BookingDetails {
  date: string;
  event: string;
}

const bookingUrl = "https://krat.es/3a8310ab084b44cb3984/clubhouse";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const startDate = startOfMonth(currentDate); //clean up
  const endDate = endOfMonth(currentDate); //clean up

  const [booking, setBooking] = useState<BookingDetails[]>();
  const [loadingError, setLoadingError] = useState<boolean>(false);
  useEffect(() => {
    const getBookings = async () => {
      await fetch(bookingUrl)
        .then((res) => res.json())
        .then((result) => {
          setBooking(result);
          setLoadingError(false);
        })
        .catch(() => setLoadingError(true));
    };
    getBookings();
  });

  const previousMonth = () => setCurrentDate(sub(currentDate, { months: 1 }));
  const nextMonth = () => setCurrentDate(add(currentDate, { months: 1 }));
  const previousYear = () => setCurrentDate(sub(currentDate, { years: 1 }));
  const nextYear = () => setCurrentDate(add(currentDate, { years: 1 }));

  const isSameDate = (day: Date, bookedDay: Date) =>
    day.getDate() == bookedDay.getDate() &&
    day.getMonth() == bookedDay.getMonth() &&
    day.getFullYear() == bookedDay.getFullYear();

  const chooseDay = (index: number) => {
    const date = setDate(currentDate, index);
    setSelectedDay(date);
  };
  return (
    <Grid item sx={styles.App}>
      <Box>
        {loadingError ? (
          <Typography variant="subtitle2">
            Something went wrong, try again later
          </Typography>
        ) : (
          !booking && (
            <Typography variant="subtitle2">Loading Dates....</Typography>
          )
        )}
        <Typography variant="h5" sx={{ display: { xs: "none", lg: "flex" } }}>
          Availability
        </Typography>{" "}
        <Button
          onClick={() => {
            setCurrentDate(new Date());
          }}
          sx={{ padding: "0px" }}
        >
          Today
        </Button>
      </Box>

      <Grid
        boxShadow={5}
        container
        direction="row"
        alignItems="center"
        sx={{
          backgroundColor: "background.paper",

          overflow: "hidden",
          width: { xs: "250px", sm: "300px", lg: "400px" },

          borderRadius: "5px",
          border: "0.5px solid",

          borderColor: "primary.dark",
        }}
        item
        columns={7}
        xs={12}
      >
        <Header
          previousYear={previousYear}
          previousMonth={previousMonth}
          nextYear={nextYear}
          nextMonth={nextMonth}
          currentDate={currentDate}
        />
        <DaysOfTheWeek />
        <CalendarDays
          booking={booking}
          currentDate={currentDate}
          setSelectedDay={setSelectedDay}
        />
      </Grid>
    </Grid>
  );
};

export const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    alignItems: "center",
    justifyContent: "start", //{ sm: "center", md: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
