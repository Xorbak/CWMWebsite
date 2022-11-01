import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Security = () => {
  const securityArr: string[] = [
    "1.1 Any security incidents must be reported to the security staff and the Trustees or Managing Agent. ",
    "1.2 Access should not be given to unknown people. Visitors must sign in at all times. ",
    "1.3 Entry disks are for residents only and must not be given to contractors, security companies or visitors.",
    "1.4 Marketing promoters, collectors and hawkers are not permitted in the complex. If you should encounter one please ask them to leave the premises and check that they do or contact security to escort them from the premises. ",
    "1.5 All residents are required to register their domestic employees with security in order to ensure that access is only given to bona fides employees. Residents must ensure that their employees are informed of the security procedures. ",
    "1.6 Any suspicious looking persons and activities should be reported to Security or the Trustees. ",
    "1.7 Problems with intercom systems must be reported to the Trustees for action. Residents should check their intercom systems on a regular basis. ",
    "1.8 The electrical fence will be inspected regularly, residents should report any problems with regards to the fence to the Trustees. ",
    "1.9 All owners have been issued with a remote control for the gates to the complex. Safeguarding and maintaining these remotes is the responsibility of the owner / tenant. Remote controls should not be given to anyone other than a resident of the complex. ",
    "1.10 The procedure for visitors to gain access to the complex is:",
    "1.10.1	The visitor stops outside the entrance gate and speaks to the guard advising which unit they wish to visit.",
    "1.10.2	The guard contacts the resident via the intercom or telephone and confirms the credentials of the visitor.",
    "1.10.3	If the resident does not answer, the guard will not open the entrance gate for the visitor.",
    "1.10.4	Once the resident confirms that the visitor can be given access, the visitor will be asked to sign the register. If the visitor refuses to sign the register, they will not be given access to the complex.",
    "1.10.5	Upon exiting the complex the visitor will stop outside the exit gate and use the guardhouse intercom to open the gate.",
    "1.10.6	The guard on duty has the right to inspect any vehicle departing the complex should anything appear suspicious. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        1. Security
      </Typography>
      <Box>
        {securityArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={securityArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
