import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
    items: [],
    isOpen: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {

        addToCart: (state, action) => {
            const productAlreadyInCart = state.items.find((product) => product.id === action.payload.id);

            if (productAlreadyInCart) {
                const newState = {
                    ...state,
                    items: state.items.map((product) => {
                        if (product.id === productAlreadyInCart.id) {
                            return {
                                ...product,
                                quantity: product.quantity + 1
                            }
                        }
                        return product
                    })
                }
                return newState;
            }
            return {
                ...state,
                items: [
                    ...state.items, { ...(action.payload), quantity: 1 }
                ]
            }
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                items: state.items.filter((product) => product.id != action.payload.id)
            }
        },

        toggleCart: (state) => {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        },

        incrementProduct: (state, action) => {
            const newItems = state.items.map((product) =>
                (product.id === action.payload.id) ? ({
                    ...product,
                    quantity: product.quantity + 1
                }) :
                    product
            );

            return {
                ...state,
                items: newItems
            }
        },

        decrementProduct: (state, action) => {
            const newItems = state.items.map((product) =>
                (product.id === action.payload.id && product.quantity > 1) ? ({
                    ...product,
                    quantity: product.quantity - 1
                }) :
                    product
            );
            return {
                ...state,
                items: newItems
            }
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    toggleCart,
    decrementProduct,
    incrementProduct
} = cartSlice.actions;

export default cartSlice.reducer;