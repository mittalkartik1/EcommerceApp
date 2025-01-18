import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/enum/GeneralEnum';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND_GRAY,
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    headerImageView: {
        backgroundColor: 'white',
        marginVertical: 15,
        borderRadius: 10,
        paddingVertical: 10,
    },
    headerImage: {
        height: 150,
        maxWidth: '100%',
    },
    flex1: {
        flex: 1,
    },
    descriptionView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginTop: 15,
    },
    addView: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: 'blue',
        paddingHorizontal: 15,
        paddingVertical: 2,
    },
    cartStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartIcon: {
        width: 30,
        height: 30,
    },
    cartHeaderView: {
        marginLeft: 5,
        flex: 1,
    },
    cartHeaderText: {
        fontWeight: 'bold',
    },
    cartSubHeaderText: {
        color: COLORS.GREEN,
        fontWeight: '500',
    },
    cartButtonView: {
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    cartButtonText: {
        color: 'white',
        fontWeight: '600',
    },
});

export default styles;
