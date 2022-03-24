import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState([]);
  const [age, getAge] = useState("");
  const [gender,setGender] = useState("");

  

  const handleChange = (event) => {
    const name = event.target.value;
    setName(name);
    console.log(name);
  };

  const getData = () => {
    axios(`https://api.agify.io/?name=${name}`).then((res) => {
      getAge(res.data.age);
      console.log(age);
    });

  };

  const getGender = ( ) => {
    axios(`https://api.genderize.io/?name=${name}`).then((res) => {
      setGender(res.data.gender);
      console.log(gender);
    });
  };

  return (
    <div className="App">

      <br />

      <Button color="primary" variant="contained" onClick={getData} >
        Predict My Age
      </Button>

      <Button color="blue"variant="contained" onClick={getGender}>Gender</Button>

      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Please Enter Your Name"
        variant="outlined"
        onChange={handleChange}
      />
      <br />
      <br />

      <h1>
        Your age is {age}
      </h1>
      <h1>
        Your gender is {gender}
      </h1>
    </div>
  );
}

export default App;
