import React, {useEffect} from 'react';
import {BackHandler, Image, Platform, Text, View} from 'react-native';
import {appIcons} from '../../constants/images/Images';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {TouchableParent} from '../../components';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cartAction';

const OrderCompletedScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let backHandler: any;
        if(Platform.OS === 'android') {
            backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                () => {
                    navigation.popToTop();
                    return true;
                }
            );
        }
        return () => backHandler?.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={[styles.successView, {paddingTop: insets.top + 15}]}>
            <TouchableParent
                style={styles.alignSelfEnd}
                onPress={navigation.popToTop}>
                <Image source={appIcons.CloseIcon} style={styles.searchIcon} />
            </TouchableParent>
            <View style={styles.container}>
                <Image
                    source={appIcons.CheckCircleIcon}
                    style={styles.successText}
                    resizeMode="contain"
                />
                <Text style={styles.textStyle}>
                    {'Order placed successfully!!! 😍'}
                </Text>
                <TouchableParent
                    style={styles.width80}
                    onPress={navigation.popToTop}>
                    <View style={[styles.homeButton, styles.width80]}>
                        <Text style={styles.homeText}>Home</Text>
                    </View>
                </TouchableParent>
            </View>
        </View>
    );
};

export default OrderCompletedScreen;
