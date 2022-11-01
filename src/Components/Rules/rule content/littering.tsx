import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Littering = () => {
  const litteringarr: string[] = [
    "No owner or occupier of a section shall deposit or allow be depositing or throwing, on the common property, any rubbish including dirt, cigarette butts, food or food scraps or any litter whatsoever. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        10. Littering
      </Typography>
      <Box>
        {litteringarr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={litteringarr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
