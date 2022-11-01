import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const LeisureAndBusiness = () => {
  const businessArr: string[] = [
    "16.1 Sales: No auction, jumble sale or any other sale shall be held on or in the property without first obtaining written permission from the Trustees. ",
    "16.2 Advertisements:No advertisements or posters of any nature may be placed in or around the complex, or outside the complex. No promotional or other pamphlets may be distributed in the complex. This includes but is not limited to notices from estate agents. Such material may not be placed on car windshields or inserted under section doors. The only exception is the distribution of notices from the Trustees. Notwithstanding the above: ",
    "16.2.1 A unit that goes on show may for the day of the show only have the minimum number of pointer boards required to point out the unit on show, they may only be erected at 12h00 and must be removed by 17h00. ",
    "16.2.2 A unit that is on sale may have no “For Sale” sign at the gate. ",
    "16.3 When the purpose for which a section in intended to be used is shown expressly or by necessary implication on or by the registered section plan, an owner or occupier shall not use or permit his section to be used for any other purpose. ",
    "16.4 No owner or occupier of any section shall conduct business, whether for profit or  otherwise, in his section or in the section in which he resides, or shall allow or permit his section in which he resides to be used for the carrying on of any business, whether for profit or otherwise. This includes activity gatherings of any sort e.g. church meetings, political meetings, hobby gatherings etc. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        16. Business and Leisure activities
      </Typography>
      <Box>
        {businessArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={businessArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
