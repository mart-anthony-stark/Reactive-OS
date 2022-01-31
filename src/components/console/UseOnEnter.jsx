import React from "react";

const commands = {
  help: `help
        \nCommands:\n
        \n[help]: 
        \n\tHelp
        \n[quit]:
        \n \tExits the terminal`,
  quit: "Are you sure you want to quit? ",
};

const UseOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);

  const onEnter = (value, key) => {
    if (key === "Enter") {
      setTimeout(() => {
        const objDiv = document.querySelector("#console-main");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 100);
      const newConsoleLine =
        commands[value] || "Command not recognized by the HTML OS";
      return updateConsoleOutput((consoleOutput) =>
        consoleOutput.concat(newConsoleLine)
      );
    }
  };

  return [consoleOutput, onEnter];
};

export default UseOnEnter;
