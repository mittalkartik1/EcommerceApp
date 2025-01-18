export interface BannerItem {
    id: string,
    image: string,
}

export interface FeaturedProductState {
    isLoading: boolean,
    data: Array<BannerItem>,
    error?: string
}

export interface ProductItem {
    id: string,
    image: string,
    name: string,
    price: number,
    tag: string,
}

export interface CategoryProductsProps {
    [key: string]: Array<ProductItem>
}

export interface CategoryProductState {
    isLoading: boolean,
    data?: CategoryProductsProps,
    error?: string
}
