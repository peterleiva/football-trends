import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [open, setOpen] = useState(initialValue);

  const toggle = () => setOpen(!open);

  return {
    open,
    setOpen,
    toggle,
  };
}
