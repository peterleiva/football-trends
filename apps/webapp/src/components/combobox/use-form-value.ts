import { RegisterOptions, useForm } from 'react-hook-form';

interface FormData {
  term: string;
}

export const useFormValue = () => {
  const { register, watch, setValue, setFocus } = useForm<FormData>({
    values: {
      term: '',
    },
  });

  const value = watch('term');

  return {
    register: (options: RegisterOptions<FormData> = {}) =>
      register('term', options),
    value,
    setValue: (value: string) => setValue('term', value),
    setFocus: () => setFocus('term'),
  };
};
