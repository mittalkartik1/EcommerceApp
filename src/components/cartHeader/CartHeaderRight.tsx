import React from 'react';
import {Alert, Image, View} from 'react-native';
import {appIcons} from '../../constants/images/Images';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {TouchableParent} from '..';
import styles from './styles';
import {clearCart} from '../../redux/actions/cartAction';

const CartHeaderRight = () => {
    const dispatch = useDispatch();
    const cartQuantity: number = useSelector(
        (rootState: RootState) => rootState.cart.totalQuantity,
        (prev, next) => {
            return prev === next || (prev > 0 && next > 0);
        },
    );
    const renderAlert = () =>
        Alert.alert('Clear Cart', 'Do you want to clear the cart?', [
            {
                text: 'No',
            },
            {text: 'Yes', onPress: () => dispatch(clearCart())},
        ]);
    if (cartQuantity > 0) {
        return (
            <TouchableParent onPress={renderAlert}>
                <View style={styles.row}>
                    <Image
                        source={appIcons.ClearCartIcon}
                        style={styles.imageStyle}
                        resizeMode="cover"
                    />
                </View>
            </TouchableParent>
        );
    } else {
        return <></>;
    }
};

export default React.memo(CartHeaderRight, () => true);
