import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import cwmImg from "./cwmImg.jpeg";

export const Home = () => {
  return (
    <Box>
      <Box sx={styles.paralaxImg}></Box>
      <Box sx={styles.home}>
        <Typography
          variant="h3"
          sx={{
            backgroundColor: "background.default",
            textAlign: "center",
            margin: "20px",
          }}
        >
          Welcome to Carlswald Manor
        </Typography>
        <Box sx={styles.homeBox}>
          <Typography>
            With a total of 85 units. It's the perfect place to call home or
            have an investment propery. Trafalgar property management is
            responsible for managing the property and will be the primary
            contact point for residents should they have queries.
          </Typography>
          <Typography>
            Carlswald Manor is pet friendly, within reason, pet owners need only
            register them with the trustees. Residents are held responsible for
            the care of said pet. Please check whether your pets are allowed
            before moving in.
          </Typography>
          <Typography>
            Each unit is fitted with prepaid electricity that is mananged by
            Prestige metering. It is up to the owner to ensure they are
            registered with Prestige to avoid disconnection.
          </Typography>
          <Typography>
            The saftey of our residents are our number one priority. Therefore
            we have 24/7 security with Kallvest that will manage the day to day
            security needs. For emergency situations BSS security will be
            contacted for an armed response. More so, our electric perimiter
            fence immediately triggers an alarm when tampered with.
          </Typography>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  home: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { sm: "start", md: "start" },
    fontSize: "calc(10px + 2vmin)",
  },
  homeBox: {
    maxWidth: "800px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
    padding: "15px",
    textAlign: "start",
  },
  paralaxImg: {
    backgroundImage: `url(${cwmImg})`,
    minHeight: "400px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};
