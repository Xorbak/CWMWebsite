import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Laundry = () => {
  const laundryArr: string[] = [
    "The resident of a section shall not hang any washing or laundry or any other items over any balcony or landing railings. All laundry must be secured on an appropriate washing line, clothes horse or other such device. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        7. Laundry
      </Typography>
      <Box>
        {laundryArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={laundryArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
