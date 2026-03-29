import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFilterStore } from "@/store/filtersStore";

export function useInitFiltersFromUrl() {
    const setFilters = useFilterStore((state) => state.setFilters);
    const searchParams = useSearchParams();
    const brand = searchParams.get("brand");
    const rentalPrice = searchParams.get("rentalPrice");
    const minMileage = searchParams.get("minMileage");
    const maxMileage = searchParams.get("maxMileage");

    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;
        setFilters({
            brand: brand ?? undefined,
            rentalPrice: rentalPrice ?? undefined,
            minMileage: minMileage ?? undefined,
            maxMileage: maxMileage ?? undefined,
        });
        isInitialized.current = true;
    }, [brand, maxMileage, minMileage, rentalPrice, setFilters]);
}