import {Products} from "./components/Products.tsx";
import {products} from "./mocks/products.json";
import Header from "./components/Header.tsx";
import {useFilters} from "./hooks/useFilters.tsx";
import {Cart} from "./components/Cart.tsx";
import {CartContextProvider} from "./context/cartCotext.tsx";

function App() {
    const {filterProducts} = useFilters()
    const filtredProducts = filterProducts(products)
    return (
        <CartContextProvider>
            <Header></Header>
            <Cart></Cart>
            <Products products={filtredProducts}></Products>
        </CartContextProvider>
    )
}

export default App
