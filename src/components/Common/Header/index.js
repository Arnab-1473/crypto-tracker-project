import React, { useEffect, useState } from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import { Switch } from "@mui/material";
import { toast } from "react-toastify";

function Header() {
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
  }

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute('data-theme', "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "ligth");
    document.documentElement.setAttribute('data-theme', "light");
  };

  return (
    <div className="navbar">
      <a href="/">
        <h1 className="logo">
          Crypto Tracker <span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
      <div className="links">
        <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            outlined={true}
            onClick={() => {
              console.log("button Clicked");
            }}
          />
        </Link>
      </div>
      
      <div className="drawer">
        <TemporaryDrawer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  );
}

export default Header;
