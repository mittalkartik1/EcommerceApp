import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/enum/GeneralEnum';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    searchbar: {
        borderRadius: 20,
        borderColor: COLORS.BACKGROUND_GRAY,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    searchbarText: {
        color: '#949494',
        flex: 1,
    },
    alignSelfEnd: {
        alignSelf: 'flex-end',
    },
    noItemText: {
        color: '#949494',
        padding: 15,
        alignSelf: 'center',
    },
    productImage: {
        width: 50,
        height: 50,
    },
    productItem: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});

export default styles;
