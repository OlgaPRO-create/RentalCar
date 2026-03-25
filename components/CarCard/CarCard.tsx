import css from "./CarCard.module.css";
import type { Car } from "@/types/car";
import Image from "next/image";

interface CarCardProps {
    car: Car;
    isFavorite?: boolean;
}

export default function CarCard({ car }: CarCardProps) {
    return (
        <div className={css.CarCard}>
            <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                width={500}
                height={486}
                className={css.image}
            />
            <h3>
                {car.brand} {car.model}, {car.year}
            </h3>
            <p>${car.rentalPrice}</p>
            <p>
                {car.address} | {car.rentalCompany}
            </p>
            <p>
                {car.type} | {car.mileage} km
            </p>
        </div>
    );
}