import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getCategorys, getQuestions } from "../../api/request";
import { useContext } from "react";
import QuestionsContext from "../../context/questions";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [validate, setValidate] = useState(false);
  const { setQuestions } = useContext(QuestionsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategorys()
      .then((data) => setCategorys(data.trivia_categories))
      .catch((err) => console.log(err));
  }, []);

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
    setValidate(false);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setValidate(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount == "" || category == "") {
      setValidate(true);
    } else {
      getQuestions(amount, category)
        .then((res) => {
          console.log(res);
          setQuestions(res.results);
          navigate("/quiz");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
              value={amount}
              onChange={handleChangeAmount}
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
            sx={{ minWidth: "100%", marginTop: 3, marginBottom: 1 }}
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
              required
            >
              {categorys.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {validate ? (
            <Typography color={"red"}>Please fill to all fields</Typography>
          ) : (
            ""
          )}
          <Button
            variant="contained"
            fullWidth
            type="submit"
            color="success"
            sx={{ marginTop: 2 }}
          >
            Start
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Home;
