import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { differenceInDays, endOfMonth } from "date-fns";
import setDate from "date-fns/setDate";
import startOfMonth from "date-fns/startOfMonth";
import React, { useEffect, useState } from "react";
import { BookingDetails } from "./version2";

const isSameDate = (day: Date, bookedDay: Date) =>
  day.getDate() == bookedDay.getDate() &&
  day.getMonth() == bookedDay.getMonth() &&
  day.getFullYear() == bookedDay.getFullYear();

interface Props {
  currentDate: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
  booking: BookingDetails[] | undefined;
}
export const CalendarDays = ({
  currentDate,
  setSelectedDay,
  booking,
}: Props) => {
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const sufixDays = 7 - (endDate.getDay() + 1);
  const chooseDay = (index: number) => {
    const date = setDate(currentDate, index);
    setSelectedDay(date);
  };

  return (
    <React.Fragment>
      {Array.from({ length: prefixDays }).map((_, index) => {
        return (
          <Grid xs={1}>
            <Typography
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                paddingTop: "3px",
                paddingLeft: "3px",
                borderRight: "1px solid",
                borderColor: "primary.dark",
                textAlign: "center",
                height: "30px",
              }}
            ></Typography>
          </Grid>
        );
      })}

      {Array.from({ length: numDays }).map((_, index) => {
        //_______________________________________------------------------------------------------days start here
        let col;
        booking &&
          booking.map((i) => {
            switch (
              isSameDate(setDate(currentDate, index + 1), new Date(i.date))
            ) {
              case true:
                col = true;
                break;

              default:
                break;
            }
          });
        return (
          <Grid sx={{}} xs={1}>
            <Grid
              sx={{
                borderBottom: "1px solid",
                borderRight: "1px solid",
                borderColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.light",
                },

                cursor: "pointer",
              }}
              container
            >
              <Grid xs={9}>
                <Typography
                  onClick={() => {
                    chooseDay(index + 1);
                  }}
                  sx={{
                    paddingTop: "3px",
                    paddingLeft: "3px",
                    display: "flex",

                    textAlign: "center",
                    height: "30px",
                  }}
                >
                  {index + 1}
                </Typography>
              </Grid>{" "}
              <Grid xs={3}>
                <Box
                  sx={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "15px",
                    marginTop: "3px",
                    marginRight: "3px",
                    backgroundColor: col ? "error.main" : null,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        );
      })}
      {Array.from({ length: sufixDays }).map((_, index) => {
        return (
          <Grid xs={1}>
            <Typography
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                paddingTop: "3px",
                paddingLeft: "3px",
                borderRight: "1px solid",
                borderColor: "primary.dark",
                textAlign: "center",

                height: "30px",
              }}
            ></Typography>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};
