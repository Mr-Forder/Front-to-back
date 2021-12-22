import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import data from "./dummyData/data";

const App = () => {
  return (
    <div className="container">
      <Header />
      <List data={data} />
    </div>
  );
};

export default App;
