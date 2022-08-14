import react, { useContext, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import CardQuestion from "../card";
import QuestionsContext from "../../context/questions";
import { findIndex, TabPanel } from "../../utils";


export default function TabsPanel() {
  const [value, setValue] = useState(1);
  const { questions } = useContext(QuestionsContext);
  const lastValue = questions.length;

  const handleChange = (event, newValue) => {
    setValue(++newValue);
  };

  return (
    <Box className="quiz-wrapper"> 
      <div className="d-flex" style={{flexDirection:'column'}}>
        <Tabs
          onChange={handleChange}
          variant="standard"
          visibleScrollbar="false"
          value="false"
          style={{marginLeft:13}}
        >
          {questions.map((item) => {
            return (
              <Tab
                key={item.question}
                label={
                  <Button variant={findIndex(questions,item)===value?'contained':'outlined'} color="primary">
                    {findIndex(questions,item)}
                  </Button>
                }
              />
            );
          })}
        </Tabs>

        {questions.map((item) => {
          return (
            <TabPanel component="div" value={value} index={findIndex(questions,item)}>
              <CardQuestion data={item} value={value} setValue={setValue} lastValue={lastValue} />
            </TabPanel>
          );
        })}
      </div>
      <div className="result-row">
        <Typography fontWeight={600} variant="h5">
          {value}/{questions.length}
        </Typography>
        <div>
          <Button variant="contained" color="success">
            Finish
          </Button>
        </div>
      </div>
    </Box>
  );
}
