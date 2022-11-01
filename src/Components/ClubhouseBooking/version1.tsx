import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";
import { GlobalStyles } from "../../App";
import { CalendarPicker, PickersDay } from "@mui/x-date-pickers";
import { Badge, Typography } from "@mui/material";

export const Version1 = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = React.useState([
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
  ]);

  return (
    <Box sx={GlobalStyles.App}>
      <Typography variant="h3">Clubhouse Availability</Typography>
      <Box sx={{ backgroundColor: "background.paper", borderRadius: "5px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker
            openTo="day"
            date={value} //@ts-ignore
            onChange={(newValue) => setValue(newValue)}
            renderDay={(day, _value, DayComponentProps) => {
              const isSelected =
                !DayComponentProps.outsideCurrentMonth &&
                highlightedDays[day.getMonth()].indexOf(day.getDate()) >= 0;

              return (
                <Badge key={day.toString()}>
                  <PickersDay
                    sx={
                      isSelected ? { backgroundColor: "error.main" } : undefined
                    }
                    selected
                    {...DayComponentProps}
                  />
                </Badge>
              );
            }}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};
