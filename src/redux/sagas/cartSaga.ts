import { put, takeLatest } from 'redux-saga/effects';
import { clearCartAction, updateItemAction } from '../reducers/cartReducer';
import { ACTIONS } from '../../constants/enum/GeneralEnum';

function* updateCartItem({ cartItem: { item, quantity } } : any) : any {
    yield put(updateItemAction({ item, quantity }));
}
function* clearCart() : any {
    yield put(clearCartAction());
}


export default function* cartSaga() {
    yield takeLatest(ACTIONS.UPDATE_CART_ITEM, updateCartItem);
    yield takeLatest(ACTIONS.CLEAR_CART, clearCart);
}
