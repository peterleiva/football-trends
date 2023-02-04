import { useQuery } from 'react-query';

export const getUser = (id: number) => async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(await res.text());
  }
};

export function useUsers() {
  const { data, isLoading, isError } = useQuery('users', getUser(1));

  return {
    user: data,
    isLoading,
    isError,
  };
}

export default useUsers;
