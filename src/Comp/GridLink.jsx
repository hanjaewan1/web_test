import React from "react";
import { Link } from "react-router-dom";

const GridLink = (props) => {
  const { path, name } = props;

  return (
    <tr>
      <td className="proj">
        <Link to={path.first}>{name.first}</Link>
      </td>
      {path.second && name.second && (
        <td className="proj">
          <Link to={path.second}>{name.second}</Link>
        </td>
      )}
    </tr>
  );
};

export default GridLink;
