import React from "react";
import { removeTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

const UseOnEnter = () => {
  const dispatch = useDispatch();
  const [consoleOutput, updateConsoleOutput] = React.useState([]);

  const commands = {
    help: () => {
      return `help
     \nCommands:\n
     \n[help]: 
     \n\tHelp
     \n[quit]:
     \n \tExits the terminal`;
    },
    quit: () => {
      dispatch(removeTask("console"));
    },
    open: (input) => {
      return input.split(/\s+/g).shift();
    },
  };

  const onEnter = (value, key) => {
    if (key === "Enter") {
      setTimeout(() => {
        const objDiv = document.querySelector("#console-main");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 100);

      let newConsoleLine = `'${
        value.split(/\s/g)[0]
      }' is not recognized as internal or external command`;

      if (!!commands[value]) {
        newConsoleLine = commands[value](value);
      }

      return updateConsoleOutput((consoleOutput) =>
        consoleOutput.concat(newConsoleLine)
      );
    }
  };

  return [consoleOutput, onEnter];
};

export default UseOnEnter;
