import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Clubhouse = () => {
  const clubhousArr: string[] = [
    "13.1 No pets or animals are permitted in the pool area. ",
    "13.2 The Body Corporate and Trustees are not liable for any injury, damage or loss howsoever caused concerning the use of the pool and children under 12 years of age must be supervised by an adult.",
    "13.3 Visitors using the pool must be accompanied by a resident who will be responsible for the behaviour of the visitors. ",
    "13.4 All persons using the pool area are to keep it in a clean and tidy condition and all refuse must be removed from the area after use. Please ensure that the access gate to the pool area remains closed at all times. ",
    "13.5 Any Trustee shall have the right at his own discretion to demand that anyone using the pool area in an unacceptable manner leave and such persons shall comply therewith immediately. ",
    "13.6 The clubhouse can be booked for private functions hosted by residents of the complex. ",
    "13.7 Bookings are on a first come first served basis. Bookings must be made via the Public Relations’ Trustee, or via email to the Managing agent. Full details of the date, times, contact details, nature of event, number of guests expected and unit number must be supplied. The Trustees reserve the right to refuse a booking. Once the booking has been confirmed arrangements for deposit payment and accessing the clubhouse keys will be made. ",
    "13.8 A cash deposit of an amount as revised from time to time is required to secure a clubhouse booking, of which an amount will be refunded provided that the clubhouse is clean and undamaged after the event. The monies kept will be used to upgrade the complex facilities. ",
    "13.9 It is the resident’s responsibility to clean up immediately after their function at the clubhouse so that the facility is clean and available should it be booked by another resident. This must be done by no later than 08h00 the following morning.",
    "13.10 Only the clubhouse can be booked, the swimming pool area will remain available to other residents at all times.",
    "13.11 Any damages incurred to the clubhouse will be for the account of resident who has booked it. Residents are required to inspect the clubhouse upon receipt of the keys and note any problems on the checklist prior to their event. ",
    "13.12 The clubhouse is provided as an empty shell and residents booking it must make their own arrangements for any facilities or services required. ",
    "13.13 Noise hours must be strictly adhered to as there are units in very close proximity to the clubhouse. All noise must cease by 21h00 Sunday to Thursday and 22h30 on Fridays and Saturdays. Furthermore, any noise prior to these times must not be so loud as to disturb other residents. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        13. Swimingpool and Clubhouse
      </Typography>
      <Box>
        {clubhousArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={clubhousArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
