import React from "react";

const IncrementDecrementButtons = ({ numItems, setNumItems, children }) => (
  <span>
    <button onClick={() => setNumItems(numItems + 1)}>Add {children}</button>
    <button onClick={() => setNumItems(Math.max(numItems - 1, 0))}>
      Subtract {children}
    </button>
  </span>
);

export default IncrementDecrementButtons;
