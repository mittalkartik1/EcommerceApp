import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/enum/GeneralEnum';

const styles = StyleSheet.create({
    successView: {
        flex: 1,
        paddingHorizontal: 15,
    },
    successText: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 18,
    },
    alignSelfEnd: {
        alignItems: 'flex-end',
    },
    searchIcon: {
        width: 24,
        height: 24,
        alignSelf: 'flex-end',
    },
    homeButton: {
        borderRadius: 5,
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 50,
    },
    homeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    },
    width80: {
        width: '80%',
    },
});

export default styles;
