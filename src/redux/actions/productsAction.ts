export const fetchFeaturedProducts = () => ({
  type: 'fetchFeaturedProducts',
});

export const fetchCategoryProducts = (title: string) => ({
  type: 'fetchCategoryProducts',
  title,
});
