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
import { useEffect, useState } from "react";
import { CalendarDays } from "./calanderDays";

import { DaysOfTheWeek } from "./daysOfTheWeek";
import { Header } from "./header";

export interface BookingDetails {
  date: string;
  event: string;
}

const bookingUrl = "https://krat.es/3a8310ab084b44cb3984/clubhouse";

export const Version2 = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const startDate = startOfMonth(currentDate); //clean up
  const endDate = endOfMonth(currentDate); //clean up

  const [booking, setBooking] = useState<BookingDetails[]>();
  useEffect(() => {
    const getBookings = async () => {
      await fetch(bookingUrl)
        .then((res) => res.json())
        .then((result) => {
          setBooking(result);
        });
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
    <Box sx={styles.App}>
      <Box>
        {" "}
        <Button
          onClick={() => {
            setCurrentDate(new Date());
          }}
          sx={{ padding: "0px" }}
        >
          Today
        </Button>
        {!booking && (
          <Typography variant="subtitle2">Loading Dates....</Typography>
        )}
      </Box>

      <Grid
        boxShadow={5}
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        justifyItems="space-between"
        justifySelf="space-between"
        alignContent="space-between"
        alignSelf="space-between"
        sx={{
          backgroundColor: "background.paper",
          width: "300px",

          overflow: "hidden",

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
    </Box>
  );
};

export const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { sm: "center", md: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
