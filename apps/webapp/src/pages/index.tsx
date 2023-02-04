import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useGetUsersByKeyword, User } from '../use-users/use-users';
import styles from './index.module.scss';

export function Index() {
  const [term, setTerm] = useState('');
  const searchTerm = useDebounce(term);
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { users, isLoading } = useGetUsersByKeyword(searchTerm);
  const [focused, setFocused] = useState<number | null>(null);

  const showAutocomplete = searchTerm.length > 0 && show;

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setShow(true);
    setTerm(e.target.value);
  };

  useEffect(() => {
    if (users?.length > 0 && !focused) {
      setFocused(0);
    }
  }, [users, focused]);

  const clickItem = (user: User) => {
    inputRef.current.focus();
    setShow(false);
    setTerm(user.name);
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShow(false);
        setFocused(null);
      }

      if (e.key === 'ArrowDown') {
        setShow(true);
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
  }, [setShow, users]);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container mt-10">
          <div className="combobox">
            <pre>{isLoading ? 'carregando...' : JSON.stringify(users)}</pre>
            <input
              ref={inputRef}
              className="border-neutral-300 border-2 rounded-sm outline-none w-full inline-block"
              type="input"
              name="combobox"
              id="combobox"
              value={term}
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
              onChange={changeHandler}
            />
            {showAutocomplete && (
              <div className="autocomplete bg-slate-300 rounded-sm p-5">
                <ul>
                  {users?.length === 0 && 'nenhum item encontrado'}
                  {users?.map((user, index) => (
                    <li
                      key={user.id}
                      className="mb-2 hover:bg-red-100 cursor-pointer"
                      onClick={() => clickItem(user)}
                    >
                      {user.name} ({focused === index && 'focused'})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
