import React from "react";
import Prompt from "./Prompt";

const MapConsoleOutput = ({ consoleOutput }) => {
  return (
    <div className="console-output">
      {consoleOutput.map((item, index) => (
        <div key={index}>
          <Prompt />
          <pre>{item}</pre>
        </div>
      ))}
    </div>
  );
};

export default MapConsoleOutput;
