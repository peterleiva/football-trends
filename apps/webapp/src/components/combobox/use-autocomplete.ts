import { Reducer, useCallback, useReducer } from 'react';

type State = {
  focused?: number | null;
  isVisible: boolean;
};

type ACTIONTYPE = { type: 'toggle' } | { type: 'visibility'; payload: boolean };

const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case 'toggle':
      return {
        isVisible: !state.isVisible,
        focused: state.isVisible ? state.focused : null,
      };

    case 'visibility':
      return {
        isVisible: action.payload,
        focused: action.payload ? state.focused : null,
      };

    default:
      throw new Error(`useComplete: unknown action [${action}]`);
  }
};

const initializer = (initialValue: State): State => {
  return {
    ...initialValue,
    focused: null,
    isVisible: false,
  };
};

export function useAutocomplete() {
  const [{ isVisible }, dispatch] = useReducer<
    Reducer<State, ACTIONTYPE>,
    State
  >(reducer, { focused: null, isVisible: false }, initializer);

  const setVisibility = useCallback(
    (visible: boolean) => {
      dispatch({ type: 'visibility', payload: visible });
    },
    [dispatch]
  );

  return {
    isVisible,
    toggle: () => dispatch({ type: 'toggle' }),
    setVisibility,
  };
}
