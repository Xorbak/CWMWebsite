import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Trash = () => {
  const trashArr: string[] = [
    "9.1 Refuse receptacles are placed outside each block of units for the disposal of domestic / household refuse only. ",
    "9.2 Pieces of furniture, appliances, building rubble and garden rubble will not be removed. This must be disposed of by the resident accordingly. This type of refuse must not be left lying around either in the common areas or the exclusive use areas. ",
    "9.3 An owner or occupier of a section shall ensure that before refuse is placed in this receptacle, it is securely wrapped in a bag (black plastic or otherwise). Loose rubbish will not be removed and the bin will also not be cleaned if rubbish is not in a bag. ",
    "9.4 Rubbish is removed once a week according to a Municipality schedule. Bins will not be returned to the designated locations after the Municipality has removed the rubbish. ",
    "9.5 No fats, oils, hazardous chemicals or solid waste may be disposed of via the sinks, basins, baths or showers. ",
    "9.6 No items that may cause a blockage or damage to the sewage system may be disposed of via the toilets.  ",
    "9.7 Any costs to repair damaged sewage or drainage systems will be for the owner, resident or occupiers’ account.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        9. Refuse Disposal
      </Typography>
      <Box>
        {trashArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={trashArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
