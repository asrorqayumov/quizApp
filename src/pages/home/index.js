import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/quiz");
  };

  return (
    <div className="home">
      <Box sx={{ width: 700, paddingTop: "25px" }}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="field"
        >
          <FormControl variant="standard" sx={{ minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Number Of Questions:
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChangeAge}
              label="Age"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            variant="standard"
            sx={{ minWidth: "100%", marginTop: 3 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Category:
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={handleChangeCategory}
              label="Catgeory"
            >
              <MenuItem value={"english"}>English</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            fullWidth
            role={"submit"}
            color="success"
            sx={{ marginTop: 3 }}
          >
            Start
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Home;
