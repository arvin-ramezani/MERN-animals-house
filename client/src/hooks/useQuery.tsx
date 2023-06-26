import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const getQuery = (queryKey: string) => {
    return searchParams.get(queryKey);
  };

  return { getQuery };
}

export default useQuery;
