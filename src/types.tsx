export type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    category: string;
}

export type FilterContextType = {
    filters: { category: string, minPrice: number },
    setFilters: (filters: (prevState : { category: string, minPrice: number }  ) => { category: string, minPrice: number }) => void
};
