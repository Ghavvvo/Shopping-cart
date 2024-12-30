export default function CartReducer(state, action)

{
    if (action.type  === 'ADD_TO_CART')
    {
        const existingProductIndex = state.findIndex((item) => item.product.id === action.payload.product.id)
        if (existingProductIndex !== -1)
        {
            const newState = [...state]
            state[existingProductIndex].quantity += 1;
            return newState
        }

        return [...state, action.payload]
    }

    if (action.type === 'REMOVE_FROM_CART')
    {
        return state.filter((item) => item.product.id !== action.payload.id)
    }

    if (action.type === 'CLEAR_CART')
    {
        return []
    }

    throw new Error(`Unhandled action type ${action.type} in cartReducer`)

}