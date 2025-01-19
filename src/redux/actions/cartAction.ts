import { ACTIONS } from '../../constants/enum/GeneralEnum';
import { CartItem } from '../../constants/interfaces/CartInterface';

export const updateCartItem = (item: CartItem) => ({
    type: ACTIONS.UPDATE_CART_ITEM,
    cartItem: item,
});

export const clearCart = () => ({
    type: ACTIONS.CLEAR_CART,
});
