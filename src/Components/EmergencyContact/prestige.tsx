import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import prestige from "../../images/prestige.png";

export const Prestige = () => {
  const [showBox, SetShowBox] = useState<boolean>(false);
  return (
    <Box
      onClick={() => {
        SetShowBox(!showBox);
        console.log(showBox);
      }}
      sx={styles.contactBox}
    >
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "primary.dark",
          width: "60%",
          marginY: "10px",
          marginLeft: "20%",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "row " }}>
        <Box sx={styles.imageContainer} />
        <Box
          sx={{
            textAlign: "start",
            marginLeft: "20px",
            alignSelf: "center",
          }}
        >
          <Typography variant="h4">Prestige metering</Typography>
          <Typography variant="h6">Water and electricity</Typography>
          <Typography>
            Contact When: There is a problem with your prepaid meter
          </Typography>
          <Typography
            sx={{ display: { xs: !showBox ? "block" : "none", sm: "none" } }}
            variant="caption"
          >
            Tap to open
          </Typography>
          <Box sx={{ display: { xs: showBox ? "block" : "none", sm: "none" } }}>
            <Typography sx={{ marginY: "20px", fontWeight: "bold" }}>
              Business hours contact
            </Typography>
            <Box>
              <Typography>Name: Jeandre Britz</Typography>
              <Typography>Email: jeandre@prestige-metering.co.za</Typography>
              <Typography>Number: +27 83 937 0895</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "primary.dark",
          width: "60%",
          marginY: "10px",
          marginLeft: "20%",
        }}
      ></Box>
    </Box>
  );
};

const styles = {
  contactBox: {
    display: "flex",

    flexDirection: "column",
    marginY: "50px",

    width: { xs: "90vw", sm: "60vw" },
    minHeight: "100px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
  },
  imageContainer: {
    backgroundImage: `url(${prestige})`,
    backgroundColor: "white",
    backgroundAttachment: "absolute",
    backgroundPosition: "50% 35%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "100px",
    width: { xs: "50px", md: "100px" },
    height: { xs: "50px", md: "100px" },
  },
};
