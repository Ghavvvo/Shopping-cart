import {Products} from "./components/Products.tsx";
import {products} from "./mocks/products.json";

import Header from "./components/Header.tsx";
import {useFilters} from "./hooks/useFilters.tsx";
import {Cart} from "./components/Cart.tsx";

function App() {
    const {filterProducts} = useFilters()
    const filtredProducts = filterProducts(products)
    return (
        <div>
            <Header></Header>
            <Cart></Cart>
            <Products products={filtredProducts}></Products>
        </div>
    )
}

export default App
