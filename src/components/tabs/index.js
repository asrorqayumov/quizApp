import react, { useContext, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import CardQuestion from "../card";
import QuestionsContext from "../../context/questions";
import { findIndex, TabPanel } from "../../utils";
import AlertDialog from "../modal";

export default function TabsPanel() {
  let [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const { questions } = useContext(QuestionsContext);
  let [totalScore, setTotalScore] = useState(0);
  let [disableTab,setDisableTab] = useState(false)
  const lastValue = questions.length;

  const handleChange = (event, newValue) => {
    setValue(++newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setDisableTab(true)
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="quiz-wrapper">
      <div className="d-flex" style={{ flexDirection: "column" }}>
        <Tabs
          onChange={handleChange}
          variant="standard"
          value={false}
          style={{ marginLeft: 13 }}
        >
          {questions.map((item) => {
            return (
              <Tab
                key={item.question}
                disabled={disableTab}
                label={
                  <Button
                    variant={
                      findIndex(questions, item) === value
                        ? "contained"
                        : "outlined"
                    }
                    color="primary"
                    disabled={disableTab}
                  >
                    {findIndex(questions, item)}
                  </Button>
                }
              />
            );
          })}
        </Tabs>

        {questions.map((item) => {
          return (
            <TabPanel
              key={item.question}
              component="div"
              value={value}
              index={findIndex(questions, item)}
            >
              <CardQuestion
                data={item}
                value={value}
                setValue={setValue}
                lastValue={lastValue}
                totalScore={totalScore}
                setTotalScore={setTotalScore}
                setDisableTab={setDisableTab}
                disableTab={disableTab}
              />
            </TabPanel>
          );
        })}
      </div>
      <div className="result-row">
        <Typography fontWeight={600} variant="h5">
          {value}/{questions.length}
        </Typography>
        <div>
          <Button disabled={disableTab} variant="contained" color="success" onClick={handleClickOpen}>
            Finish
          </Button>
          <AlertDialog
            open={open}
            handleClose={handleClose}
            score={totalScore}
            total={lastValue}
          />
        </div>
      </div>
    </Box>
  );
}
