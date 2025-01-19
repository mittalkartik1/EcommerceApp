import { ACTIONS } from '../../constants/enum/GeneralEnum';

export const fetchFeaturedProducts = () => ({
  type: ACTIONS.FETCH_FEATURED_PRODUCTS,
});

export const fetchCategoryProducts = (title: string) => ({
  type: ACTIONS.FETCH_CATEGORY_PRODCUTS,
  title,
});
