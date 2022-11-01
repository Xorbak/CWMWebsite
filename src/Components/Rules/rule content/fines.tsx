import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Fines = () => {
  const finesArr: string[] = [
    "26.1 The process to manage transgressions of these Conduct Rules is: ",
    "26.1.1 On first contravention a written notice or warning is issued ",
    "26.1.2 On second contravention a fine as outlined in Section 25.3 is levied ",
    "26.1.3 On third contravention a further fine as outlined in Section 25.3 is levied ",
    "26.1.4 On fourth contravention an external arbitration process is entered into for owners, and the eviction process is initiated for tenants.  ",
    "26.2 Any indulgence or allowance permitted to any owner, occupier or resident in terms of contraventions of these rules shall not prejudice the rights of the Body Corporate and the Trustees in enforcing these rules. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        26. Notices, Fines,Penalties & Arbitration
      </Typography>
      <Box>
        {finesArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={finesArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
