import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { EmergencyContact } from "./Components/EmergencyContact/EmergencyContact";
import { Rules } from "./Components/Rules/Rules";
import { Faq } from "./Components/FAQ/Faq";
import Navbar from "./Components/Navbar/Navbar";
import { theme } from "./Themes/Themes";

import { ClubhouseBookings } from "./Components/ClubhouseBooking/clubhouseBooking";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergencyContacts" element={<EmergencyContact />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/clubhouse" element={<ClubhouseBookings />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;

export const GlobalStyles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { sm: "center", md: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
