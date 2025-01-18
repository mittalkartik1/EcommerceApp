import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/enum/GeneralEnum';

const styles = StyleSheet.create({
    productImageView: {
        height: 40,
        width: 40,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    productImage: {
        height: 40,
        width: 40,
    },
    productTitleView: {
        backgroundColor: 'white',
        // marginHorizontal: 15,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex1: {
        flex: 1,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    amountText: {
        fontWeight: '600',
        fontSize: 14,
        color: COLORS.GREEN,
    },
    priceText: {
        fontWeight: '500',
        fontSize: 14,
        paddingTop: 5,
    },
});

export default styles;
