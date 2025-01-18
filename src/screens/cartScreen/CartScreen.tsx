import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CartItemView from '../../components/cartItem/CartItem';
import {
  CartInterface,
  CartItem,
} from '../../constants/interfaces/CartInterface';
import {RootState} from '../../redux/store';
import styles from './styles';
import {appIcons} from '../../constants/images/Images';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/enum/GeneralEnum';
import { TouchableParent } from '../../components';
import commonStyles from '../../constants/styles/CommonStyle';

const InfoItem = ({textStyle, text}: {textStyle: any; text: string}) => (
  <Text style={textStyle}>{text}</Text>
);

const CartScreen = () => {
  const cartState: CartInterface = useSelector(
    (rootState: RootState) => rootState.cart,
  );
  const renderCartItem = (cartItem: CartItem) => (
    <CartItemView key={cartItem.item.id} cartItem={cartItem} showImage={true} />
  );
  const subTotalAmount = cartState.totalAmount;
  const taxes = cartState.totalAmount * 0.08;
  const platformCharges = 25;
  const totalCharges = subTotalAmount + taxes + platformCharges;
  const navigation = useNavigation();

  const summaryArray = [
    'Total',
    subTotalAmount,
    'Taxes',
    taxes.toFixed(2),
    'Platform Charges',
    platformCharges,
  ];

  if (Object.values(cartState.items).length <= 0) {
    return (
      <View style={styles.emptyCartView}>
        <Image
          source={appIcons.CartIcon}
          style={styles.emptyCartText}
          resizeMode="contain"
        />
        <Text>{'Cart feeling lonely!!! 😔'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.flex1}>
      <ScrollView
        style={styles.flex1}
        contentContainerStyle={styles.scrollview}>
        <>
          <Text style={styles.header1Style}>Items</Text>
          <View style={styles.itemsView}>
            {Object.values(cartState.items).map(renderCartItem)}
          </View>
          <Text style={styles.header2Style}>Summary</Text>
          <View style={[styles.itemsView, styles.summaryView]}>
            {summaryArray.map((item, index) => (
              <InfoItem
                key={`${item.toString()}_${index}`}
                text={`${index % 2 !== 0 ? '$' : ''}${item.toString()}`}
                textStyle={
                  index % 2 !== 0 ? styles.infoText2 : styles.infoText1
                }
              />
            ))}
            <View style={styles.separator} />
            <View style={styles.flexRow}>
              <Text style={styles.infoText1}>To Pay</Text>
              <Text style={styles.infoText2}>${totalCharges.toFixed(2)}</Text>
            </View>
          </View>
        </>
      </ScrollView>
      <View style={[styles.cartStyle, commonStyles.elevation]}>
        <TouchableParent
          style={styles.width100}
          onPress={() =>
            navigation.navigate(SCREENS.CART_REVIEW_SCREEN as never)
          }>
          <View
            style={styles.checkoutView}>
            <Text style={styles.checkoutText}>
              Checkout
            </Text>
          </View>
        </TouchableParent>
      </View>
    </View>
  );
};

export default CartScreen;
