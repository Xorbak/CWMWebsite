import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Levies = () => {
  const leviesArr: string[] = [
    "21.1 All common property water and electricity usage is included in the levies. ",
    "21.2 Electricity and water used in the units is not included and each owner must make their separate water and electricity payments to the Body Corporate, Municipality or any other collection agent appointed by the Body Corporate. ",
    "21.3 Failure on the part of any owner of any section to ensure that payment of levy or any other amounts due to the Body Corporate is received by no later than the 7th day of the month in which it is due, may result in legal action being taken to recover any such levy or other amounts due from the owner in terms of Section 30 (2) of the Sectional Titles Act, 1986, as amended. ",
    "21.4 Owners must be aware of the fact that tenants occupying a section are not liable for charges such as levies, water, electricity, special levy costs, the recovery of overdue accounts, legal fees or costs of any nature whatsoever, despite a written agreement between owner and tenant. ",
    "21.5 The onus remains on owners to settle ALL levy accounts. ",
    "21.6 Overdue accounts will attract interest at prime +2%. ",
    "21.7 Payment of levies is to be made directly into the Body Corporate Bank account. ",
    "21.8 Cheques must be made out to the Carlswald Manor Body Corporate. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        21. Payment of Levy Fund
      </Typography>
      <Box>
        {leviesArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={leviesArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
