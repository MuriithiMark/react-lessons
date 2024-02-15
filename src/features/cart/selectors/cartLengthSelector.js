import { createSelector } from "@reduxjs/toolkit";

/**
 * 
 * @param {*} state 
 * @returns {{items: object[], isOpen: boolean}}
 */
const cartSelector = state => state;

const cartLengthSelector = createSelector([cartSelector], (cart) => cart.items.length)

export default cartLengthSelector;