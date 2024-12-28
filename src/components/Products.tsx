import './Products.css'
import {AddToCartIcon} from "./Icons.tsx";
import {UseCart} from "../hooks/useCart.tsx";
import {Product} from "../types.tsx";



interface Props
{
    products: Product[]
}
export function Products({products}: Props){
    const {addProduct} = UseCart()

    return (
        <main className={'products'}>
            <ul>
                {products.map((product : Product) =>(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title}/>
                        <div>
                            <strong>${product.price}</strong>
                        </div>
                        <div>
                            <strong>{product.id}</strong>
                        </div>
                        <div>
                            <button onClick={() => addProduct(product)}>
                                <AddToCartIcon />
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
        </main>
    )
}