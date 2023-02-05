import { useEffect, useRef, forwardRef, ForwardedRef } from 'react';

interface SearchInputProps extends React.ComponentPropsWithoutRef<'input'> {
  onExit?: () => void;
}

export const SearchInput = forwardRef(function SearchInput(
  { onExit, type = 'input', ...htmlProps }: SearchInputProps,
  inputRef: ForwardedRef<HTMLInputElement>
) {
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const inputHtml = inputRef.current;

  //   const listener = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') {
  //       // setShow(false);
  //       onExit?.();
  //       // setFocused(null);
  //     }

  //     if (e.key === 'ArrowDown') {
  //       // setShow(true);
  //       // setFocused((focused) =>
  //       //   users?.length > 0
  //       //     ? !focused
  //       //       ? 0
  //       //       : Math.min(focused + 1, users.length - 1)
  //       //     : null
  //       // );
  //     }

  //     // if (e.key === 'ArrowUp') {
  //     //   setFocused();
  //     // }
  //   };

  //   inputHtml?.addEventListener('keydown', listener);

  //   return () => {
  //     inputHtml?.removeEventListener('keydown', listener);
  //   };
  // }, [inputRef, onExit]);

  return (
    <input
      ref={inputRef}
      type={type}
      className="border-neutral-300 border-2 rounded-lg outline-none w-full inline-block p-5"
      name="combobox"
      id="combobox"
      {...htmlProps}
    />
  );
});
