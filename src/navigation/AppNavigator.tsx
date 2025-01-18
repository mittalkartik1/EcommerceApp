import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import ProductDetailScreen from '../screens/productDetailScreen/ProductDetailScreen';
import CartScreen from '../screens/cartScreen/CartScreen';
import CartReviewScreen from '../screens/cartReviewScreen/CartReviewScreen';
import {SCREENS} from '../constants/enum/GeneralEnum';
import OrderCompletedScreen from '../screens/orderCompletedScreen/OrderCompletedScreen';
import CartHeaderRight from '../components/cartHeader/CartHeaderRight';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const renderHeaderRight = () => <CartHeaderRight />;
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name={SCREENS.HOME_SCREEN}
                options={{headerShown: false}}
                component={HomeScreen}
            />
            <Stack.Screen
                name={SCREENS.SEARCH_SCREEN}
                options={{headerShown: false, presentation: 'fullScreenModal'}}
                component={SearchScreen}
            />
            <Stack.Screen
                name={SCREENS.PRODUCT_DETAIL_SCREEN}
                options={{
                    headerTitle: '',
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal',
                }}
                component={ProductDetailScreen}
            />
            <Stack.Screen
                name={SCREENS.CART_SCREEN}
                options={{
                    headerTitle: '',
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal',
                    headerRight: renderHeaderRight,
                }}
                component={CartScreen}
            />
            <Stack.Screen
                name={SCREENS.CART_REVIEW_SCREEN}
                options={{
                    headerTitle: '',
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal',
                }}
                component={CartReviewScreen}
            />
            <Stack.Screen
                name={SCREENS.ORDER_COMPLETED_SCREEN}
                options={{headerShown: false, presentation: 'fullScreenModal'}}
                component={OrderCompletedScreen}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
