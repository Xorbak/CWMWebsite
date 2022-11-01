import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const FinalDicision = () => {
  const FinalDicisionArr: string[] = [
    "25.1 In respect of the interpretation of these rules and all decisions to enforce these rules, the Trustees’ decision shall be final and binding. ",
    "25.2 The Trustees may amend or add to the Conduct Rules from time to time, as may be deemed necessary to ensure the happy and orderly co-existence of residents. ",
    "25.3 An owner or occupier of a section, who contravenes any conduct rule, may be liable for a fine in the amount determined by the Trustees, which will form part of the levy and be due and payable on due date of payment of the levy. Such funds shall be used towards improvements in the complex as determined by the Trustees. The issue and payment of a fine shall not prejudice any other rights available to the Trustees or the Body Corporate in law and in particular their right to apply to court for an interdict against the offending owner or occupier.   ",
    "25.4 If as a result of a breach of any of these conduct rules by any owner or occupier, the Trustees instruct an attorney, the defaulting owner or occupier shall be liable for all costs and charges of whatsoever nature on an attorney client scale incurred by the Trustees as a result thereof. ",
    "25.5 The Trustees have been elected by the owners to fulfill a duty. Any interference in this regard or any threats made to and/or any damage to the Trustees person or property will result in legal action. ",
    "25.6 All Trustees are also bound by the Management and Conduct Rules and Regulations. ",
    "25.7 Copy of the Rules A copy of these rules shall be provided to each owner and/or occupier. ",
    "25.8 Written Permission Written permission by the Trustees shall only be valid if signed by the Chairman and at least two other trustees.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        25. Trustees Decisions Final
      </Typography>
      <Box>
        {FinalDicisionArr.map((i) => {
          return (
            <Typography
              sx={{ marginY: "10px" }}
              key={FinalDicisionArr.indexOf(i)}
            >
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
