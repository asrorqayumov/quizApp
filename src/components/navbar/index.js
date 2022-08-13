import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./style";

const Navbar = () => {
  return (
    <div className="navbar">
      <Typography variant="h5" fontWeight={500} >
        <Link to="/" className="brand-text">
          Test
        </Link>
      </Typography>
    </div>
  );
};

export default Navbar;
