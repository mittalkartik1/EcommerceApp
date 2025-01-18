import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartInterface, CartItem } from '../../constants/interfaces/CartInterface';

const initialCartState : CartInterface = { items: {}, totalAmount: 0, totalQuantity: 0 };

const calculateCartData = (state: CartInterface, payload: CartItem) => {
  let totalQuantity = state.totalQuantity;
  let totalAmount = state.totalAmount;

  if(payload.quantity <= 0) {
    totalQuantity--;
    totalAmount -= payload.item.price;
    const tempState = JSON.parse(JSON.stringify(state));
    delete tempState.items[payload.item.id];
    return { ...tempState, totalQuantity, totalAmount };
  } else {
    const quantityDifference = payload.quantity - (state.items[payload.item.id]?.quantity ?? 0);
    totalQuantity += quantityDifference;
    totalAmount += quantityDifference * payload.item.price;
    const updatedState = { ...state, items: { ...state.items, [payload.item.id] : { item: payload.item, quantity: payload.quantity }}, totalQuantity, totalAmount };
    return updatedState;
  }
};

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: initialCartState,
  reducers: {
    updateItemAction: (state, { payload }: PayloadAction<any>) => {
      return calculateCartData(state, payload);
    },
    clearCartAction: () => {
      return initialCartState;
    },
  },
});

export const { updateItemAction, clearCartAction } = cartSlice.actions;
export default cartSlice.reducer;
