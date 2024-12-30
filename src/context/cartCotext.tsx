import React, {createContext, useReducer} from "react";
import {Product, ProductsCartType} from "../types.tsx";
import CartReducer from "../reducers/cartReducer.tsx";


export const CartContext = createContext<{
    state : ProductsCartType;
    clearCart: () => void;
    addProduct: (product: Product) => void;
    deleteProduct : (product: Product) => void;
} | undefined>(undefined);

export function CartContextProvider({children}: {children : React.ReactNode }) {

    const [state,dispatch]= useReducer(CartReducer, [])


    const clearCart = () => {

       dispatch({type: 'CLEAR_CART'})
    }

    const deleteProduct = (product:Product) =>
    {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: product.id}})
    }

    const addProduct = (product: Product) => {

        dispatch({type: 'ADD_TO_CART', payload: {product: product, quantity: 1}})
    }
    return (
        <CartContext.Provider value={{ state , clearCart, addProduct ,deleteProduct }}>
            {children}
        </CartContext.Provider>
    )

}