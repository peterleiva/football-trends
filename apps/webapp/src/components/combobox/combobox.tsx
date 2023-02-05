import { Console, log } from 'console';
import {
  ChangeEventHandler,
  Reducer,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useDebounce } from 'usehooks-ts';
import { useGetUsersByKeyword, User } from '../../use-users/use-users';
import { SearchInput } from './search';
import { useFormValue } from './use-form-value';

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

export function Combobox() {
  const { register, value: term, setValue, setFocus } = useFormValue();
  const searchTerm = useDebounce(term);
  const { isVisible, setVisibility } = useAutocomplete();
  const { users, isLoading } = useGetUsersByKeyword(searchTerm);

  const [focused, setFocused] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const res = register();

  const blurHandler = () => {
    console.log('vlur1');
    // setVisibility(false);
  };
  const focusHandler = () => term.length > 0 && setVisibility(true);

  const clickHandler = useCallback(
    (user: User) => {
      setFocus();
      setValue(user.name);
      setVisibility(true);
    },
    [setValue, setFocus, setVisibility]
  );

  useEffect(() => {
    setVisibility(searchTerm.length > 0);
  }, [setVisibility, searchTerm]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('INPUTREF', inputRef);

        setVisibility(false);
      }

      if (e.key === 'ArrowDown') {
        setVisibility(true);
        setFocused((focused) =>
          users?.length > 0
            ? !focused
              ? 0
              : Math.min(focused + 1, users.length - 1)
            : null
        );
      }

      // if (e.key === 'ArrowUp') {
      //   setFocused();
      // }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [users, setVisibility]);

  return (
    <div className="combobox">
      <SearchInput
        ref={inputRef}
        name="combobox"
        id="combobox"
        onFocus={focusHandler}
        {...register({ onBlur: blurHandler })}
      />
      {isVisible && (
        <div className="autocomplete bg-slate-300 rounded-sm p-5 w-full mx-auto">
          <ul>
            {users?.length === 0 && 'nenhum item encontrado'}

            {users?.map((user, index) => (
              <li
                role="button"
                key={user.id}
                onClick={() => clickHandler(user)}
                className="mb-2 hover:bg-red-300 cursor-pointer p-2"
              >
                {user.name} ({focused === index && 'focused'})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
