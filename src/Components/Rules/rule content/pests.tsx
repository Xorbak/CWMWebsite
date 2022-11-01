import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Pests = () => {
  const pestsArr: string[] = [
    "An owner or occupier of a section shall keep his unit free from white ants, borer, other wood destroying insects, other pests and insects and to this end shall permit the trustees, the managing agent and their duly authorized agents or employees to enter upon his section from time to time for the purpose of inspecting the section and taking such action as may be reasonably necessary to eradicate such pests. The costs of the inspection, eradication of any such pests as may be found within the section, shall be borne by the owner of the section involved. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        11. Eradication of Pests
      </Typography>
      <Box>
        {pestsArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={pestsArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
