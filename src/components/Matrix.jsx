import React from "react";
import Square from "./Square";

const Matrix = ({ matrix }) => {
  return (
    <div className="matrix">
      {matrix.map((lines, indexR) => {
        return (
          <div className="matrixRow" key={indexR}>
            {lines.map((_, indexT) => (
              <Square indexR={indexR} indexT={indexT} key={indexT} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Matrix;
