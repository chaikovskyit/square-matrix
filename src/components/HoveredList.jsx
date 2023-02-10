import React from "react";

const HoveredList = ({ hoveredItems }) => {
  return (
    <div className="list">
      <ul>
        {hoveredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HoveredList;
