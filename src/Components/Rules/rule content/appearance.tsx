import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Appearance = () => {
  const appearanceArr: string[] = [
    "5.1 Appearance The owner or occupier of a section shall not place or do anything on any part of the common property, including patios, balconies, or walls which, at the discretion of the trustees, is aesthetically displeasing or undesirable when viewed from the outside of the section. ",
    "5.2 Fences  No owner or occupier of a section shall erect or allow to be erected any form of fence on any part of the common property or in any exclusive use area. ",
    "5.3 Lighting No owner or occupier shall erect or cause to be erected or installed any lights or lighting apparatus on any part of the common property or his exclusive use area without the written consent of the Trustees first having been obtained.",
    "5.4 Structures No owner or occupier shall erect any structure of any nature whatsoever, including but not limited to umbrellas, braai facilities, saunas and Jacuzzis, which are of a permanent or semi permanent nature, without the written consent of the Trustees first having been obtained. ",
    "5.5 Antennas & Satellite Dishes Residents or occupiers may not install antennas, aerials, satellite dishes, technical equipment or cabling without the prior consent and/or approval of the Trustees. ",
    "5.6 Storage No owner or occupier shall store or allow to be stored any item on his balcony or patio, other than pot plants and garden furniture having regard to the provisions of 5.1. An owner or occupier of a section shall be permitted to place and keep on his balcony or patio such pots and pot plants and garden furniture, being furniture meant and designed for outside use, as may be approved by the Trustees from time to time. Freestanding pot plants or planters must not be situated so as to cause a disruption to the staircases, walkways, parking areas or driveways. Furthermore, the plants or planters must be maintained at all times. The Trustees reserve the right to instruct an owner or occupier to remove such pot plants, pots or garden furniture, or items of a similar nature from his balcony or exclusive use area, if, in the discretion of the Trustees, such item or items are undesirable when viewed from the outside of a section. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        5. Appearance
      </Typography>
      <Box>
        {appearanceArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={appearanceArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
