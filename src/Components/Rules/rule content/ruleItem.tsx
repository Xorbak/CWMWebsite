import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
interface Props {
  title: string;
  rule: string[];
}
export const RuleItem = ({ title, rule }: Props) => {
  const ruleArr: string[] = rule;
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        sx={{ display: { xs: "block", md: "none" } }}
        variant="caption"
      >
        Click the index icon for rules
      </Typography>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        {title}
      </Typography>
      <Box>
        {ruleArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={ruleArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
