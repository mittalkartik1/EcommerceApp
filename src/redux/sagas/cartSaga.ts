import { put, takeLatest } from 'redux-saga/effects';
import { clearCartAction, updateItemAction } from '../reducers/cartReducer';

function* updateCartItem({ cartItem: { item, quantity } } : any) : any {
    yield put(updateItemAction({ item, quantity }));
}
function* clearCart() : any {
    yield put(clearCartAction());
}


export default function* cartSaga() {
    yield takeLatest('updateCartItem', updateCartItem);
    yield takeLatest('clearCart', clearCart);
}
