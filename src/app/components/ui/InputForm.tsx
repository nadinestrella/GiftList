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
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 pb-3">
      <label className="lg:w-4/5">{title}</label>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        type={type}
        className="rounded-lg shadow-lg border-2 border-background3 p-1 pl-2  w-3/4 md:w-3/4 lg:w-3/5"
        required={required}
        maxLength={maxLength}
      ></input>
    </div>
  );
};
