import React from "react";
import { useCalculatorOperations } from "./hooks/useCalculatorOperations";
import { useCalculatorDesign } from "./hooks/useCalculatorDesign";

import { ScreenPad } from "./components/ScreenPad";
import { Keypad } from "./components/Keypad";
import { SwtichTheme } from "./components/SwtichTheme";

export const CalculatorApp = () => {
  const { switchTheme } = useCalculatorDesign();
  const { screenValue, delEndValue, printValue, resetScreen, printResultValue } = useCalculatorOperations();

  return (
    <div className="CalculatorApp">
      <header>
        <h1>calc</h1>
        <SwtichTheme switchTheme={switchTheme}/>
      </header>
      <ScreenPad input={screenValue} />
      <Keypad
        printValue={printValue}
        delEndValue={delEndValue}
        resetScreen={resetScreen}
        printResultValue={printResultValue}
      />
    </div>
  );
};
