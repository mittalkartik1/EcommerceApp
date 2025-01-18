import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/enum/GeneralEnum';

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    parentStyle: {
        backgroundColor: 'white',
        paddingBottom: 20,
    },
    searchbar: {
        borderRadius: 20,
        borderColor: COLORS.BACKGROUND_GRAY,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
        overflow: 'hidden',
    },
    cartIcon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    searchbarText: {
        color: '#949494',
        flex: 1,
    },
    bannerImageView: {
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 15,
    },
    bannerListStyle: {
        paddingHorizontal: 15,
    },
    imageGap: {
        width: 15,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    headerText: {
        marginHorizontal: 15,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: 600,
        fontSize: 20,
    },
    marginBottom0: {
        marginBottom: 0,
    },
    categoryParentStyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.BACKGROUND_GRAY,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 5,
    },
    categoryProductStyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.BACKGROUND_GRAY,
        backgroundColor: 'white',
        overflow: 'hidden',
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewpager: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    marginTop15: {
        marginTop: 15,
    },
});

export default styles;
