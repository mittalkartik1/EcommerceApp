import { CartItem } from '../../constants/interfaces/CartInterface';

export const updateCartItem = (item: CartItem) => ({
    type: 'updateCartItem',
    cartItem: item,
});

export const clearCart = () => ({
    type: 'clearCart',
});
