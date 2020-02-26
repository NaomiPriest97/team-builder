import React, {useState} from 'react';
import ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';
import ListForm from "./Components/ListForm";
import Lists from "./Components/Lists";

function App() {
  const [list, setlist] = useState([
    {
      id: 1,
      name: "Naomi Ruemmely-Torres",
      home: "Fayetteville, NC"

    }
  ]);

  
  const addNewList = list => {
    const addNewList = {
      id: Date.now(),
      name: list.name,
      home: list.home
    };
    setList([...lists, newList]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ListForm addNewList = {addNewList} />
      <Lists lists = {lists}/>
       
    </div>
  );
}

export default App;
