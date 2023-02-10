import React, { useCallback, useEffect, useState } from "react";
import ModeService from "./API/ModeService";
import Select from "./components/UI/Select";
import Matrix from "./components/Matrix";
import HoveredList from "./components/HoveredList";
import "./App.scss";

const App = () => {
  const [mode, setMode] = useState(0);
  const [modes, setModes] = useState([]);
  const [matrix, setMatrix] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [hoveredItems, setHoveredItems] = useState([]);

  const matrixGeterator = useCallback((numberOfFields) => {
    const newMatrix = Array.from({ length: numberOfFields }, (_) =>
      Array.from({ length: numberOfFields })
    );
    return setMatrix(newMatrix);
  }, []);

  const onStartHandler = useCallback(
    (mode) => {
      setMode(mode);
      matrixGeterator(mode);
      setHoveredItems([]);
      setDisabled(true);
    },
    [matrixGeterator]
  );

  const onMouseHandler = useCallback(
    (e) => {
      if (e.target.className.includes("hovered")) {
        e.target.className = e.target.className.split(" ")[0];
        setHoveredItems([
          ...hoveredItems.filter((item) => item !== e.target.id),
        ]);
      } else if (e.target.id) {
        e.target.className = `${e.target.className} hovered`;
        setHoveredItems((prev) => [...prev, e.target.id]);
      }
    },
    [hoveredItems]
  );

  const onSelectChangeHandler = useCallback((value) => {
    setMatrix([]);
    setMode(Number(value));
    setHoveredItems([]);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await ModeService.getAll();
        setModes(response);
      } catch (e) {
        return;
      }
    })();
  }, []);

  useEffect(() => {
    setDisabled(false);
  }, [mode]);

  return (
    <div className="app">
      <div className="container">
        <div className="matrixContainer" onMouseOver={onMouseHandler}>
          <div className="modeContainer">
            <Select
              defaultValue="Pick mode"
              options={modes}
              value={mode}
              onChange={(value) => onSelectChangeHandler(value)}
            />
            <button disabled={disabled} onClick={() => onStartHandler(mode)}>
              START
            </button>
          </div>
          <Matrix matrix={matrix} />
        </div>
        <div className="hoversContainer">
          <h1>Hover squares</h1>
          {!!hoveredItems.length ? (
            <HoveredList hoveredItems={hoveredItems} />
          ) : (
            <h3>There are no given squares...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
