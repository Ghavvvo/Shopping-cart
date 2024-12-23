import {useContext} from "react";
import {Product} from "../types.tsx";
import {FilterContext} from "../context/filterContext.tsx";




export function useFilters ()  {
    const { filters, setFilters }  = useContext(FilterContext);



    const filterProducts = (products : Product[]) => {
        return products.filter((product : Product ) => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' || product.category === filters.category)
            )
        })
    }

    return ({filters,setFilters,filterProducts})
}