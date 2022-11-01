import { ThemeOptions } from "@mui/material/styles/createTheme";
import createTheme from "@mui/material/styles/createTheme";

const CWMtheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#D0B8A8",
      light: "rgb(217, 198, 185)",
      dark: "rgb(145, 128, 117)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#7D6E83",
      light: "rgb(151, 139, 155)",
      dark: "rgb(87, 77, 91)",
      contrastText: "#fff",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#F8EDE3",
      paper: "#DFD3C3",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },

    error: {
      main: "#f44336",
    },
    success: { main: "#4caf50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};

export const theme = createTheme(CWMtheme);
