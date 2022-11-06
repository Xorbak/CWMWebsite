import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { NavLink } from "react-router-dom";
const navArr = [
  { location: "/emergencyContacts", label: "Emergency Contacts" },
  { location: "/rules", label: "Rules" },
  { location: "/faq", label: "FAQ" },
  { location: "/clubhouse", label: "Clubhouse" },
];

interface Props {
  handleCloseNavMenu?: () => void;
}
export const NavItems = ({ handleCloseNavMenu }: Props) => {
  return (
    <React.Fragment>
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
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ color: "text.primary" }}
            >
              {label}
            </MenuItem>
          </NavLink>
        )
      )}
    </React.Fragment>
  );
};
