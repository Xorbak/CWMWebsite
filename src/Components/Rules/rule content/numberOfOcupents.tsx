import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const NumberOfOccupents = () => {
  const occupantsArr: string[] = [
    "18.1 No owner or occupier of a section may permit more than four persons, irrespective of age, to reside on a permanent or semi-permanent basis in the section. ",
    "18.2 For the purpose of this Rule, the Trustees reserve to themselves the right to evict from the premises any person or persons residing in the section in contravention of this rule. ",
    "18.3 In the event of the Trustees being required to evict any occupant or resident of a section in terms of the provisions of this Rule, the Trustees shall only be required to give seven (7) days written notice to the owner or the occupier of the section to the effect that this Rule has been infringed and calling upon him to rectify the situation within the notice period. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        18. Number of Persons entitled to occupy any one section
      </Typography>
      <Box>
        {occupantsArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={occupantsArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
