import css from "./Grіd.module.css";

interface GridProps<T> {
    items: T[];
    getKey: (item: T) => string | number;
    renderItem: (item: T) => React.ReactNode;
}

export default function Grid<T>({ items, getKey, renderItem }: GridProps<T>) {
    return (
        <ul className={css.grid}>
            {items.map((item) => (
                <li key={getKey(item)}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}
