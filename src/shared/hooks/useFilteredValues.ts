import { useMemo } from 'react';

export const useFilteredValues = (values: string[], search: string) =>
  useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return values.filter((value) =>
      value.toLowerCase().includes(normalizedSearch)
    );
  }, [values, search]);
