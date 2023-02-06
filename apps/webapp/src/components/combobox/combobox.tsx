import { useGetUsersByKeyword } from '../../use-users/use-users';
import { SearchInput } from './search';
import { useCombobox } from './use-combobox';
import { getId, getLabel, Option } from './utils';

interface ComboboxProps<T extends Option> {
  options?: readonly T[] | readonly string[];
  renderOption?: (props: any, option: T | string) => JSX.Element;
  renderEmptyState?: () => JSX.Element;
}

export function Combobox<T extends Option>({
  options = [],
  renderOption,
  renderEmptyState,
}: ComboboxProps<T>) {
  const { isVisible, onSelect, register, searchTerm } = useCombobox();

  const { users } = useGetUsersByKeyword(searchTerm);

  options = (users?.map((u) => ({ label: u.name, id: u.id })) as any) ?? [];
  renderOption = (props, option: T) => (
    <li className="cursor-pointer p-2 hover:bg-slate-400" {...props}>
      {option.label}
    </li>
  );

  return (
    <div className="combobox">
      <SearchInput name="combobox" id="combobox" {...register()} />
      {isVisible && (
        <div className="autocomplete bg-slate-300 rounded-sm p-5 w-full mx-auto">
          <ul>
            {options?.length === 0 && renderEmptyState?.()}

            {options?.map((option: string | T) =>
              renderOption?.(
                {
                  role: 'button',
                  key: getId(option),
                  onClick: () => onSelect(getLabel(option)),
                },
                option
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
