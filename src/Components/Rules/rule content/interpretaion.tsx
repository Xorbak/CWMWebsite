import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Interpretation = () => {
  const interpretaionArr: string[] = [
    "In the interpretation of these rules, unless the context otherwiseindicates:",
    "a) “act” means the Sectional Titles Act, 1986 (Act 95 of 1986), as amended from time to time, and any regulations made and in force there under ",
    "b) “board of Trustees” mean the Trustees appointed in terms of the Sectional Titles Act ",
    "c) “the body corporate” means the body corporate as determined in sections 35 to 43 of the Sectional Titles Act 1986 ",
    "d) “section” means the unit registered ",
    "e) “common property” means the common property as shown on the Sectional Titles plan ",
    "f) “owners” mean the registered owners of the units, who are responsible for their families, tenants, residents etc. that may be in the complex ",
    "g) “managing agent” means the managing agent as appointed by the board of Trustees from time to time to administer the affairs of the body corporate ",
    "h) “complex” means the buildings known as CARLSWALD MANOR BODY CORPORATE as well as the common property ",
    "i) “occupier” or “resident” means the person occupying any unit ",
    "j) words importing – i) the singular number only shall include the plural, and the converse shall also apply ii) the masculine gender shall include the feminine, and neuter genders and the neuter gender shall include the masculine and feminine genders. ",
    "k) words and expressions to which a meaning has been assigned in the Act, shall bear the meaning to assigned to them. ",
    "l) the headings to the respective rules are provided for convenience of reference only and are not to be taken into account in the interpretation of the rules. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        Interpretation
      </Typography>
      <Box>
        {interpretaionArr.map((i) => {
          return (
            <Typography
              sx={{ marginY: "10px" }}
              key={interpretaionArr.indexOf(i)}
            >
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
