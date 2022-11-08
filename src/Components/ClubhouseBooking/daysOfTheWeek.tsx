import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export const DaysOfTheWeek = () => {
  return (
    <React.Fragment>
      {daysOfTheWeek.map((i) => {
        return (
          <Grid key={i} xs={1} item>
            <Typography
              key={i}
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                borderRight: "1px solid",
                borderColor: "primary.dark",
                textAlign: "center",
              }}
              alignItems="center"
              justifyContent={"center"}
              color="secondary"
            >
              {i}
            </Typography>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};
