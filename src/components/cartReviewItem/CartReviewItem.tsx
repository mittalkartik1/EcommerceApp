import React from 'react';
import { Image, Text, View } from 'react-native';
import { productImages } from '../../constants/images/Images';
import { CartItem } from '../../constants/interfaces/CartInterface';
import styles from './styles';

const CartReviewItem = ({ cartItem, showImage = false } : { cartItem: CartItem, showImage: boolean }) => {
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
                <Text style={styles.priceText}>{`$${cartItem.item.price} x ${cartItem.quantity}`}</Text>
            </View>
            <Text style={styles.amountText}>{`$${cartItem.item.price * cartItem.quantity}`}</Text>
        </View>
    );
};

export default CartReviewItem;
