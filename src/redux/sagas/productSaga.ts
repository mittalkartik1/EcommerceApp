import { getCategoryProductsAction, getFeaturedProductsAction } from '../reducers/productsReducer';
import { BannerItem, ProductItem } from '../../constants/interfaces/Products';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ACTIONS } from '../../constants/enum/GeneralEnum';

function* fetchFeaturedProducts() : any {
    try {
        yield put(getFeaturedProductsAction({ type: 'PENDING' }));
        const featuredProductsList : Array<BannerItem> = require('../../assets/json/featured_products_data.json');
        yield delay(2000);
        yield put(getFeaturedProductsAction({type: 'SUCCESS', data: featuredProductsList}));
    } catch (e: any) {
        yield put(getFeaturedProductsAction({type: 'ERROR', error: 'Some error occured'}));
    }
}

function* fetchCategoryProducts({ title } : any) : any {
    try {
        yield put(getCategoryProductsAction({ type: 'PENDING' }));
        const categoryProductsMap : any = require('../../assets/json/products_data.json');
        const categoryProductsList : Array<ProductItem> = categoryProductsMap[title];
        yield delay(2000);
        yield put(getCategoryProductsAction({type: 'SUCCESS', data: {productsArray: categoryProductsList, title: title}}));
    } catch (e: any) {
        yield put(getCategoryProductsAction({type: 'ERROR', error: 'Some error occured'}));
    }
}

export default function* productSaga() {
    yield takeLatest(ACTIONS.FETCH_FEATURED_PRODUCTS, fetchFeaturedProducts);
    yield takeEvery(ACTIONS.FETCH_CATEGORY_PRODCUTS, fetchCategoryProducts);
}

