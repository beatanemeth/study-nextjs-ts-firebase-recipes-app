// SelectInput.js
import { createFormInputField } from "@/app/(PAGES)/(PROTECTED PAGES)/create/CreateRecipePage.css";
import React, { ChangeEvent } from "react";

type Option = {
  label: string;
  value: string;
};

type SearchBarSelectInputProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

export default function SearchBarSelectInput({
  label,
  value,
  onChange,
  options,
}: SearchBarSelectInputProps) {
  return (
    <div style={{ width: "22%" }}>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: ".3rem",
          alignSelf: "stretch",
        }}
      >
        {label}:
        <select
          className={createFormInputField}
          value={value}
          onChange={onChange}
          required
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
