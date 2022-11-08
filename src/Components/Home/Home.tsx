import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { env } from "process";
import { useEffect, useState } from "react";
import cwmImg from "./cwmImg.jpeg";
interface CartoonQuotes {
  name: string;
  quote: string;
  cartoon: string;
}

export const Home = () => {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const [quote, setQuote] = useState<CartoonQuotes[]>();
  const [quoteNumber, setQuoteNumber] = useState<number>(getRandomInt(48));

  const fetchCartoon = async () => {
    await fetch(`${process.env.REACT_APP_CARTOON_QUOTE}?limit=100`)
      .then((res) => res.json())
      .then((result) => {
        //@ts-ignore if the result is not the same as what is in local storage overide localstoreage
        result !== JSON.parse(localStorage.getItem("localQuotes")) &&
          localStorage.setItem("localQuotes", JSON.stringify(result));
        console.log("this is the results");
        console.log(result);
      })
      .then(() => {}); //@ts-ignore
    const localQuotes = JSON.parse(localStorage.getItem("localQuotes"));
    setQuote(localQuotes);
  };
  !quote && //@ts-ignore
    JSON.parse(localStorage.getItem("localQuotes")) && //@ts-ignore
    setQuote(JSON.parse(localStorage.getItem("localQuotes")));

  useEffect(() => {
    !quote && fetchCartoon();
  }, []);

  console.log(quote);
  return (
    <Box>
      <Box sx={styles.paralaxImg}></Box>
      <Box sx={styles.home}>
        <Box>
          {" "}
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
              have an investment property. Trafalgar property management is
              responsible for managing the property and will be the primary
              contact point for residents should they have queries.
            </Typography>
            <Typography>
              Carlswald Manor is pet friendly, within reason, pet owners need
              only register them with the trustees. Residents are held
              responsible for the care of said pet. Please check whether your
              pets are allowed before moving in.
            </Typography>
            <Typography>
              Each unit is fitted with prepaid electricity that is mananged by
              Prestige metering. It is up to the owner to ensure they are
              registered with Prestige to avoid disconnection.
            </Typography>
            <Typography>
              The saftey of our residents are our number one priority. Therefore
              we have 24/7 security with Kallvest that will manage the day to
              day security needs. For emergency situations BSS security will be
              contacted for an armed response. More so, our electric perimeter
              fence immediately triggers an alarm when tampered with.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography>{quote && quote[quoteNumber].quote}</Typography>
          <Typography variant="caption">
            -{quote && quote[quoteNumber].name} *
            {quote && quote[quoteNumber].cartoon}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  home: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: { xs: "100vh", sm: "80vh" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "space-between" },
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
    height: { xs: "150px", sm: "200px" },
    backgroundAttachment: "fixed",
    backgroundPosition: { xs: "49% -10%", sm: "center" },
    backgroundRepeat: "no-repeat",
    backgroundSize: { xs: "700px", sm: "cover" },
  },
};
