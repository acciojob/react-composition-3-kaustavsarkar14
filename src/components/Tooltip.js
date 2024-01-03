import React, { useState } from "react";

const Tooltip = ({text, children}) => {
  const [show, setShow] = useState(false);
  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}

      {show && (
        <div style={{ backgroundColor: "red" }} className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
