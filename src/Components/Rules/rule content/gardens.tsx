import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Gardens = () => {
  const gardenArr: string[] = [
    "8.1 The owner or occupier of a section shall at all times and at his own expense, maintain his section and exclusive use area in good, clean, hygienic, tidy and habitable order and condition, and shall be responsible at his own expense for: ",
    "8.1.1	all interior painting, maintenance, remedying of blockage of sewers and sanitary equipment and connections; ",
    "8.1.2	remedying of water pipes in his section; ",
    "8.1.3	remedying of excessive water overflow or any equipment or installation of his section and exclusive use areas.",
    "8.2 All owners and occupiers shall be obliged at all reasonable times to grant access to the Trustees, their servants and agents, to their sections or their exclusive use areas and any other part of the common property, for the purpose of performing any necessary maintenance, effecting repairs or performing other such tasks and matters incidental thereto. ",
    "8.3 The owners or occupiers of any section shall not interfere with flora, wild or cultivated, growing on common property other than the exclusive use areas allocated to such owners. All owners and occupiers shall ensure that such areas are not despoiled in any way. ",
    "8.4 No plants, trees or shrubs on the common property may be trimmed without prior written approval from the Trustees. It is recorded that certain of the flora are protected by law and that any owner or occupier interfering with or damaging, or in any other way acting in respect of such flora contrary to the provisions of the law, may be prosecuted by the Trustees or any other person. ",
    "8.5 No owner or occupier shall cause to be planted in the gardens on the common property any plants shrubs, or trees without first obtaining written consent of the Trustees. It is specifically recorded that no owner or occupier shall plant any creepers or creeping plants, or plants which have a tendency to creep, in his exclusive use area unless he ensures that it does not encroach on his neighbour’s property and keeps it cut back at all times. ",
    "8.6 The owners and occupiers of any section and his visitors shall keep to the pathways clear at all times. ",
    "8.7 The Body Corporate utilises a garden service to maintain the gardens. This includes both the common ground gardens as well as the exclusive area gardens. The service is provided once a week, on the same day every week, except for on public holidays and when it is raining heavily. The cost of maintaining the Exclusive use areas or private gardens will be for the account of the Owner / Resident",
    "8.8 Planting, replacing plants, maintaining beds and watering are the responsibility of the owner/occupier of a section with an enclosed garden. ",
    "8.9 The gardening schedule will be adhered to and garden gates must be left open for the gardeners on the relevant day. Inside lawns must be free of dog faeces, hosepipes, garden furniture, etc., on the day of mowing. Any enquiries regarding the gardening service can be directed to the Trustees. ",
    "",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        8. Maintainance and Gardens
      </Typography>
      <Box>
        {gardenArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={gardenArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
