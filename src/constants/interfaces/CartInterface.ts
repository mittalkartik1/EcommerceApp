import { ProductItem } from './Products';

export interface CartItem {
    item: ProductItem,
    quantity: number,
}

export interface CartItems {
    [key: string]: CartItem
}

export interface CartInterface {
    items: CartItems,
    totalQuantity: number,
    totalAmount: number,
}
