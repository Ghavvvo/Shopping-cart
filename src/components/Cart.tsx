import {CartIcon ,ClearCartIcon,RemoveFromCartIcon} from "./Icons.tsx";
import {useId} from "react";
import './Cart.css'


 export  function Cart(){
     const cartCheckBoxId = useId();
     return(
         <div>
             <label htmlFor={cartCheckBoxId} className='cart-button'>
                 <CartIcon></CartIcon>
             </label>
             <input id={cartCheckBoxId} type="checkbox" hidden/>
         <aside className={'cart'}>
             <ul>
                 <li>
                     <img src="" alt="iphone"/>
                     <div>
                         <strong>Iphone</strong>
                     </div>
                     <footer>
                         <small>
                             Qty:1
                         </small>
                         <button>+</button>
                     </footer>
                 </li>
             </ul>
             <button>
                <ClearCartIcon></ClearCartIcon>
             </button>
         </aside>
         </div>

     )
 }