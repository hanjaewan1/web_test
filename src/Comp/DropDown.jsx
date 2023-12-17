import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ DropDownMap }) => {
  return (
    <div style={{ position: "absolute" }}>
      <ul style={{ listStyleType: "none" }}>
        {Object.keys(DropDownMap).map((DropDownKey) => {
          console.log(DropDownKey);
          return (
            <li>
              <Link to={DropDownMap[DropDownKey]}>{DropDownKey}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
