import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";

export const LettingOfUnits = () => {
  const lettingArr: string[] = [
    "17.1 Notification: Should any owner let his property, he shall advise the Managing Agent in writing of the name and contact details of the lessee and the period of such lease. ",
    "17.2 Rules: The owner shall inform the lessee of all house rules and other rules and bind the lessee to adhere to such rules. The registered owner will become liable for any contravention of the house rules by the tenant, visitor or employee. ",
    "17.3 Obligations:No letting or parting with occupation shall in any way release the owner from any of his/her obligations to the Body Corporate in terms of the rules and/or in terms of the Sectional Titles Act 95 of 1986, as amended.",
    "17.4 Eviction of Tenants: In the event of a lessee continually committing a breach of any of the rules (after the warning process outlined in Section 26), then the lessor shall upon the request of the Trustees, instruct the lessee to vacate the said unit and complex within 30 (thirty) days. Failing this, the Trustees shall have the right to evict any tenant who does not comply with these conduct rules. A thirty day notice period shall be given by the Trustees to the tenant in writing after the owner has not taken any reasonable steps against the tenant. If the tenant does not vacate the unit and the Scheme within thirty days, he will be removed from the unit and Scheme by the Trustees, at his own risk and expense. No owner shall have any claim whatsoever for any loss of rent, etc., from the Trustees due to the eviction of any tenant. ",
    "17.5 Levies, water and electricity: Owners are responsible for the payment of all levies, water and electricity on due date. Levies are payable on or before the 1st day of each month in advance.",
    "17.6 In the event of a Sale agreement: ",
    "17.6.1 A levy clearance certificate must be obtained from the Managing Agent. ",
    "17.6.2 The seller of a property in the complex shall ensure that the sale agreement contains the following clauses: ",
    "17.6.2.1 The purchaser acknowledges upon occupation of the premises, he and his family, his visitors and domestic employees shall adhere to the rules and regulations as contained in this document. ",
    "17.6.2.2 The agent may only visit the complex by prior arrangement and must personally accompany a prospective buyer, and are not allowed to erect any “for sale” or “to let” sign boards on the premises. ",
    "17.6.2.3 The seller must personally ensure that the purchaser receives a copy of the Conduct Rules and any other administrative regulations applicable at the time and binds his purchaser to the rules and regulations in the sale agreement. ",
    "17.6.3 A tri-partheid agreement must be signed between the Body Corporate, the seller and the purchaser as regards the levies and levy payment.",
  ];
  return (
    <Box sx={{ marginY: "15px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ paddtinBottom: "15px", textDecoration: "underline" }}
      >
        17. Letting of units
      </Typography>
      <Box>
        {lettingArr.map((i) => {
          return (
            <Typography sx={{ marginY: "10px" }} key={lettingArr.indexOf(i)}>
              {i}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
