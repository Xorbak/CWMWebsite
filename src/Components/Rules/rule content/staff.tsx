import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Staff = () => {
  const staffArr: string[] = [
    "15.1 Employment: The members of staff that are required by the Body Corporate to maintain the premises shall be employed and dismissed by the Trustees only, at their own discretion. No owner or occupier of any section, other than a person(s) empowered by the Body Corporate to do so, shall instruct the staff (gardeners, security etc) to do any work in the exclusive use areas and / or common property or to run errands or do private work during normal working hours except in an emergency. ",
    "15.2 Utilization: All members of staff employed by the body corporate are employed to perform tasks pertaining to the running and upkeep of the complex; they may under no circumstances be used by any owner or occupier to perform private tasks whilst they are on duty. ",
    "15.3 Complaints: Any owner or occupier who has a complaint about any member of staff is to report it to the Trustees, and is not to reprimand any member of staff in person in any way. ",
    "15.4 Security Personnel: No owner or occupier may in any way whatsoever interfere with or give instructions to any of the security personnel employed by the Body Corporate from time to time to safeguard the complex. In particular, no owner or occupier shall instruct any of the security personnel: ",
    "15.4.1 to perform any task for him other than in an emergency; ",
    "15.4.2 to wash cars, clean any part of his section, or any other part of the common property.",
    "15.5 Domestic Employees: Any owner or occupier of a section who has a domestic employee is to make sure that they know and understand the conduct rules and adhere to them at all times. The employee is the owner or occupier’s responsibility at all times. Domestic employees must be registered with security. The owner or occupier of any section shall not house or permit to be housed a domestic employee in the building or on the premises, save with the written consent of the Trustees who, in giving such consent, may impose conditions on such housing/ accommodation as they in their sole discretion deem fit. All domestic employees must sign the visitor’s book at the guardhouse on entry and exit from the complex. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        15. Staff and Employees
      </Typography>
      <Box>
        {staffArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={staffArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
