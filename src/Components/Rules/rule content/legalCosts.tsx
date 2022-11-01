import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const LegalCosts = () => {
  const legalCostArr: string[] = [
    "An owner shall be liable for and pay all legal costs, including costs as between attorney and client, collection commission, expenses and charges incurred by the Body Corporate in obtaining the recovery of arrear levies, or any other arrear amounts due and owing by such owner to the Body Corporate, or in enforcing compliance with these rules, the conduct rules or the Act.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        27. Legal costs
      </Typography>
      <Box>
        {legalCostArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={legalCostArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
