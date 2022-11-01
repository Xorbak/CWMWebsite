import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Noise = () => {
  const noiseArr: string[] = [
    "12.1 Noise:",
    "12.1.1 No owner or occupier of a section shall make or allow to be made an excessive noise at any time, so as to disturb the other units. It is at the Trustees’ discretion as to what constitutes excessive noise. ",
    "12.1.2 The owner or occupier of any section shall not play or cause or permit to be played, any radio, television set, tape, CD or other recording, amplifier or any musical instrument in or about the building in a manner or at a time which causes inconvenience to any other owner or occupier, or to any other person. ",
    "12.1.3 No owner, resident or visitor of a section shall make or allowed to be made any noise after 21h00 and before 09h00 on a weekday (Sunday to Thursday). ",
    "12.1.4 No owner, resident or visitor of a section shall make or allowed to be made any noise after 22h30 and before 09h00 on a weekend (Friday and Saturday). ",
    "12.1.5 This is not a license to make as much noise as desired outside these hours. Music and other noise at any time must not be so loud as to be excessive and disturb other residents. Furthermore, vulgar language which can be heard by other residents is completely unacceptable. When guests arrive or depart they must not make undue noise such as shouting, hooting or playing a car radio loudly. ",
    "12.1.6 In the event of a social gathering (party), please note that it is not the cleaning staff’s responsibility to clean up afterwards. It is the responsibility of the host of his social gathering. Please have consideration for your fellow residents in terms of noise, rowdiness and mess. ",
    "12.1.7 The Trustees reserve the right to take whatever steps are necessary to enforce the noise rules to their discretion.",
    "12.2 Hooters: No owner, resident or visitor of a section shall sound or allow to be sounded any hooter unless in case of emergency. ",
    "12.3 Children: No owner or occupier of a section shall allow any child to make excessive noise in the immediate vicinity of any unit. Children may only play in designated areas without adult supervision(e.g. the enclosed area around the clubhouse and pool) and not in the roads, driveways or around the main gate area etc. Parents will be responsible for the full account for any repairs undertaken when children in any way damage property, whether this is private property or the complex common property. There will be no quad-biking allowed in the complex. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        12. Noise and Distrbance
      </Typography>
      <Box>
        {noiseArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={noiseArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
