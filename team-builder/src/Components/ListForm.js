import React, { useState } from "react";

const ListForm = props => {
  // console.log("this is our props",props);
  const [list, setList] = useState({
    name: "",
    home: "",
    email: "",
    role: ""
  });
  // onChange handler to control inputs
  const handleChanges = event => {
    // setNote({ title: event.target.value });
    //to get both title and body, use this below
    setList({ ...list, [event.target.name]: event.target.value });
    console.log(list);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewList(list);
    setList({ name: "", home: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChanges}
        placeholder="Name"
        value={list.name}
      />
      <label htmlFor="home">Location</label>
      <input
        id="home"
        name="home"
        onChange={handleChanges}
        placeholder="Location"
        value={list.home}
      />
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        name="email"
        onChange={handleChanges}
        placeholder="Email"
        value={list.email}
      />
      <label htmlFor="role">Role</label>
      <input 
        id="role"
        name="role"
        onChange={handleChanges}
        placeholder="Role"
        value={list.role}
      />
      <button type="submit">Add To List</button>
    </form>
  );
};

export default ListForm;