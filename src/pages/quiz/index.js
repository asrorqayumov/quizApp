import { Button, Typography } from "@mui/material";
import React from "react";
import Tab from "../../components/tabs";

const Quiz = () => {
  return (
    <div className="quiz-page">
      <div>
        <Tab />
        <div className="result-row">
          <Typography fontWeight={600} variant="h5">
            1/10
          </Typography>
          <div>
            <Button variant="contained" color="success">
              Finish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
