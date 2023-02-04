import { type QueryKey, useQuery } from 'react-query';

export interface User {
  id: number;
  name: string;
}

export const getUsers =
  (id: string | number = '', filter = '') =>
  async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${
        id ?? ''
      }?${new URLSearchParams({
        filter,
      })}`
    );

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(await res.text());
    }
  };

function useQueryUsers<T>(
  key: QueryKey,
  opts: { id?: number; filter?: string } = {}
) {
  return useQuery<T>(key, getUsers(opts?.id, opts?.filter));
}

export function useGetUser(id: number) {
  const { data, ...rest } = useQueryUsers<User>(['user', id], { id });

  return {
    user: data,
    ...rest,
  };
}

export function useGetUsers() {
  const { data, ...rest } = useQueryUsers<User[]>('users');

  return {
    users: data,
    ...rest,
  };
}

export function useGetUsersByKeyword(filter?: string) {
  const { data, ...rest } = useQueryUsers<User[]>(['users', 'filter', filter], {
    filter,
  });

  return {
    users: data,
    ...rest,
  };
}
