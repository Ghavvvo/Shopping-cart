
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export default function CartReducer(state, action)

{

    if (action.type  === 'ADD_TO_CART')
    {
        const existingProductIndex = state.findIndex((item) => item.product.id === action.payload.product.id)
        if (existingProductIndex !== -1)
        {
            const newState = [...state]
            state[existingProductIndex].quantity += 1;
            updateLocalStorage(newState)
            return newState
        }
        updateLocalStorage([...state, action.payload])
        return [...state, action.payload]
    }

    if (action.type === 'REMOVE_FROM_CART')
    {   const existingProductIndex = state.findIndex((item) => item.product.id === action.payload.id)
        updateLocalStorage(existingProductIndex)
        return existingProductIndex
    }

    if (action.type === 'CLEAR_CART')
    {
        updateLocalStorage([])
        return []
    }

    throw new Error(`Unhandled action type ${action.type} in cartReducer`)

}
