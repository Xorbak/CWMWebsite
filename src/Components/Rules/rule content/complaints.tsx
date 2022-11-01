import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Complaints = () => {
  const complaintsArr: string[] = [
    "Should an owner or occupier have a complaint of whatever nature, this should be directed to the Trustees in writing. This can also be done via  the Managing Agent (see contact details ). Please feel free to direct your complaints to the Trustee that has been designated the respective portfolio ie Security matter should be directed to the Security trustee etc. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        24. Complaints
      </Typography>
      <Box>
        {complaintsArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={complaintsArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
