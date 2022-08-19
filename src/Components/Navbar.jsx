import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Button } from "@mui/material";

const Navbar = ({ setUsers, setLoader }) => {
  const getdata = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    return res.data;
  };

  const handleUserClick = async () => {
    setLoader(true);
    let data = await getdata();
    setUsers(data);
    setLoader(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Advertyzement
          </Typography>
          <Button color="inherit" onClick={handleUserClick}>
            {" "}
            Get Users
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
