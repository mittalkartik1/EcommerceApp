import React, {useEffect, useRef} from 'react';
import {
    ActivityIndicator,
    Animated,
    Dimensions,
    Image,
    Platform,
    Text,
    View,
} from 'react-native';
import styles from '../styles';
import {productImages} from '../../../constants/images/Images';
import {
    BannerItem,
    FeaturedProductState,
} from '../../../constants/interfaces/Products';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFeaturedProducts} from '../../../redux/actions/productsAction';
import {RootState} from '../../../redux/store';
import PagerView from 'react-native-pager-view';
import { useFocusEffect } from '@react-navigation/native';

const FeaturedProducts = () => {
    const {width} = Dimensions.get('window');
    const isAndroid = Platform.OS === 'android';
    const imageStyle = {height: 150, width: isAndroid ? width * 0.75 : width - 30};
    const dispatch = useDispatch();
    const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
    const featuredProductsState: FeaturedProductState = useSelector(
        (state: RootState) => state.products.featuredProducts,
    );
    const pageMargin = 0 - (Number((0.25 * width).toFixed(2)) - 15);
    const viewPagerRef = useRef<PagerView>(null);
    const pageRef = useRef(0);

    useEffect(() => {
        dispatch(fetchFeaturedProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const intervalId = setInterval(() => viewPagerRef.current?.setPage((pageRef.current + 1) % 4), 2000);
            return(() => {
                clearInterval(intervalId);
            });
        }, [])
    );

    const bannerItem = ({item, index}: {item: BannerItem; index: number}) => (
        <View
            key={`item${index}`}
            style={{...imageStyle, ...styles.bannerImageView}}>
            <Image
                source={productImages[item.image]}
                style={imageStyle}
                resizeMode="cover"
            />
        </View>
    );

    if (featuredProductsState.isLoading) {
        return <ActivityIndicator size="small" color="#0000ff" style={styles.marginTop15} />;
    }

    if (featuredProductsState.error != null) {
        return <></>;
    }

    return (
        <>
            <Text style={styles.headerText}>Featured</Text>
            <AnimatedPagerView
                testID="pager-view"
                ref={viewPagerRef}
                style={styles.viewpager}
                offscreenPageLimit={4}
                onPageSelected={e => {
                    pageRef.current = e.nativeEvent.position;
                }}
                pageMargin={isAndroid ? Math.floor(pageMargin) : 10}>
                {featuredProductsState.data.map((item ,index) => bannerItem({item, index}))}
            </AnimatedPagerView>
        </>
    );
};

export default FeaturedProducts;
