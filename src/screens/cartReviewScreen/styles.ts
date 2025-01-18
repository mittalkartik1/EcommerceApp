import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/enum/GeneralEnum';

const styles = StyleSheet.create({
    infoText1: {
        fontWeight: '500',
        width: '50%',
    },
    infoText2: {
        color: COLORS.GREEN,
        width: '50%',
    },
    cartStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex1: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_GRAY,
    },
    scrollview: {
        backgroundColor: COLORS.BACKGROUND_GRAY,
        paddingBottom: 15,
    },
    header1Style: {
        marginTop: 15,
        marginHorizontal: 15,
        marginBottom: 5,
        fontWeight: '500',
        fontSize: 15,
    },
    header2Style: {
        marginTop: 20,
        marginHorizontal: 15,
        marginBottom: 5,
        fontWeight: '500',
        fontSize: 15,
    },
    itemsView: {
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 15,
    },
    summaryView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 15,
        rowGap: 10,
        justifyContent: 'center',
    },
    paymentView: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: 'flex-start',
    },
    separator: {
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
    },
    flexRow: {
        flexDirection: 'row',
    },
    width100: {
        width: '100%',
    },
    checkoutView: {
        borderRadius: 5,
        backgroundColor: COLORS.PRIMARY,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
    },
    checkoutText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    alignFlexStart: {
        alignItems: 'flex-start',
    },
});

export default styles;
