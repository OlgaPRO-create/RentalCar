// "use client";
// import CarCard from "@/components/CarCard/CarCard";
// import { useCars } from "@/hooks/useCars";
// import Grid from "@/components/Grid/Grid";

// export default function CatalogPage() {
//     const query = useCars({});
//     const cars = query.data?.pages.flatMap((page) => page.cars) ?? [];

//     if (query.isPending) {
//         // return <p>Error occurred while fetching car data.</p>;
//          return <p>Loading...</p>;
//     }

//     return (
//         <div className='container'>
//             <Grid
//                 items={cars}
//                 getKey={(car) => car.id}
//                 renderItem={(car) => <CarCard car={car} />}
//             />
//             {query.hasNextPage && (
//                 <button
//                     onClick={() => query.fetchNextPage()}
//                     disabled={query.isFetchingNextPage}
//                 >
//                     {query.isFetchingNextPage ? "Loading more..." : "Load More"}
//                 </button>
//             )}
//         </div>
//     );
// }

"use client";

import CarCard from "@/components/CarCard/CarCard";
import { useCars } from "@/hooks/useCars";
import Grid from "@/components/Grid/Grid";

export default function CatalogPage() {
    const query = useCars({});

    const cars = query.data?.pages.flatMap((page) => page.cars) ?? [];

    if (query.isPending) {
        return <p>Loading...</p>;
    }

    if (query.isError) {
        return <p>Error occurred while fetching car data.</p>;
    }

    return (
        <div className='container'>
            <Grid
                items={cars}
                getKey={(car) => car.id}
                renderItem={(car) => <CarCard car={car} />}
            />

            {query.hasNextPage && (
                <button
                    onClick={() => query.fetchNextPage()}
                    disabled={query.isFetchingNextPage}
                >
                    {query.isFetchingNextPage ? "Loading more..." : "Load More"}
                </button>
            )}
        </div>
    );
}