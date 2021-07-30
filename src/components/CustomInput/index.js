import React from "react";
import "./style.css";

function CustomInput(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="customInput">
      {props.title && <label className={props.value ? "moveLabelUp" : null}>
        {props.title}
      </label>}
      <input
        type={props.type}
        value={props.value}
        onChange={handleChange}
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : null}
      />
    </div>
  );
}

export default CustomInput;
