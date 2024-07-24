interface InputFormProps {
  title: string;
  inputValue: string & number;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export const InputForm = ({
  title,
  inputValue,
  onChange,
  placeholder,
  required = false,

  maxLength,
}: InputFormProps) => {
  return (
    <>
      <label>{title}</label>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        type="text"
        className="rounded-full border-2 border-background3"
        required={required}
        maxLength={maxLength}
      ></input>
    </>
  );
};
