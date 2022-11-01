import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Agents = () => {
  const agentArr: string[] = [
    "23.1 Only the duly elected Trustees of the Body Corporate may enter into any contract on behalf of the Body Corporate and incur any liability for the Body Corporate and then only by two such Trustees acting simultaneously. ",
    "23.2 No other owner or occupier may in any way whatsoever enter into any contract on behalf of or incur any liability on behalf of the Body Corporate, without written consent of the Trustees first being obtained. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        23. Autorised agent of the Body Corporate
      </Typography>
      <Box>
        {agentArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={agentArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
