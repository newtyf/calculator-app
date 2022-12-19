export const getKeys = ({
  printValue,
  delEndValue,
  resetScreen,
  printResultValue,
}) => {
  return {
    keysValue: [
      { id: 1, value: 1, keyFunction: printValue },
      { id: 2, value: 2, keyFunction: printValue },
      { id: 3, value: 3, keyFunction: printValue },
      { id: 16, value: "DEL", keyFunction: delEndValue },
      { id: 4, value: 4, keyFunction: printValue },
      { id: 5, value: 5, keyFunction: printValue },
      { id: 6, value: 6, keyFunction: printValue },
      { id: 14, value: "+", keyFunction: printValue },
      { id: 7, value: 7, keyFunction: printValue },
      { id: 8, value: 8, keyFunction: printValue },
      { id: 9, value: 9, keyFunction: printValue },
      { id: 13, value: "-", keyFunction: printValue },
      { id: 10, value: ".", keyFunction: printValue },
      { id: 11, value: 0, keyFunction: printValue },
      { id: 12, value: "/", keyFunction: printValue },
      { id: 15, value: "x", keyFunction: printValue },
      { id: 17, value: "RESET", keyFunction: resetScreen },
      { id: 18, value: "=", keyFunction: printResultValue },
    ],
  };
};
