import React, { useState } from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <h2 className="tooltip">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && (
        <div style={{ backgroundColor: "red" }} className="tooltiptext">
          {text}
        </div>
      )}
    </h2>
  );
};

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
