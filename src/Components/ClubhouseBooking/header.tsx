import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import format from "date-fns/format";

interface Props {
  previousYear: () => void;
  previousMonth: () => void;
  nextYear: () => void;
  nextMonth: () => void;
  currentDate: Date;
}

export const Header = ({
  previousYear,
  previousMonth,
  nextYear,
  nextMonth,
  currentDate,
}: Props) => {
  return (
    <React.Fragment>
      <Grid xs={1} item>
        <Typography
          onClick={() => {
            previousYear();
          }}
          sx={{
            textAlign: "center",
            minWidth: "40px",
            borderBottom: "1px solid",

            borderRight: "1px solid",
            height: "30px",
            backgroundColor: "secondary.dark",

            "&:hover": {
              backgroundColor: "secondary.light",
            },
            "&:active": { backgroundColor: "primary.main" },
            cursor: "pointer",
          }}
          color="secondary"
        >
          {"<<"}
        </Typography>
      </Grid>
      <Grid xs={1} item>
        <Typography
          onClick={() => {
            previousMonth();
          }}
          sx={{
            textAlign: "center",
            borderBottom: "1px solid",
            borderRight: "1px solid",
            backgroundColor: "secondary.dark",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
            "&:active": { backgroundColor: "primary.main" },

            height: "30px",

            cursor: "pointer",
          }}
          color="secondary"
        >
          {"<"}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            borderBottom: "1px solid",
            backgroundColor: "secondary.dark",
            borderRight: "1px solid",
            borderColor: "primary.dark",
            height: "30px",
          }}
        >
          {format(currentDate, "LLLL yyyy")}
        </Typography>
      </Grid>
      <Grid xs={1} item>
        <Typography
          onClick={() => {
            nextMonth();
          }}
          sx={{
            textAlign: "center",
            borderBottom: "1px solid",
            backgroundColor: "secondary.dark",
            borderRight: "1px solid",
            height: "30px",
            borderColor: "primary.dark",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
            cursor: "pointer",
          }}
          color="secondary"
        >
          {">"}
        </Typography>
      </Grid>
      <Grid xs={1} item>
        <Typography
          onClick={() => {
            nextYear();
          }}
          sx={{
            borderBottom: "1px solid",
            borderRight: "1px solid",
            height: "30px",

            borderColor: "primary.dark",
            backgroundColor: "secondary.dark",
            textAlign: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
          }}
          color="secondary"
        >
          {">>"}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};
