import { api } from "@/lib/api/api";
import type { CarsResponse, GetCarsProps } from "@/types/car";
import { cleanParams } from "@/utils/cleanParams";

export async function getCars({
    brand,
    rentalPrice,
    minMileage,
    maxMileage,
    limit,
    page,
}: GetCarsProps): Promise<CarsResponse> {
    const res = await api.get<CarsResponse>("/cars", {
        params: cleanParams({
            brand,
            rentalPrice,
            minMileage,
            maxMileage,
            limit,
            page,
        }),
    });
    return res.data;
}