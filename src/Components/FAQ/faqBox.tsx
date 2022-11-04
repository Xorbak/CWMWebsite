import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  title: string;
  content: {
    q: string;
    a: string;
  }[];
}
export const FaqBox = ({ title, content }: Props) => {
  return (
    <React.Fragment>
      <Typography variant="h3">{title}</Typography>
      {content.map((i) => {
        return (
          <React.Fragment>
            <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Q:</Typography> {i.q}
            </Typography>
            <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>A:</Typography>
              {i.a}
            </Typography>
            <Box
              sx={{
                borderBottom: "1px solid",
                borderColor: "primary.dark",
                width: "60%",
                marginY: "10px",
                marginLeft: "20%",
              }}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
