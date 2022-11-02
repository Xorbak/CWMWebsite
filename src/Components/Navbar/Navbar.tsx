import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const navArr = [
  { location: "/emergencyContacts", label: "Emergency Contacts" },
  { location: "/rules", label: "Rules" },
  { location: "/faq", label: "FAQ" },
  { location: "/clubhouse", label: "Clubhouse" },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container sx={{ backgroundColor: "background.default" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu //small screen
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {navArr.map(
                (
                  { location, label } //smaller screens
                ) => (
                  <NavLink
                    style={{
                      textDecoration: "none",
                    }}
                    to={location}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>{label}</MenuItem>
                  </NavLink>
                )
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Box>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/"
              >
                <MenuItem sx={{ color: "text.primary", fontWeight: "bold" }}>
                  Carlswald Manor
                </MenuItem>
              </NavLink>
            </Box>
            <Box sx={{ display: "flex" }}>
              {navArr.map(
                (
                  { location, label } //bigger screens
                ) => (
                  <NavLink
                    style={{
                      textDecoration: "none",
                    }}
                    to={location}
                  >
                    <MenuItem sx={{ color: "text.primary" }}>{label}</MenuItem>
                  </NavLink>
                )
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
