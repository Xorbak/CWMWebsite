import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Signs = () => {
  const signsArr: string[] = [
    "No owner or occupier of a section shall place or allow to be placed any sign, notice, billboard or advertisement of any kind whatsoever on any part of the common property or of a section, so as to be visible from the outside of the section. This includes advertisement boards of any sort e.g. Estate Agents, security firms etc. Special provision is made for properties that are on show under the “Business or Leisure Activities” section, paragraph 16.2.1. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        6. Signs
      </Typography>
      <Box>
        {signsArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={signsArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
