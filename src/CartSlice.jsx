import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.name === itemToAdd.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload?.name ?? action.payload;
      state.items = state.items.filter((item) => item.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) itemToUpdate.quantity = amount;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
