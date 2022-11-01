import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import kalvest from "../../images/kalvest.jpg";

export const Kalvest = () => {
  return (
    <Box sx={styles.contactBox}>
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
          <Typography sx={{ marginY: "20px", fontWeight: "bold" }}>
            Contact
          </Typography>

          <Box>
            <Typography>Number: +27 83 937 0895</Typography>
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
    padding: "5px",
    flexDirection: "column",
    marginTop: "50px",
    minWidth: "500px",
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
    width: "100px",
    height: "100px",
  },
};
