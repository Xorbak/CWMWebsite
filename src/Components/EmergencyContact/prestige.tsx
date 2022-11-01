import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import prestige from "../../images/prestige.png";

export const Prestige = () => {
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
          <Typography variant="h4">Prestige metering</Typography>
          <Typography variant="h6">Water and electricity</Typography>
          <Typography>
            Contact When: There is a problem with your prepaid meter
          </Typography>
          <Typography sx={{ marginY: "20px", fontWeight: "bold" }}>
            Business hours contact
          </Typography>

          <Box>
            <Typography>Name: Jeandre Britz</Typography>
            <Typography>Email: jeandre@prestige-metering.co.za</Typography>
            <Typography>Number: +27 83 937 0895</Typography>
            <Box />{" "}
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
    marginY: "50px",

    minWidth: "500px",
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
    width: "100px",
    height: "100px",
  },
};
