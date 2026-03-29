import { useInfiniteQuery } from "@tanstack/react-query";
import { getCars } from "@/api/cars";
import type { GetCarsProps } from "@/types/car";
import { useFilterStore } from "@/store/filtersStore";
import { useDebounce } from "use-debounce";

export function useCars(params: GetCarsProps) {
    const brand = useFilterStore((state) => state.brand);
    const rentalPrice = useFilterStore((state) => state.rentalPrice);
    const minMileage = useFilterStore((state) => state.minMileage);
    const maxMileage = useFilterStore((state) => state.maxMileage);

    const [debouncedBrand] = useDebounce(brand, 300);
    const [debouncedRentalPrice] = useDebounce(rentalPrice, 300);
    const [debouncedMinMileage] = useDebounce(minMileage, 300);
    const [debouncedMaxMileage] = useDebounce(maxMileage, 300);

    return useInfiniteQuery({
        queryKey: [
            "cars",
            debouncedBrand,
            debouncedRentalPrice,
            debouncedMinMileage,
            debouncedMaxMileage,
            params.limit,
        ],
        queryFn: ({ pageParam = 1 }) =>
            getCars({
                brand: debouncedBrand,
                rentalPrice: debouncedRentalPrice,
                minMileage: debouncedMinMileage,
                maxMileage: debouncedMaxMileage,
                ...params,
                page: String(pageParam),
            }),
        getNextPageParam: (nextPage) => {
            if (nextPage.page < nextPage.totalPages) {
                return Number(nextPage.page) + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });
}