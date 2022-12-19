import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./SwtichTheme.scss";

export const SwtichTheme = ({ switchTheme }) => {
  useEffect(() => {
    document.getElementById("dark").setAttribute("checked", "true");
  }, []);

  return (
    <div className="SwtichTheme">
      <p>theme</p>
      <div className="SwtichTheme-box">
        <div className="labelBox">
          <label htmlFor="dark">1</label>
          <label htmlFor="light">2</label>
          <label htmlFor="neon">3</label>
        </div>
        <div className="inputBox">
          <input
            type="radio"
            name="selectTheme"
            id="dark"
            onClick={() => switchTheme("dark")}
          />
          <input
            type="radio"
            name="selectTheme"
            id="light"
            onClick={() => switchTheme("light")}
          />
          <input
            type="radio"
            name="selectTheme"
            id="neon"
            onClick={() => switchTheme("neon")}
          />
        </div>
      </div>
    </div>
  );
};

SwtichTheme.propTypes = {};
