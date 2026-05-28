import { useMemo, useState } from 'react';
import monuments from '../data/monuments.json';

const filters = Array.from(new Set(monuments.flatMap((m) => m.tags.map((t) => t))).values());

export const useMonuments = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const data = useMemo(() => {
    if (activeFilters.length === 0) return monuments;
    return monuments.filter((m) => m.tags.some((t) => activeFilters.includes(t)));
  }, [activeFilters]);

  const addToActiveFilters = (item) => {
    setActiveFilters((prev) => [...prev, item]);
  };

  const removeFromActiveFilters = (item) => {
    setActiveFilters((prev) => prev.filter((i) => i !== item));
  };

  return {
    monuments: data,
    filters: filters,
    addToFilters: addToActiveFilters,
    removeFromFilters: removeFromActiveFilters,
  };
};
