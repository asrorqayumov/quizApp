import * as React from "react";
import { useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CardQuestion from "../card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabsPanel() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        onChange={handleChange}
        variant="standard"
        visibleScrollbar="false"
        value="false"
        selected={true}
      >
        <Tab
          label={
            <Button variant="contained" color="primary">
              1
            </Button>
          }
        />
        <Tab
          label={
            <Button variant="contained" color="primary">
              2
            </Button>
          }
        />
      </Tabs>

      <TabPanel component='div' value={value} index={0}>
        <CardQuestion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardQuestion />
      </TabPanel>
    </Box>
  );
}
