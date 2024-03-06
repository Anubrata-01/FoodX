import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartStore: [],
    cartQuantity: 0,
    cartValue: null,
  },
  reducers: {
    addItemToCart: (state, action) => {
      //    state.cartStore=[action.payload]
      // state.cartStore.push(...state.cartStore,action.payload)
      const existItem = state.cartStore.find(
        (item) => item?.id === action.payload?.id
      );
      if (existItem) {
        existItem.cartQuantity += 1;
      } else {
        state.cartStore.push({ ...action.payload, cartQuantity: 1 });

        // state.cartQuantity=1
      }
      state.cartQuantity += 1;
      state.cartValue += calculateItemValue(action.payload);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      console.log(quantity);
      // Find the existing item in the cart
      const existingItem = state.cartStore.find((item) => item?.id === itemId);

      if (existingItem) {
        // Calculate the difference between the new quantity and the existing quantity
        const quantityDifference = quantity - existingItem.cartQuantity;

        // Update the quantity of the existing item in the cart
        existingItem.cartQuantity = quantity;
        // Update the total cart quantity
        state.cartQuantity += quantityDifference;
        state.cartValue +=
          quantityDifference * calculateItemValue(existingItem);
        if (quantity < 1) {
          const itemIndex = state.cartStore.findIndex(
            (item) => item.id === itemId
          );
          console.log(itemIndex);
          if (itemIndex !== -1) {
            const removedItem = state.cartStore.splice(itemIndex, 1)[0];
            state.cartQuantity -= removedItem.cartQuantity;
            state.cartValue -=
              removedItem.cartQuantity * calculateItemValue(removedItem);
          }
        }
      }
    },
  },
});
const calculateItemValue = (item) => {
  return item?.price !== undefined ? item?.price : item?.defaultPrice;
};
export const { addItemToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
