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
      home: "Fayetteville, NC"

    },
    {
      id: 2,
      name: "Sadie",
      home: "Fayetteville, NC"
    },
    {
      id: 3,
      name: "Wrangler",
      home: "Fayetteville, NC"
    },
    {
      id: 4,
      name: "Hope",
      home: "Fayetteville, NC"
    },
    {
      id: 5,
      name: "Daniel Ruemmely-Torres",
      home: "Fayetteville, NC"
    }
  ]);

  
  const addNewList = list => {
    const newList = {
      id: Date.now(),
      name: list.name,
      home: list.home
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="App">
     
      <ListForm addNewList = {addNewList} />
      <Lists lists = {lists}/>
       
    </div>
  );
}

export default App;
