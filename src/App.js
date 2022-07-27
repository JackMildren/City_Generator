import "./App.css";
import { useState, useEffect } from "react";

import nameList from "./data/humanNames.json";

function App() {
  const genderList = ["Male", "Female", "Other"];
  const [name, setName] = useState(["test_fName", "test_lName"]);
  const [gender, setGender] = useState("test_gender");

  useEffect(() => {
    generate();
  }, []);

  const generate = () => {
    const newGender = genderList[getRandomNumber(genderList.length - 1)];
    setGender(newGender);

    const newName = [...name];
    let fName;
    switch (newGender) {
      case "Male":
        fName = [...nameList.maleFName];
        break;
      case "Female":
        fName = [...nameList.femaleFName];
        break;
      default:
        fName = [...nameList.neutralFName];
        break;
    }
    newName[0] = fName[getRandomNumber(fName.length - 1)];
    newName[1] = nameList.lName[getRandomNumber(nameList.lName.length - 1)];
    setName(newName);
  };

  const getRandomNumber = (max, min = 0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="App">
      <p id="titles">Your New NPC IS...</p>
      <ul>
        <li>
          Name: {name[0]} {name[1]}
        </li>
        <li>Gender: {gender}</li>
      </ul>
      <button onClick={() => generate()}>REGEN</button>
    </div>
  );
}

export default App;
