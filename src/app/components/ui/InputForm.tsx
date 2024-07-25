interface InputFormProps {
  title: string;
  inputValue: string | number;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  type?: 'text' | 'number';
}

export const InputForm = ({
  title,
  inputValue,
  onChange,
  placeholder,
  required = false,
  type = 'text',
  maxLength,
}: InputFormProps) => {
  return (
    <>
      <label>{title}</label>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        type={type}
        className="rounded-full border-2 border-background3 p-1 pl-2"
        required={required}
        maxLength={maxLength}
      ></input>
    </>
  );
};
