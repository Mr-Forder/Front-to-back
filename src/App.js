import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import { Link, Route, Switch } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Edit from "./components/Edit";
import data from "./dummyData/data";

const App = () => {
  const [udToggle, setUdToggle] = useState(true);
  const [data, setData] = useState([]);
  //FETCH NOTE DATA///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/6a062e2c-62e9-4e25-b45a-372711a3827e?_format=index"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
      console.log("changed");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, [udToggle]);

  return (
    <div className="container">
      <Header />
      <List data={data} />
      <Add toggle={udToggle} setToggle={setUdToggle} />
    </div>
  );
};

export default App;
