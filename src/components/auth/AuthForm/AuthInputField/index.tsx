import { authFormInputField } from "./AuthInputField.css";

type InputFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
};

export default function AuthInputField({
  type,
  name,
  placeholder,
  value,
  onChange,
  isRequired,
}: InputFieldProps) {
  return (
    <input
      type={type}
      className={authFormInputField}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={isRequired}
    />
  );
}
