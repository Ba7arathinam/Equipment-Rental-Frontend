import React, { useState, useEffect, useContext, useRef } from "react";
import { useFormik } from "formik";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { env } from "../config";
import UserContext from "../UserContext";
const SideBar = () => {
  const { categoryData, setCategoryData } = useContext(UserContext);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    getData(age);
  }, [age]);

  let getData = async (age) => {
    try {
      let response = await axios.get(`${env.api}/Equipments`);
      let category = response.data;
      let final = [];
      if (age === "") {
        setCategoryData(category);
      } else {
        category.map((el) => {
          if (el.Category === age) {
            final.push(el);
          }
        });
        setCategoryData(final);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Box sx={{ minWidth: 120,color:"white",background:'gray' }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label "style={{color:'white'} }>Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Category"
            onChange={handleChange}
            theme='secondary'
          >
            <MenuItem value={"music"} style={{background:'black'} }>Music Equipment</MenuItem>
            <MenuItem value={"agriculture"} style={{background:'black'} }>Agriculture Equipment</MenuItem>
            <MenuItem value={"flim"} style={{background:'black'} }>Flim Equipment</MenuItem>
            <MenuItem value={"commercial vehicle"} style={{background:'black'} }>Commercial vehicle Equipment</MenuItem>
            <MenuItem value={"road"} style={{background:'black'} }>Road Equipment</MenuItem>
            <MenuItem value={"gaming"} style={{background:'black'} }>Gaming Equipment</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SideBar;