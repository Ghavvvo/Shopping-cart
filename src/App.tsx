import {Products} from "./components/Products.tsx";
import {products} from "./mocks/products.json";
function App() {
    return (
        <div >
           <Products products={products}></Products>
        </div>
    )
}

export default App
