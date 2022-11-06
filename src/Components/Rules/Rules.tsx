import { IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { GlobalStyles } from "../../App";
import { RuleItem } from "./rule content/ruleItem";
import cwmRules from "./cwmRules.json";
import ListIcon from "@mui/icons-material/List";

import React from "react";
interface Rules {
  name: string;
  rules: string[];
}
export const Rules = () => {
  const [showRules, setShowRules] = useState<number>(0);
  const ruleTocArr: string[] = cwmRules.map((i) => {
    return i.name;
  });

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const rules: Rules[] = cwmRules;
  return (
    <Box sx={GlobalStyles.App}>
      <Box sx={styles.ruleBox}>
        <Typography
          sx={{
            paddingY: "15px",
            borderBottom: "1px solid",
            borderColor: "primary.dark",
          }}
          variant="h2"
        >
          Rules
        </Typography>{" "}
        <Box sx={styles.ruleTocBox}>
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
                <ListIcon />
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
                {ruleTocArr.map((i) => {
                  return (
                    <MenuItem
                      onClick={() => {
                        setShowRules(ruleTocArr.indexOf(i));
                        handleCloseNavMenu();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      sx={{ minWidth: "150px", textAlign: "start" }}
                    >
                      {i}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Toolbar>
          <Box //index column
            sx={styles.indexBox}
          >
            {ruleTocArr.map((i) => {
              return (
                <MenuItem
                  onClick={() => {
                    setShowRules(ruleTocArr.indexOf(i));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  sx={{ minWidth: "150px", textAlign: "start" }}
                >
                  {i}
                </MenuItem>
              );
            })}
          </Box>
          <Box>
            <Typography sx={{ marginX: "20px" }}>
              <RuleItem
                title={rules[showRules].name}
                rule={rules[showRules].rules}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  ruleBox: {
    marginY: "100px",
    width: { xs: "90vw", md: "70vw", xl: "50vw" },
    minHeight: "500px",
    backgroundColor: "background.paper",
    borderRadius: "5px",
  },

  ruleTocBox: {
    display: "flex",
    flexDirection: "row",
    height: "90%",
    alignItems: { xs: "flex-start" },
  },
  indexBox: {
    display: { xs: "none", md: "block" },
    borderRight: "1px solid",
    borderColor: "primary.dark",
    minHeight: "100%",
  },
};
