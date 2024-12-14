import {Products} from "./components/Products.tsx";
import {products} from "./mocks/products.json";
import {useState} from "react";
import {Product} from "./types.tsx";

function App() {
    const [filters, setFilters] = useState(
        {
            category: 'all',
            minPrice: 0
        }
    )

    const filterProducts = (products : Product[]) => {
        return products.filter((product : Product ) => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' || product.category === filters.category)
            )
        })
    }

    return (
        <div>
            <Products products={products}></Products>
        </div>
    )
}

export default App
