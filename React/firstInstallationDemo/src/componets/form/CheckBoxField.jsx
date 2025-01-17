import React from "react";

const CheckBoxField = ({ label, checked, onClick }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onClick={onClick} />
        {label}
      </label>
    </div>
  );
};

export default CheckBoxField;
