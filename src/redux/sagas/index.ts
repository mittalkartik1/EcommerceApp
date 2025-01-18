import { all } from 'redux-saga/effects';
import productSaga from './productSaga';
import cartSaga from './cartSaga';

export default function* reduxSagas() {
    yield all([
        productSaga(),
        cartSaga(),
    ]);
}
