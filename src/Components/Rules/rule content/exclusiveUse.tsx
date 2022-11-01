import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const ExclusiveUse = () => {
  const exclusiveUseArr: string[] = [
    "19.1 Notwithstanding the fact that exclusive use areas are in terms of the sectional title plans registered with the Chief Registrar of Deeds as part of the common property, every owner of a unit in the scheme shall have the right to the exclusive use of his allocated garden and/or parking area, excluding the rights of all the other owners and persons. ",
    "19.2 The Body Corporate will do everything reasonable within its power to ensure that an owner can enjoy the rights to this exclusive use area. ",
    "19.3 An owner or occupier of a unit is obliged to keep the exclusive area designated to his unit neat, hygienic, tidy and acceptable and this area may only be used as a garden area or parking areas as allocated. ",
    "19.4 The owner or occupier shall give the Body Corporate and or anyone authorized by the Body Corporate, access to the exclusive use area to do any repair work necessary on the common property or to implement rule 70 of Annexure 8 of the Sectional Title Act 95 of 1986. ",
    "19.5 Except where a unit is let, the owner may not let the exclusive use area designated to his unit without the prior permission of the Trustees. Such permission may not unreasonably be withheld. ",
    "19.6 Each owner is responsible for the repair and maintenance (flower beds, oil spills,etc) of the exclusive area, including the maintenance and repair of any water pipes,electrical wiring, down pipes, security devices, lapas, verandas etc., solely servicing that area. ",
    "19.7 For any structures to be erected in/on the exclusive use area, the owner of the area involved must first obtain written permission from the Trustees. A standard will be determined and any similar structures in future erected by any owner, should conform to the approved standard. No owners or occupiers of a section shall be entitled to erect any swimming pool or spa bath in his exclusive use area or on the common property. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        19. Exclusive use areas
      </Typography>
      <Box>
        {exclusiveUseArr.map((i) => {
          return (
            <Typography
              sx={{ marginY: "10px" }}
              key={exclusiveUseArr.indexOf(i)}
            >
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
