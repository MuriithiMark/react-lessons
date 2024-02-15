import { createSelector } from "@reduxjs/toolkit";

/**
 * 
 * @param {*} state 
 * @returns {{items: object[], isOpen: boolean}}
 */
const cartSelector = (state) => state;

const cartTotalPriceSelector = createSelector([cartSelector], (cart) => {
    let totalPrice = 0;
    cart.items.forEach((item) => totalPrice += (item.price * item.quantity))
    return totalPrice;
})

export default cartTotalPriceSelector;