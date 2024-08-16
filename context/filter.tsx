"use client"

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface FilterContextType {
  selectedFilter: string | null;
  handleSelectFilter: (value: string | null) => void;
}

const FilterContext = createContext<FilterContextType>({
  selectedFilter: null,
  handleSelectFilter: () => {},
});

function FilterProvider({ children }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleSelectFilter = (value: string | null) => {
    setSelectedFilter(value);
  };

  const videoContextValue: FilterContextType = {
    selectedFilter,
    handleSelectFilter,
  };

  return (
    <FilterContext.Provider value={videoContextValue}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilterData = () => useContext(FilterContext);

export { FilterProvider, useFilterData };
