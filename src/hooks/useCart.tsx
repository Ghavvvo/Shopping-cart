import {useContext} from "react";
import {CartContext} from "../context/cartCotext.tsx";

export const UseCart = () =>
{
    const cart  = useContext(CartContext)
    if(cart === undefined)
    {
        throw new Error('useCart must be used within a CartProvider')
    }

    return cart

}