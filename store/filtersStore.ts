import { createWithEqualityFn } from "zustand/traditional";
import { cleanFilters } from "../utils/cleanFilters";

export type Filters = {
    brand: string;
    rentalPrice: string;
    minMileage: string;
    maxMileage: string;
};
type FilterActions = {
    setFilters: (filters: Partial<Filters>) => void;
    resetFilters: () => void;
};

export type filterStoreProps = Filters & FilterActions;

const initialFilters: Filters = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
};

export const useFilterStore = createWithEqualityFn<filterStoreProps>()(
    (set) => ({
        ...initialFilters,
        setFilters: (filters: Partial<Filters>) => {
            const safeFilters = cleanFilters(filters);
            set(safeFilters);
        },
        resetFilters: () => set(initialFilters),
    }),
);
