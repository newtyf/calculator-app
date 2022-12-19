import React from "react";
import PropTypes from "prop-types";

import { Keys } from "../Keys";
import "./Keypad.scss";

import { getKeys } from "../../helpers/getKeys";

export const Keypad = ({
  printValue,
  delEndValue,
  resetScreen,
  printResultValue,
}) => {
  const { keysValue } = getKeys({delEndValue, printResultValue, printValue, resetScreen});

  return (
    <div className="Keypad">
      {keysValue.map(({ id, value, keyFunction }) => (
        <Keys keyFunction={keyFunction} key={id} value={value} />
      ))}
    </div>
  );
};

Keypad.propTypes = {
  printValue: PropTypes.func.isRequired,
  delEndValue: PropTypes.func.isRequired,
  resetScreen: PropTypes.func.isRequired,
  printResultValue: PropTypes.func.isRequired,
};
