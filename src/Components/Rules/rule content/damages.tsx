import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Damages = () => {
  const damagesArr: string[] = [
    "4.1 Damage: An owner or occupier of a section shall not mark, paint, drive nails or screws or the like into, or otherwise damage or alter any part of the common property without first having obtained the written permission of the trustees. ",
    "4.2 Security Gates: Notwithstanding rule 4.1, an owner or person authorized by him, may install: ",
    "4.2.1	any locking device, safety gate, burglar bars or other safety device for the protection of his section; provided that the Trustees have first approved in writing the nature, design and colour of the device and the manner of its installation. ",
    "4.2.2	any screen or other device to prevent the entry of animals or insects; provided that the Trustees have first approved in writing the nature, design and colour of the device and the manner of its installation. ",
    "4.3 Changes and additions: All changes (e.g. building of pools/spas, braais, patios, sky lights etc.) and changes to the exterior of units must be approved by all registered owners and bond holders. Requests for such changes must be in writing and contain all the relevant information, e.g. the type of change, plans, name of contractor and time period to completion. This is a lengthy process and residents are advised in all cases to first obtain the necessary permission before accepting tenders, as owners and bond holders may not approve the changes. All internal structural changes must be approved by the Trustees. Full details of requests must be submitted at least one week prior to the monthly Trustees meeting for inclusion on the agenda. ",
    "4.4 Unauthorised changes: If any form of change to the exterior is made by a resident or owner without the consent of all owners and bond holders, the resident or owner will take full responsibility to re-instate the changes to the original state of the complex and will accept liability of all the necessary costs involved in the restoration of the building. Residents or owners that receive a notice from the Trustees regarding the non-compliance of unauthorised changes will have a 14 day compliance period within which to complete the restoration work. The resident/owner is also responsible for arranging an inspection review with the Trustees to obtain sign-off of the restoration work. The restoration will only be considered complete once the resident and owner have received written confirmation from the Trustees that the restoration work has been completed satisfactorily. Should the resident or owner not act within the 14 day notice period, the Trustees will have the right to appoint a contractor of their choice to perform the restoration work on behalf of the resident or owner, and the resident or owner will be liable for any expenses incurred to restore the changes to the building’s original state. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        4. Damages, Alterations, Additions, and Changes
      </Typography>
      <Box>
        {damagesArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={damagesArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
