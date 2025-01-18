import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';
import {useSelector} from 'react-redux';
import CartItemView from '../../components/cartItem/CartItem';
import {SCREENS, STRINGS} from '../../constants/enum/GeneralEnum';
import {appIcons, productImages} from '../../constants/images/Images';
import {CartInterface} from '../../constants/interfaces/CartInterface';
import {ProductItem} from '../../constants/interfaces/Products';
import {RootState} from '../../redux/store';
import styles from './styles';
import { TouchableParent } from '../../components';
import commonStyles from '../../constants/styles/CommonStyle';

const ProductDetailScreen = (props: any) => {
    const [state, setState] = useState<{
        productDetail: ProductItem | null;
        isLoading: boolean;
    }>({productDetail: null, isLoading: true});
    const cartState: CartInterface = useSelector(
        (rootState: RootState) => rootState.cart,
    );
    const productId = props.route.params.productId;
    const cartItem = cartState.items[productId];
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProductDetail = () => {
            setTimeout(() => {
                const categoryProductsMap: any = require('../../assets/json/products_data.json');
                const categoryProductsList: Array<ProductItem> = Object.values(
                    categoryProductsMap,
                ).flat() as Array<ProductItem>;
                const filteredData = categoryProductsList.filter(
                    item => item.id === productId,
                );
                setState(prevState => ({
                    ...prevState,
                    productDetail: filteredData[0],
                    isLoading: false,
                }));
            }, 1000);
        };
        fetchProductDetail();
    }, [productId]);

    return (
        <View style={styles.flex1}>
            <ScrollView
                style={styles.flex1}
                contentContainerStyle={styles.container}>
                <>
                    {state.isLoading ? (
                        <ActivityIndicator size="small" color="#0000ff" />
                    ) : (
                        <>
                            <View style={styles.headerImageView}>
                                <Image
                                    source={
                                        productImages[
                                            state.productDetail!.image
                                        ]
                                    }
                                    style={styles.headerImage}
                                    resizeMode="contain"
                                />
                            </View>
                            <CartItemView
                                cartItem={{
                                    item: state.productDetail!,
                                    quantity: cartItem?.quantity ?? 0,
                                }}
                                isSinglePrice
                            />
                            <View style={styles.descriptionView}>
                                <Text>{STRINGS.PRODUCT_DESCRIPTION}</Text>
                            </View>
                        </>
                    )}
                </>
            </ScrollView>
            {cartState.totalQuantity > 0 && (
                <View style={[styles.cartStyle, commonStyles.elevation]}>
                    <Image
                        source={appIcons.CartIcon}
                        style={styles.cartIcon}
                        resizeMode="contain"
                    />
                    <View style={styles.cartHeaderView}>
                        <Text
                            style={
                                styles.cartHeaderText
                            }>{`${cartState.totalQuantity} Items`}</Text>
                        <Text
                            style={
                                styles.cartSubHeaderText
                            }>{`$${cartState.totalAmount}`}</Text>
                    </View>
                    <TouchableParent
                        onPress={() =>
                            navigation.navigate(SCREENS.CART_SCREEN as never)
                        }>
                        <View style={styles.cartButtonView}>
                            <Text style={styles.cartButtonText}>
                                Go to Cart
                            </Text>
                        </View>
                    </TouchableParent>
                </View>
            )}
        </View>
    );
};

export default ProductDetailScreen;
