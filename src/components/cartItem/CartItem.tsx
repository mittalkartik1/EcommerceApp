import React from 'react';
import { Image, Text, View } from 'react-native';
import { appIcons, productImages } from '../../constants/images/Images';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../constants/interfaces/CartInterface';
import styles from './styles';
import { updateCartItem } from '../../redux/actions/cartAction';
import { TouchableParent } from '..';

const CartItemView = ({ cartItem, showImage = false, isSinglePrice = false } : { cartItem: CartItem, showImage?: boolean, isSinglePrice?: boolean }) => {
    const dispatch = useDispatch();
    return(
        <View key={cartItem.item.id} style={styles.productTitleView}>
            {showImage && (
                <View style={styles.productImageView}>
                    <Image
                        source={productImages[cartItem.item.image]}
                        style={styles.productImage}
                        resizeMode="contain"
                    />
                </View>
            )}
            <View style={styles.flex1}>
                <Text style={styles.titleText}>{cartItem.item.name}</Text>
                <Text style={styles.priceText}>{`$${cartItem.item.price * (isSinglePrice ? 1 : cartItem.quantity)}`}</Text>
            </View>
            {
                cartItem.quantity > 0 ?
                <View style={styles.quantityView}>
                    <TouchableParent onPress={() => dispatch(updateCartItem({  item: cartItem.item, quantity: cartItem.quantity - 1 }))}>
                        <Image
                            source={appIcons.RemoveIcon}
                            style={styles.plusMinusImage}
                            resizeMode="contain"
                        />
                    </TouchableParent>
                    <Text style={styles.addText}>{cartItem.quantity}</Text>
                    <TouchableParent onPress={() => dispatch(updateCartItem({  item: cartItem.item, quantity: cartItem.quantity + 1 }))}>
                        <Image
                            source={appIcons.AddIcon}
                            style={styles.plusMinusImage}
                            resizeMode="contain"
                        />
                    </TouchableParent>
                </View> :
                <TouchableParent onPress={() => dispatch(updateCartItem({  item: cartItem.item, quantity: 1 }))}>
                    <View style={styles.addView}>
                        <Text style={styles.addText}>Add</Text>
                    </View>
                </TouchableParent>
            }
        </View>
    );
};

export default React.memo(CartItemView, (prev, next) => prev.cartItem.quantity === next.cartItem.quantity);
