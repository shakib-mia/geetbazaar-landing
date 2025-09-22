"use client";

import React, { useState } from "react";

const InputField = ({ label, type = "text", name, as = "input", rows = 4 }) => {
  const [value, setValue] = useState("");

  const commonClasses = `
    peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2
    text-gray-900 placeholder-transparent focus:border-purple-600 
    focus:outline-none dark:text-gray-100 dark:border-gray-600 
    dark:focus:border-purple-400 resize-none
  `;

  return (
    <div className="relative w-full">
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={commonClasses}
          placeholder={label}
          //   resize="none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={commonClasses}
          placeholder={label}
        />
      )}

      <label
        className={`absolute left-0 top-0 text-gray-500 text-sm transition-all
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:text-base peer-focus:top-0 
          peer-focus:text-sm peer-focus:text-purple-600 
          dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 
          dark:peer-focus:text-purple-400 pointer-events-none`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
