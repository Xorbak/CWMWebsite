import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Vehicles = () => {
  const vehicleArr: string[] = [
    "2.1 Parking: No owner or occupier shall park or stand any vehicle on the common property, or allow any vehicle to be parked or stood on the common property without the written consent of the trustees, except in respect of those areas of the common property specifically demarcated for that purpose. The Trustees may, for this purpose, from time to time demarcate areas of the common property where parking of motor vehicles is permitted, and similarly demarcate other areas of the common property where the parking of motor vehicles is not permitted. ",
    "2.2 Subscription for additional parking bays: The Trustees at the request of the Body Corporate may from time-to-time depending on demand erect additional covered parking bays and offer residents the option to subscribe to the exclusive use of this undercover parking bay. The Body Corporate will have the right to recover a subscription fee from the subscriber for the service offered and exclusive use of the facility. Residents will have to provide a 30-day notice if they wish to cancel the subscription of the parking bay. These parking bays will be subjected to the same rules and requirements specified in this document.",
    "2.3 Tow-away: The Trustees may cause to be removed or towed away any vehicle – at the risk and expense of the owner of the vehicle parked – standing or abandoned on the common property without the written consent of the Trustees.",
    "2.4 Leaks: All owners and tenants of sections shall ensure that their vehicles, and the vehicles of their guests, do not drip oil or brake fluid onto the common property or in any other way deface the common property. If an owner or occupier of a section contravenes this rule they will compensate the Body Corporate for the fair, reasonable and necessary cost of restoring/ repairing/cleaning of such common property. ",
    "2.5 Repairs: No owner or tenant of a section shall be permitted to dismantle or affect any major repairs to any vehicle on any portion of the common property, exclusive use area or in a section (Unit) ",
    "2.6 License: No owner or occupier of a section shall be permitted to drive a vehicle on the common property or in any exclusive areas without a valid driver’s license for that vehicle.",
    "2.7 Speed: No owner or occupier shall be permitted to drive a vehicle at more than ten (10) kilometers per hour within the complex. ",
    "2.8 Dangerous Driving: No owner or occupier shall drive or allow to be driven any vehicle on the common property or in any exclusive use area in any manner that may be dangerous to either himself or to anyone else or to any property. There are a number of children and pets resident in the complex and drivers are cautioned to be mindful of this at all times. ",
    "2.9 Obstruction: The owner or occupier of any section shall not place or park or permit to be placed or parked any vehicle, possession or article in such manner as to obstruct any passageways, roads, parking bays, exits from or entrances to the building, or any entrance to or exit from any section of any garage or authorized parking bay of any other owner or lawful occupant. The Trustees may in the event of contravention of this rule, cause to be removed or towed away any such vehicle at the expense of the owner of the vehicle or the owner or occupier of the section which the driver of the vehicle was visiting at the time. ",
    "2.10 Caravans, boats or trailers: No caravans, boats or trailers may be parked in the complex. ",
    "2.11 Motor Vehicle Accidents: The Body Corporate or any of its Trustees are neither responsible nor liable for any motor vehicle accidents that occur within the complex. ",
    "2.12 Other activities: In the interest of safety cycling, skateboarding, rollerblading, quad biking and any ball games are not permitted in the driveway and parking areas.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        2. Vehcles
      </Typography>
      <Box>
        {vehicleArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={vehicleArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
