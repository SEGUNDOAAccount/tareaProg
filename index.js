import logo from "../logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const apiFunction = () => {
    //function to get data from api
    axios
      .get("https://random-data-api.com/api/users/random_user")
      .then(function (response) {
        setName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
        setAvatar(response.data.avatar);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    apiFunction();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="cajita">
        <p>
          <img src={avatar} alt="avatar" />{" "}
        </p>
        <p>Nombre: {name}</p>
        <p>Apellido: {lastName}</p>
        <p>Email: {mail}</p>
      </div>
      </header>
    </div>
  );
}

export default App;
