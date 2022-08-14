import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { List, ListItemButton, ListItemText } from "@mui/material";

const CardQuestion = ({ data, value, setValue,lastValue }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const decValue = () => {
     value==1?setValue(value):setValue(--value)
  };
  const incValue = () => {
     value==lastValue?setValue(value):setValue(++value)
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" className="card-title" gutterBottom>
          {data.question}
        </Typography>

        <form>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="the integration of information, transportation, inventory, warehousing, material-handling, and packaging, and security" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="work in close partnerships with their customers" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="inventory management, purchasing, transportation, and warehousing, consultation and organizing and planning of these activities" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="the nature of the product, the optimal or preferred  location of source or manufacture, the projected volumes freight, etc." />
            </ListItemButton>
          </List>
        </form>
      </CardContent>
      <CardActions className="d-flex card-footer" sx={{justifyContent:'space-between'}} >
        <Button variant="contained" size="small" onClick={decValue}>
          Previous
        </Button>
        <Button variant="contained" size="small">
          Submit
        </Button>
        <Button variant="contained" size="small" onClick={incValue}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardQuestion;
