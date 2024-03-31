import {
  createFormInputField,
  createFormInputFieldWrapper,
} from "@/app/(PAGES)/(PROTECTED PAGES)/create/CreateRecipePage.css";
import { ChangeEvent, SelectHTMLAttributes } from "react";

type RecipeFormInputsProps = {
  label: string;
  type: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
};

export default function RecipeFormInputs({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  options,
  rows,
}: RecipeFormInputsProps) {
  return (
    <div className={createFormInputFieldWrapper}>
      <label>
        {required && <sup>*</sup>}
        {label}
      </label>
      {type === "select" ? (
        <select
          className={createFormInputField}
          value={value}
          onChange={
            onChange as SelectHTMLAttributes<HTMLSelectElement>["onChange"]
          }
          required={required}
        >
          <option value=""></option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className={createFormInputField}
          value={value}
          onChange={(e) => onChange(e as ChangeEvent<HTMLTextAreaElement>)}
          placeholder={placeholder}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          type={type}
          className={createFormInputField}
          value={value}
          onChange={(e) => onChange(e as ChangeEvent<HTMLInputElement>)}
          placeholder={placeholder}
          name={label.toLowerCase()}
          required={required}
        />
      )}
    </div>
  );
}
