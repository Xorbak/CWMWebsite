import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Visitors = () => {
  const visitorsArr: string[] = [
    "Any owner or occupier of a section who receives visitors or guests is to ensure that they comply with these conduct rules at all times. The owner or occupier is responsible for all their visitors and/or guests at all times. Right of Admission will be reserved and the Trustee’s decision will be final.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        14. Visitors
      </Typography>
      <Box>
        {visitorsArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={visitorsArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
