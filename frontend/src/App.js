import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const respone = await axios.get("/names");
    setUserName(respone.data);
    console.log(respone);
  };

  return (
    <>
      <h1>My Front end</h1>
      <h2>My name is {userName}</h2>
    </>
  );
}

export default App;
