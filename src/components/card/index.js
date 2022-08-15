import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { findIndex, Options } from "../../utils";

const CardQuestion = ({
  data,
  value,
  setValue,
  lastValue,
  totalScore,
  setTotalScore,
  disableTab,
}) => {
  let [selectedIndex, setSelectedIndex] = useState(0);
  const optionsData = Options(data.correct_answer, data.incorrect_answers);
  const decValue = () => {
    value === 1 ? setValue(value) : setValue(--value);
  };
  const incValue = () => {
    value === lastValue ? setValue(value) : setValue(++value);
  };
  const handleListItemClick = (event, index, item) => {
    if (item === data.correct_answer) {
      event.currentTarget.classList.add("disabled-true");
      setTotalScore(++totalScore);
    } else {
      let corr = optionsData.find((answer) => {
        return data.correct_answer === answer;
      });
      event.currentTarget.classList.add("disabled");
      setSelectedIndex(findIndex(optionsData, corr));
    }
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" className="card-title" gutterBottom>
          {data.question}
        </Typography>
        <List component="nav" aria-label="secondary mailbox folder">
          {optionsData.map((item) => {
            return (
              <ListItemButton
                key={item}
                selected={selectedIndex === findIndex(optionsData, item)}
                onClick={(event) =>
                  handleListItemClick(event, findIndex(optionsData, item), item)
                }
              >
                <ListItemText primary={item} />
              </ListItemButton>
            );
          })}
        </List>
      </CardContent>
      <CardActions
        className="d-flex card-footer"
        sx={{ justifyContent: "space-between" }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={decValue}
          disabled={disableTab}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={incValue}
          disabled={disableTab}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardQuestion;
