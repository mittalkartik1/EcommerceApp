import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

export const TouchableParent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
