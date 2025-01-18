import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryProducts from './components/CategoryProducts';
import {SCREENS} from '../../constants/enum/GeneralEnum';
import {appIcons} from '../../constants/images/Images';
import {TouchableParent} from '../../components';

const HomeScreen = ({navigation}: any) => {
    return (
        <ScrollView
            overScrollMode={'never'}
            bounces={false}
            contentContainerStyle={styles.parentStyle}>
            <View style={styles.headerView}>
                <TouchableParent
                    style={styles.flex1}
                    useForeground
                    onPress={() => navigation.navigate(SCREENS.SEARCH_SCREEN)}>
                    <View style={styles.searchbar}>
                        <Image
                            source={appIcons.SearchIcon}
                            style={styles.searchIcon}
                            resizeMode="cover"
                        />
                        <Text style={styles.searchbarText}>
                            Search products
                        </Text>
                    </View>
                </TouchableParent>
                <TouchableParent
                    onPress={() => navigation.navigate(SCREENS.CART_SCREEN)}>
                    <Image
                        source={appIcons.CartIcon}
                        style={styles.cartIcon}
                        resizeMode="cover"
                    />
                </TouchableParent>
            </View>
            <FeaturedProducts />
            <CategoryProducts title={'Beauty'} />
            <CategoryProducts title={'Electronics'} />
            <CategoryProducts title={'Toys'} />
        </ScrollView>
    );
};

export default HomeScreen;
