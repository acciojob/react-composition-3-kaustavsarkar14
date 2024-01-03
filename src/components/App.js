import React, { useState } from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Wrapping the children with additional props and classes
  const wrappedChildren = React.Children.map(children, child => {
    return (
      <div 
        className={`tooltip ${child.props.className || ''}`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {child}
        {show && (
          <div style={{ backgroundColor: "red" }} className="tooltiptext">
            {text}
          </div>
        )}
      </div>
    );
  });

  return <>{wrappedChildren}</>;
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
