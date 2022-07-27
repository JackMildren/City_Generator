import "./App.css";
import { useState, useEffect } from "react";

import nameList from "./data/humanNames.json";
import occupationList from "./data/occupations.json";

function App() {
  const genderList = ["Male", "Female", "Other"];
  const [fName, setFName] = useState("test_fName");
  const [lName, setLName] = useState("test_lName");
  const [gender, setGender] = useState("test_gender");
  const [occupation, setOccupation] = useState("test_occupation");

  useEffect(() => {
    generate();
  }, []);

  const generate = () => {
    const newGender = generateAttribute(setGender, genderList);

    let fNameList;
    switch (newGender) {
      case "Male":
        fNameList = [...nameList.maleFName];
        break;
      case "Female":
        fNameList = [...nameList.femaleFName];
        break;
      default:
        fNameList = [...nameList.neutralFName];
        break;
    }
    generateAttribute(setFName, fNameList);
    generateAttribute(setLName, nameList.lName);
    generateAttribute(setOccupation, occupationList);
  };

  const generateAttribute = (attributeSetter, attributeList) => {
    const newAttribute =
      attributeList[getRandomNumber(attributeList.length - 1)];
    attributeSetter(newAttribute);
    return newAttribute;
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
          Name: {fName} {lName}
        </li>
        <li>Gender: {gender}</li>
        <li>Occupation: {occupation}</li>
      </ul>
      <button onClick={() => generate()}>REGEN</button>
    </div>
  );
}

export default App;
