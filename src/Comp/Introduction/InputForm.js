import React from "react";

const InputForm = (props) => {
  const { inputTitle, type, value, name, onChange } = props;

  return (
    <tr>
      <td width="50%">{inputTitle}</td>
      <td>
        <input
          type={type}
          size="8"
          value={value}
          name={name}
          onChange={onChange}
        />
      </td>
    </tr>
  );
};

export default InputForm;
