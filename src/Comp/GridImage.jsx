import React from "react";

const GridImage = (props) => {
  const { image } = props;

  return (
    <tr>
      <td>
        <img src={image.first} width="300" height="300"></img>
      </td>

      {image.second && (
        <td>
          <img src={image.second} width="300" height="300"></img>
        </td>
      )}
    </tr>
  );
};

export default GridImage;
