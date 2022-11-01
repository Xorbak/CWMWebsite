import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const DangerousActs = () => {
  const dangerArr: string[] = [
    "20.1 Storage: An owner or occupier of a section shall not store any material or do or permit or allow to be done, any other dangerous act in the building or on the common property which will or may increase the rate of the premium payable by the Body Corporate on any insurance policy. ",
    "20.2 Firearms: ",
    "20.2.1 No owner, occupier or visitor of a section shall discharge or allow to be discharged any firearm (as determined by the Act on Arms and Ammunition) in any section or any part of the common property, unless loss of his life may result from failure to do so. In such event, a detailed report is to be handed to the Trustees for evaluation. ",
    "20.2.2 No owner or occupier of a section shall carry a firearm on the common property in such a manner as to be visible to other people. ",
    "20.2.3 The Act on Arms and Ammunition is to be strictly adhered to at all times. ",
    "20.2.4 Any owner or occupier of a section who contravenes or allows to be contravened the above said Act, shall be criminally charged.",
    "20.3 Contravention: Any owner, resident or occupier who contravenes or allows to be contravened the above rule 20.2 shall be prohibited from carrying a firearm on the common property. ",
    "20.4 Electricity Supply: No owner or occupier of a section may tamper or have any work or repairs done to any electrical supply or apparatus that serves the common property. Any electrical faults on the common property must be reported to the Trustees. ",
    "20.5 Fires and Braais:",
    "20.5.1 No owner or occupier of a section shall allow any form of fire inside his unit or on the common property. It is strictly prohibited to throw cigarettes, cigarette stubs, matches etc., out of windows or anywhere on the common property. All flammable items must be kept in a safe place, and out of reach of children. ",
    "20.5.2 The owners or occupiers of any section shall not make fires or use barbeques or braais in a manner or at a time which causes inconvenience to the owners or occupiers of any other section, or causes danger to the building or any part thereof or to any property of any other person whatsoever. ",
    "20.5.3 Barbeques and braais may only be made in conventional braai equipment and no braais may be made on common property except for the designated braai areas in the clubhouse. ",
    "20.6 Fire Extinguishers / Fire Hydrants / Fire Hoses ",
    "20.6.1 No owner or occupier of a section shall tamper or allow to be tampered with any fire fighting equipment on the common property, nor shall they park or allow to be parked any vehicle so as to obstruct access to any fire fighting equipment on the common property. ",
    "20.6.2 It is illegal to use a fire extinguisher, fire hose or similar device anywhere In a section or anywhere on the common property for any other purpose except for an emergency and the fire hoses shall not be used for the washing of motor vehicles, watering gardens or any other unauthorized purposes. ",
    "20.6.3 If a resident uses the fire hoses in an improper manner the Trustees reserve the right to impose an immediate fine on the owner of the unit on first offence. Furthermore, any costs to reseal the fire hose shall be for the owners account. ",
    "20.6.4 It is strongly recommended that all owners or occupiers of a section acquire and keep in an accessible place in their unit a fire extinguisher. Owners or occupiers are not covered for the contents of their units by the insurance policy covering the buildings and are thus advised to take out suitable insurance cover themselves. ",
    "20.7 Fire Crackers: No owner, occupier or visitor of a section shall be allowed to set off any size or make of fire cracker. This causes inconvenience to the owners and occupiers of other sections by means of noise; it causes danger to the buildings or any part thereof as well as to property of persons. This also scares the animals in and around the complex and can cause bodily harm to individuals in the surrounds. ",
    "20.8 Power Tools and Equipment ",
    "20.8.1 The owner or occupier of any section shall not cause, or permit to be used anywhere in the building (including his section) or on the common property any hand or powered tools, implements, equipment, devices, utensils or any other things whatsoever which interfere with the radio or television reception, or which create any sound or noise or smells or fumes to which any other owners or occupiers may reasonably object.",
    "20.8.2 No owner or occupier may store or permit to be stored any power tools and equipment and/or similar items, including work benches, work tables, in or on any part of the common property or his exclusive use area, including but not limited to the carport designated to him for his use. ",
    "20.8.3 No owner or occupier of any section shall practice or cause to be practiced in any part of the common property, including his exclusive use area, any hobby or activity (meetings, gathering etc. of any nature) to which other owners or occupiers might object.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        20. Storage of Flammable material and other dangerous acts
      </Typography>
      <Box>
        {dangerArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={dangerArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
