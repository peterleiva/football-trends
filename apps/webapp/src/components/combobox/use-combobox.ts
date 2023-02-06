import { useCallback, useEffect, useState } from 'react';
import { useDebounce, useTimeout } from 'usehooks-ts';
import { useAutocomplete } from './use-autocomplete';
import { useFormValue } from './use-form-value';

export const useCombobox = (delay?: number) => {
  const form = useFormValue();
  const { setFocus, setValue, value, ref } = form;

  const [selected, setSelected] = useState(false);
  const searchTerm = useDebounce(value, delay);
  const { isVisible, setVisibility } = useAutocomplete();

  const focusHandler = () => value.length > 0 && setVisibility(true);
  const blurHandler = () => {
    setTimeout(() => {
      setVisibility(false);
    });
  };

  useEffect(() => {
    setVisibility(!selected && value.length > 0);
  }, [selected, value, setVisibility]);

  const onSelect = useCallback(
    (value: string) => {
      setFocus();
      setValue(value);
      setVisibility(false);
      setSelected(true);
    },
    [setValue, setFocus, setVisibility]
  );

  useEffect(() => {
    const inputRef = ref?.current;

    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisibility(false);
      }

      if (e.key === 'ArrowDown') {
        setVisibility(true);
      }
    };

    inputRef?.addEventListener('keydown', listener);

    return () => {
      inputRef?.removeEventListener('keydown', listener);
    };
  }, [setVisibility, ref]);

  return {
    ...form,
    register: () => ({
      ...form.register(),
      autoComplete: 'off',
      onBlur: blurHandler,
      onFocus: focusHandler,
      onClick: () => {
        setSelected(false);
        setVisibility(value.length > 0 && true);
      },
    }),
    searchTerm,
    isVisible,
    setVisibility,
    onSelect,
    setSelected,
  };
};
