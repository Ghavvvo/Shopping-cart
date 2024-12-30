import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.tsx";
import { UseCart } from "../hooks/useCart.tsx";
import { Product } from "../types.tsx";

interface Props {
    products: Product[];
}

export function Products({ products }: Props) {
    const { state, addProduct, deleteProduct } = UseCart();

    const checkProductInCart = (product: Product) => {
        return state.some(item => item.product.id === product.id);
    };

    return (
        <main className={'products'}>
            <ul>
                {products.map((product: Product) => {
                    const isProductInCart = checkProductInCart(product);

                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>${product.price}</strong>
                            </div>
                            <div>
                                <strong>{product.id}</strong>
                            </div>
                            <div>
                                <button onClick={() => {
                                    if (isProductInCart) {
                                        deleteProduct(product);
                                    } else {
                                        addProduct(product);
                                    }
                                }}>
                                    {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}