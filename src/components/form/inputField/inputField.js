import React, {useState} from "react";
import "./inputField.scss";

const InputField = ({label, type, value, onChange}) => {
    return(
    <label className="input-wrapper">
        <span>{label}</span>
        <input
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </label>
)}

export default InputField

