import React from "react";

const PasswordInput = ({ label, placeholder, value, setValue }) => {
  return (
    <div className="passwordInputs w-full flex flex-col space-y-2">
      <label for={label} className="font-semibold">
        {label}
      </label>
      <input type="text"
        className="p-2 border-gray-400 border-solid rounded placeholder-gray-500"
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}

export default PasswordInput;