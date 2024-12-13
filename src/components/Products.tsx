import './Products.css'
import {AddToCartIcon} from "./Icons.tsx";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

interface Props
{
    products: Product[]
}
export function Products({products}: Props){
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
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
        </main>
    )
}