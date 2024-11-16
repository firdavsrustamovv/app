import React from "react";

function Input({ label, margin, type, state, setState }) {
  return (
    <div className={`form-floating ${margin}`}>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
