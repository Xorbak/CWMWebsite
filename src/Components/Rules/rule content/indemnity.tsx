import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Indemnity = () => {
  const indemnityArr: string[] = [
    "22.1 The Body Corporate shall not be held responsible for any loss or damage, suffered by an owner or resident from any cause whatsoever and it shall be the responsibility of an owner to effect his own insurances in respect of the contents of his unit or his property on any part of the common property. ",
    "22.2 Any damage to a unit that is subject to a possible insurance claim must be reported to the Trustees and Managing Agent in writing, within 24 hours of the event having occurred. Failure to comply with this clause could result in an owner being held responsible for damage caused to another owner’s unit. ",
    "22.3 It is the owner’s responsibility to take all reasonable precautions to prevent loss, damage, destruction or injury. ",
    "22.4 The owner or tenant, their family, employees, guests and sub-contractors shall indemnify, defend, and hold harmless the Trustees of the Body Corporate from any and all claims, demands, suits, actions, proceedings, loss, cost and damages of every kind and description, including any reasonable attorneys’ fees and/or litigation expenses, caused by, arising out of, or contributed to, in whole or in part, by reasons of any act, omission, professional error, fault, mistake or negligence of the Trustees, their employees, agents, representatives, or subcontractors, their employees, agents, or representatives in connection with or incidental to the performance of this Agreement. The duly elected Trustees of this Body Corporate shall under no circumstances be held personally liable whilst performing their duties as Trustees; however this indemnity does not apply to theft, fraud or gross negligence on the part of the Trustees. ",
    "22.5 It is the responsibility of the owner to notify the Body Corporate / Managing Agent of any changes in ownership of a unit. ",
    "2.6 Notwithstanding the provisions of these rules, no owner or resident may contravene any law, by-law or regulation regarding the building or common property. ",
    "22.7 All owners and occupiers shall be obliged at all reasonable times to grant access to their sections, exclusive use areas or other part of the common property, to the Trustees, their servants and agents, for the purpose of enforcing these rules or when it is reasonably necessary in the best interests of the Body Corporate. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        22. Indemnity & General
      </Typography>
      <Box>
        {indemnityArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={indemnityArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
