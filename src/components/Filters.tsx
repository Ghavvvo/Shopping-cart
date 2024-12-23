import './Filters.css'
import { useState } from "react";
import { useFilters } from "../hooks/useFilters.tsx";



export default function Filters() {
    const { setFilters } = useFilters();
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
        setFilters((prevState) => ({
            ...prevState,
            minPrice: Number(event.target.value)
        }));
    };

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters((prevState) => ({
            ...prevState,
            category: event.target.value
        }));
    };

    return (
        <div>
            <div>
                <label htmlFor="price">Price</label>
                <input onChange={handleChangeMinPrice} min="0" max="1000" type="range" id="price" />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="groceries">Groceries</option>
                    <option value="fragrances">Fragrances</option>
                </select>
            </div>
        </div>
    );
}