import React, {createContext, useState} from "react";
import {Product, ProductsCartType} from "../types.tsx";


export const CartContext = createContext<{
    cart: ProductsCartType;
    setCart: React.Dispatch<React.SetStateAction<ProductsCartType>>;
    clearCart: () => void;
    addProduct: (product: Product) => void;
} | undefined>(undefined);

export function CartContextProvider({children}: {children : React.ReactNode }) {
    const [cart, setCart] = useState<ProductsCartType>([]);
    const clearCart = () => {

        setCart([])
    }

    const addProduct = (product: Product) => {

        const productInCart: number = cart.findIndex(item => item.product.id === product.id);

        if (productInCart >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            return setCart(newCart)
        }

        setCart((prevState) => [
            ...prevState,
            {product, quantity: 1}
        ]);
    }
    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addProduct }}>
            {children}
        </CartContext.Provider>
    )

}