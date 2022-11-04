import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bun from "../../images/bun5.jpg";
import cwmImg from "../../images/cwmImg.jpeg";
import faq from "./faq.json";
import { FaqBox } from "./faqBox";

export const Faq = () => {
  console.log(
    faq.General.Q_A.map((i) => {
      return `Q:${i.q} A:${i.a}`;
    })
  );
  return (
    <Box sx={styles.App}>
      <Box sx={styles.faqContainer}>
        <Box //imagebox
          sx={styles.cwmImgBox}
        ></Box>
        <Box
          sx={styles.faqBox} //general
        >
          <FaqBox title={faq.General.title} content={faq.General.Q_A} />
        </Box>
      </Box>
      <Box //pet box
        sx={styles.faqContainer}
      >
        <Box sx={styles.faqBox}>
          <Box //imagebox for pets
            display={{ xs: "block", lg: "none" }}
            sx={styles.petsImgBox}
          ></Box>
          <FaqBox title={faq.Pet.title} content={faq.Pet.Q_A} />
        </Box>
        <Box //imagebox
          display={{ xs: "none", lg: "block" }}
          sx={styles.petsImgBox}
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
    justifyContent: { sm: "center", md: "start" },
    fontSize: "calc(10px + 2vmin)",
  },
  faqBox: {
    width: { sm: "100%", lg: "50%" },
    backgroundColor: "background.paper",
    minHeight: "600px",
    borderRadius: "5px",
  },
  faqContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    width: "80%",
    marginTop: "1%",
    gap: "1%",
  },
  cwmImgBox: {
    width: { sm: "100%", lg: "50%" },
    borderRadius: "5px",
    backgroundColor: "background.paper",
    minHeight: "300px",
    backgroundImage: `url(${cwmImg})`,
    backgroundAttachment: "fixed",
    backgroundPosition: { xs: "47% 40%", lg: "200% 30%" },
    backgroundRepeat: "no-repeat",
    backgroundSize: { xs: "700px", sm: "800px", md: "auto" },
  },
  petsImgBox: {
    width: { sm: "100%", lg: "50%" },
    backgroundColor: "background.paper",
    minHeight: "500px",
    borderRadius: "5px",
    backgroundImage: `url(${bun})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
  },
};
