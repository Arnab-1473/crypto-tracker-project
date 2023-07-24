import React, { useState } from "react";
// import Box from '@mui/material/Box';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "../Grid";
import List from "../List";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20b2aa",
    },
  },
});

const style = {
  color: "var(--white)",
  width: "50vw",
  fontSize: "1.3rem",
  fontWeight: 600,
  fontFamily: "Inter",
  textTransform: "capitalize",
};

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("list");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div className="tabs">
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="List" value="list" sx={style} />
            <Tab label="Grid" value="grid" sx={style} />
          </TabList>
        </div>

        <TabPanel value="list">
          <table className="list-table">
          {coins.map((item, i) => {
            return (
              <List coin={item} key={i} />
            );
          })}
          </table>
        </TabPanel>

        <TabPanel value="grid">
          <div className="grid-flex">
          {coins.map((coin, i) => {
            return (
              <Grid coin={coin} key={i} />
            );
          })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

// export default TabsComponent
