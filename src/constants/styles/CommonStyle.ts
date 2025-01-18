import { StyleSheet } from 'react-native';
import { COLORS } from '../enum/GeneralEnum';

const commonStyles = StyleSheet.create({
    elevation: {
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
    },
    backgroundGray: {
        backgroundColor: COLORS.BACKGROUND_GRAY,
    },
});

export default commonStyles;
