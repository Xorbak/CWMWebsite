import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const ContactDetails = () => {
  const contactDetailsArr: string[] = [
    "Enquiries regarding levies and other administrative matters should be forwarded to the managing agents. ",
    "Managing Agents	-	Trafalgar ",
    "Name: Shavika Chetty",
    "Email: shavikac@trafalgar.co.za",
    "Or",
    "Name: Retha van Vuuren",
    "Email: rethav@trafalgar.co.za",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        25. Contact details
      </Typography>
      <Box>
        {contactDetailsArr.map((i) => {
          return (
            <Typography
              sx={{ marginY: "10px" }}
              key={contactDetailsArr.indexOf(i)}
            >
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
