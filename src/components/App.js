import React, { useState } from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h2>
        <Tooltip text="This is a tooltip">Hover over me</Tooltip>
      </h2>
      <p>
        <Tooltip text="This is another tooltip">
          Hover over me to see another tooltip
        </Tooltip>
      </p>
    </div>
  );
};

export default App;
