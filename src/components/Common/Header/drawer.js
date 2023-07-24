import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Switch } from "@mui/material";
import { toast } from "react-toastify";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link"/>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
        <a href='/'><p className='link'>Home</p></a>
        <a href='/compare'><p className='link'>Compare</p></a>
        <a href='/watchlist'><p className='link'>WatchList</p></a>
        <a href='/dashboard'><p className='link'>Dashboard</p></a>

        <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>

        </div>
      </Drawer>
    </div>
  );
}
