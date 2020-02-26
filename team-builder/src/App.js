import React, {useState} from 'react';
// import ReactDom from "react-dom";
// import logo from './logo.svg';
import ListForm from "./Components/ListForm";
import Lists from "./Components/Lists";
import './App.css';

function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Naomi Ruemmely-Torres",
      home: "Fayetteville, NC",
      email: "naomipriest@rocketmail.com",
      role: "Full Stack Web Developer"

    },
    {
      id: 2,
      name: "Sadie",
      home: "Fayetteville, NC",
      email: "SadieIsAGoodGirl@gmail.com",
      role: "World's sweetest pittie mix"
    },
    {
      id: 3,
      name: "Wrangler",
      home: "Fayetteville, NC",
      email: "WranglerIsTheBestBoi.com",
      role: "World's handsomest good boi"
    },
    {
      id: 4,
      name: "Hope",
      home: "Fayetteville, NC",
      email: "sassyiestbeagle.com",
      role: "World's spunkiest and sassyist little beagle."
    },
    {
      id: 5,
      name: "Daniel Ruemmely-Torres",
      home: "Fayetteville, NC",
      email: "CutestHusband@gmail.com",
      role: "Best cleaning helper"
    }
  ]);

  
  const addNewList = list => {
    const newList = {
      id: Date.now(),
      name: list.name,
      home: list.home,
      email: list.email,
      role: list.role
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="App">
      <h1>Member List</h1>
      <ListForm addNewList = {addNewList} />
      <Lists lists = {lists}/>
       
    </div>
  );
}



export default App;
