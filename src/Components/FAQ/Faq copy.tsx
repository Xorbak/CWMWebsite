import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bun from "../../images/bun5.jpg";
import cwmImg from "../../images/cwmImg.jpeg";

export const Faq = () => {
  return (
    <Box sx={styles.App}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "95%",
          marginTop: "100px",
        }}
      >
        <Box //imagebox
          sx={{
            borderRadius: "5px",
            backgroundColor: "background.paper",
            minHeight: "300px",
            backgroundImage: `url(${cwmImg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "180% 15%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
          }}
        ></Box>
        <Box sx={styles.faqBox}>
          <Typography variant="h3">General FAQ</Typography>
          <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Q:</Typography> I am moving
            In/Out what needs to be done?
          </Typography>
          <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>A:</Typography>
            When both moving in and out the resident involved needs to fill in
            the intent to move form and email it to [person]. Without this form
            a resident will not be allowed to move in or out. The form can be
            downloaded here[link]
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
          <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Q:</Typography> Something in
            my unit broke, who is held responsible for fixing it?
          </Typography>
          <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>A:</Typography>
            The general rule of thumb is when it is between your four walls its
            up to the tenant/owner. Anything out side of the 4 walls is
            considered the Bodycorporate responsibility. If you are still not
            certain, please contact Trfalgar at[]
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
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "80%",
          marginTop: "1%",
          gap: "1%",
        }}
      >
        <Box sx={styles.faqBox}>
          <Typography variant="h3">Pet FAQ</Typography>
          <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Q:</Typography> Is Carlswald
            Manor Pet friendly?
          </Typography>
          <Typography sx={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>A:</Typography>
            The short answer is yes within reason. Large dogs are not allowed
            for units with no garden and it is up to the resident to care for
            the animal. All pets need to be registered. See Pets section in
            rules.
          </Typography>
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
        <Box //imagebox
          sx={{
            backgroundColor: "background.paper",
            minHeight: "500px",
            borderRadius: "5px",
            backgroundImage: `url(${bun})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "85% 100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { sm: "start", md: "start" },
    fontSize: "calc(10px + 2vmin)",
  },
  faqBox: {
    width: { xs: "80vw", lg: "50%" },
    backgroundColor: "background.paper",
    minHeight: "500px",
    borderRadius: "5px",
  },
  faqImageBox: {},
};
