import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import trafalgar from "../../images/Trafalgar.jpg";

export const Trafalgar = () => {
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
          <Typography variant="h4">Trafalgar</Typography>
          <Typography variant="h6">Propery Management</Typography>
          <Typography>Contact When: You're not sure who to contact</Typography>
          <Typography sx={{ marginY: "20px", fontWeight: "bold" }}>
            Business hours contact
          </Typography>

          <Box>
            <Typography>Name: Shavika Chetty</Typography>
            <Typography>Email: shavikac@trafalgar.co.za</Typography>
            <Typography>Number: +27 12 326 5963</Typography>
            <Box
              sx={{
                borderBottom: "1px solid",
                borderColor: "primary.dark",
                width: "60%",
                marginY: "10px",
                marginLeft: "20%",
              }}
            />
          </Box>

          <Box>
            <Typography>Name: Retha van Vuuren</Typography>
            <Typography>Email: rethav@trafalgar.co.za</Typography>
            <Typography>Number: +27 12 326 5963</Typography>
          </Box>
          <Typography sx={{ marginY: "20px", fontWeight: "bold" }}>
            Non Business hours emergency contact
          </Typography>
          <Box>
            <Typography>Number: +27 83 399 9930</Typography>{" "}
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
      />
    </Box>
  );
};

const styles = {
  contactBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    padding: "5px",
    minWidth: "500px",
    minHeight: "100px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
  },
  imageContainer: {
    backgroundImage: `url(${trafalgar})`,
    backgroundAttachment: "absolute",
    backgroundPosition: "50% 35%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "100px",
    width: "100px",
    height: "100px",
  },
};
