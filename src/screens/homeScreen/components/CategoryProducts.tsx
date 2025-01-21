import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableParent } from '../../../components';
import { COLORS, SCREENS } from '../../../constants/enum/GeneralEnum';
import { productImages } from '../../../constants/images/Images';
import { RootStackParamList } from '../../../constants/interfaces/Navigator';
import {
    CategoryProductState,
    ProductItem,
} from '../../../constants/interfaces/Products';
import { fetchCategoryProducts } from '../../../redux/actions/productsAction';
import { RootState } from '../../../redux/store';
import styles from '../styles';
import commonStyles from '../../../constants/styles/CommonStyle';

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    SCREENS.PRODUCT_DETAIL_SCREEN
>;

const CategoryProducts = ({title}: {title: string}) => {
    const imageStyle = {height: 120, width: 120};
    const imageStyle1 = {height: 100, width: 100};
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp>();
    const categoryProductsState: CategoryProductState = useSelector(
        (state: RootState) => state.products.categoryProducts,
        arePropsEqual,
    );

    useEffect(() => {
        dispatch(fetchCategoryProducts(title));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function arePropsEqual(prev : CategoryProductState, next: CategoryProductState) : boolean {
        if(prev.isLoading !== next.isLoading) {return false;}
        if(prev.data?.[title]?.length !== next.data?.[title]?.length) {return false;}
        return true;
    }

    const productItem = ({item}: {item: ProductItem}) => (
        <TouchableParent
            useForeground
            onPress={() =>
                navigation.navigate(SCREENS.PRODUCT_DETAIL_SCREEN, {
                    productId: item.id,
                })
            }>
            <View style={[styles.categoryParentStyle, commonStyles.elevation]}>
                <View
                    key={item.id}
                    style={{...imageStyle, ...styles.categoryProductStyle}}>
                    <Image
                        source={productImages[item.image]}
                        style={imageStyle1}
                        resizeMode="contain"
                    />
                </View>
                <Text style={childStyles.title}>{item.name}</Text>
                <Text style={childStyles.price}>{`$ ${item.price}`}</Text>
                <View style={childStyles.tagView}>
                    <Text style={childStyles.tagText}>{item.tag}</Text>
                </View>
            </View>
        </TouchableParent>
    );
    const bannerItemGap = () => <View style={styles.imageGap} />;

    if (categoryProductsState.isLoading) {
        return <ActivityIndicator size="small" color="#0000ff" style={styles.marginTop15} />;
    }

    if (categoryProductsState.error != null) {
        return <></>;
    }

    return (
        <>
            <Text style={[styles.headerText, styles.marginBottom0]}>{title}</Text>
            <FlatList
                data={categoryProductsState.data?.[title] ?? []}
                renderItem={productItem}
                keyExtractor={item => item.id}
                horizontal
                overScrollMode="never"
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bannerListStyle}
                ItemSeparatorComponent={bannerItemGap}
            />
        </>
    );
};

const childStyles = StyleSheet.create({
    title: {
        fontWeight: '600',
    },
    price: {
        color: COLORS.GREEN,
        marginTop: 5,
    },
    tagView: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.BACKGROUND_GRAY,
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginTop: 5,
    },
    tagText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default CategoryProducts;
