import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const Pets = () => {
  const petsArr: string[] = [
    "3.1 Written Permission: A resident shall not, without the consent of the Trustees in writing (which may not unreasonably be withheld), keep any animal, reptile or bird in a unit or on the common property. Applications to keep an animal, reptile or bird must include full details and be accompanied with an up to date inoculation certificate. Inoculations must be updated as required. The pet must wear a collar with a disc detailing the contact details of the owners or have an id chip for scanning. If a pet is replaced the Trustees must be informed of the change and furnished with the relevant information. No more than two pets of any kind will be permitted per unit, and dogs will only be permitted in ground floor units or units with an enclosed garden. ",
    "3.2 Registration: Any pets in the complex must be registered with the Managing Agent. ",
    "3.3 Conditions: The Trustees may prescribe any reasonable condition for the keeping of any animal, reptile or bird, and permission may be withdrawn if a condition is contravened. No wild, dangerous or vicious animals may be kept. It is the residents’ responsibility to keep their pets free of parasites and disease. If an animal contracts a contagious disease, the pet owner must take the necessary steps to prevent spreading of the disease. Residents are required to keep their pets within the confines of their own areas, and when taken into common areas must be on a leash or under supervision. It is the pet owner’s responsibility to keep their exclusive use area free of faeces as well as ensuring that any mess made by their pets in the common or exclusive use areas is cleaned up by themselves on a regular (daily) basis. The area in which the animal, reptile or bird is kept must be clean, sheltered and with access to clean drinking water at all times. The Trustees reserve the right to inspect the premises where any pet it kept. The above conditions apply if a resident should be temporarily caring for some else’s pets.  ",
    "3.4 Withdrawal of Permission: The Trustees may withdraw such approval in the event of the contravention of any condition as prescribed in terms of rule 3.3 above. ",
    "3.5 Liability: The owner of any animal, reptile or bird that causes any injury, damage or inconvenience will be solely responsible and liable for such injury, damage or inconvenience. ",
    "3.6 Disturbance: Any owner or tenant must ensure that their animals are not a source of unreasonable disturbance to other owners or tenants. If the Trustees receive complaints, the board will discuss such complaints with the owner. If an accepted solution cannot be reached, permission to keep the animal will be reconsidered. ",
    "3.7 Trustees Decision Final: The Trustees’ decision regarding any matter relating to animals, reptiles and birds shall be final and binding. ",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        3. Pets
      </Typography>
      <Box>
        {petsArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={petsArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
