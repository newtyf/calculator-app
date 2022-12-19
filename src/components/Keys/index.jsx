import React from "react";
import "./Keys.scss"

export const Keys = ({value = 0, keyFunction}) => {
  return <button onClick={() => keyFunction(value)} className={`Keys value-${value}`}>{value}</button>;
};
