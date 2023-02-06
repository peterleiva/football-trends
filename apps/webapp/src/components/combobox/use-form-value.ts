import { useRef, useState } from 'react';
import { RegisterOptions } from 'react-hook-form';

interface FormData {
  term: string;
}

export const useFormValue = () => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    ref?.current?.focus();
  };

  return {
    ref,
    register: (options: RegisterOptions<FormData> = {}) => ({
      ref,
      value,
      onChange: (e) => {
        setValue(e.target.value);
        options?.onChange?.(e);
      },
    }),
    value,
    setValue,
    setFocus,
  };
};
