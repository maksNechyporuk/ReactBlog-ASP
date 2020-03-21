import React from "react";
import classes from "./Input.css";

export default function Input(props) {
  const inputType = propst.type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <span>{props.errorMessage}</span>
    </div>
  );
}
