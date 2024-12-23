import React, {createContext, useState} from "react";
import {FilterContextType} from "../types.tsx";

interface Props {
    children: React.ReactNode

}



export const FilterContext = createContext<FilterContextType>();


export function FilterContextProvider({children} : Props)
{
    const [filters   , setFilters] = useState(
        {
            category: 'all',
            minPrice: 0
        }
    )

    return(
        <FilterContext.Provider value={{filters  , setFilters}}>
            {children}
        </FilterContext.Provider>

    )
}