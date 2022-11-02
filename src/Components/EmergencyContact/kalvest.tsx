import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import kalvest from "../../images/kalvest.jpg";

export const Kalvest = () => {
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
          <Typography variant="h4">Kalvest</Typography>
          <Typography variant="h6">Security</Typography>
          <Typography>
            Contact When: Noise complaints or security related queries
          </Typography>
          <Typography
            sx={{
              display: { xs: !showBox ? "block" : "none", sm: "none" },
            }}
            variant="caption"
          >
            Tap to open
          </Typography>
          <Box
            sx={{
              display: { xs: showBox ? "block" : "none", sm: "block" },
            }}
          >
            <Typography sx={{ marginY: "20px", fontWeight: "bold" }}>
              Contact
            </Typography>

            <Box>
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
    marginTop: "50px",
    width: { xs: "90vw", sm: "60vw" },
    minHeight: "100px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
  },
  imageContainer: {
    backgroundImage: `url(${kalvest})`,
    backgroundAttachment: "absolute",
    backgroundPosition: "50% 35%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "100px",
    width: { xs: "50px", md: "100px" },
    height: { xs: "50px", md: "100px" },
  },
};
