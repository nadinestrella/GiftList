import React, { forwardRef } from 'react';

interface InputFormProps {
  title: string;
  placeholder: string;
  required?: boolean;
  maxLength?: number;
  type?: 'text' | 'number';
  name: string; // El nombre del campo que pasas a register
}

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ title, placeholder, type = 'text', ...props }, ref) => {
    return (
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <label className="lg:w-4/5">{title}</label>
        <input
          placeholder={placeholder}
          type={type}
          className="rounded-lg shadow-lg border-2 border-background3 p-1 pl-2  w-3/4 md:w-3/4 lg:w-3/5"
          {...props}
          ref={ref}
        ></input>
      </div>
    );
  }
);

InputForm.displayName = 'InputForm';
