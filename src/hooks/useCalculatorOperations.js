import { useState } from "react";
import stringMath from "string-math";

export const useCalculatorOperations = () => {
  const [screenValue, setScreenValue] = useState("add your operation");

  const resetScreen = () => {
    if (screenValue.length === 0) return;
    setScreenValue("");
  };

  const delEndValue = () => {
    if (screenValue.length === 0) return;
    setScreenValue(screenValue.slice(0, screenValue.length - 1));
  };

  const printValue = (value) => {
    if (screenValue === "add your operation") return setScreenValue(value);
    setScreenValue((prevValue) => prevValue.toString().concat(value));
  };

  const printResultValue = () => {
    let clenedXString = screenValue.split("").map((value) => (value === "x" ? "*" : value)).join("")
    setScreenValue(stringMath(clenedXString).toString())
  };

  return {
    screenValue,
    printValue,
    resetScreen,
    delEndValue,
    printResultValue,
  };
};
