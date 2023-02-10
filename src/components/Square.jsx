import React, { useMemo } from "react";
import "../App.scss";

const Square = ({ indexT, indexR }) => {
  const { rowNum, colNum } = useMemo(() => {
    return {
      rowNum: indexR + 1,
      colNum: indexT + 1,
    };
  }, [indexT, indexR]);

  return (
    <div
      className="square"
      key={indexT}
      id={`row ${rowNum} col ${colNum}`}
    ></div>
  );
};

export default Square;
