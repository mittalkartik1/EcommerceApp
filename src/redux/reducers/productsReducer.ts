import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryProductState, FeaturedProductState } from '../../constants/interfaces/Products';

interface ProductsType{
  featuredProducts: FeaturedProductState,
  categoryProducts: CategoryProductState,
}

const initialProductState : ProductsType = {
  featuredProducts: {isLoading: true, data: []},
  categoryProducts: {isLoading: true},
};

// export const getFeaturedProductsAction = createAction<Array<BannerItem>>('getFeaturedProductsAction');

const productSlice = createSlice({
  name: 'productsReducer',
  initialState: initialProductState,
  reducers: {
    getFeaturedProductsAction: (state, { payload }: PayloadAction<any>) => {
      if(payload.type === 'PENDING'){
        return { ...state, featuredProducts: { ...state.featuredProducts, isLoading: true } };
      } else if(payload.type === 'SUCCESS'){
        return { ...state, featuredProducts: { ...state.featuredProducts, isLoading: false, data: payload.data } };
      } else if(payload.type === 'ERROR'){
        return { ...state, featuredProducts: { ...state.featuredProducts, isLoading: false, error: payload.error } };
      }
    },
    getCategoryProductsAction: (state, { payload }: PayloadAction<any>) => {
      if(payload.type === 'PENDING'){
        return { ...state, categoryProducts: { ...state.categoryProducts, isLoading: true } };
      } else if(payload.type === 'SUCCESS'){
        return { ...state, categoryProducts: { ...state.categoryProducts, isLoading: false, data: { ...(state.categoryProducts.data ?? {}), [payload.data.title]: payload.data.productsArray } } };
      } else if(payload.type === 'ERROR'){
        return { ...state, categoryProducts: { ...state.categoryProducts, isLoading: false, error: payload.error } };
      }
    },
  },
});

export const { getFeaturedProductsAction, getCategoryProductsAction } = productSlice.actions;
export default productSlice.reducer;
