import {CartIcon, ClearCartIcon} from "./Icons.tsx";
import {useId} from "react";
import './Cart.css'
import {UseCart} from "../hooks/useCart.tsx";
import {Product} from "../types.tsx";
interface Props {
    product: Product;
    quantity: number;
    addProduct: () => void;

}
function CartItem({product, quantity , addProduct}: Props) {
  return (
      <li>
          <img src={product.thumbnail} alt={product.title}/>
          <div>
              <strong>{product.title}</strong>
          </div>
          <footer>
              <small>
                  Qty:{quantity}
              </small>
              <button onClick={addProduct}>+</button>
          </footer>
      </li>
  )
}

export function Cart() {
    const cartCheckBoxId = useId();
    const {clearCart, state , addProduct} = UseCart();
    return (
        <div>
            <label htmlFor={cartCheckBoxId} className='cart-button'>
                <CartIcon></CartIcon>
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden/>
            <aside className={'cart'}>
                <ul>
                    {state.map((product => {
                        return (<CartItem addProduct={() => addProduct(product.product)} product={product.product} quantity={product.quantity} />)
                    }))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon></ClearCartIcon>
                </button>
            </aside>
        </div>

    )
}