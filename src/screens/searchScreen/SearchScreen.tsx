import React, {useState, useEffect} from 'react';
import {
    View,
    TextInput,
    FlatList,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native';
import {appIcons, productImages} from '../../constants/images/Images';
import styles from './styles';
import {ProductItem} from '../../constants/interfaces/Products';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREENS} from '../../constants/enum/GeneralEnum';
import {TouchableParent} from '../../components';

const SearchScreen = ({navigation}: any) => {
    const insets = useSafeAreaInsets();
    const [state, setState] = useState<{
        query: string;
        filteredItems: Array<ProductItem> | null;
        isLoading: boolean;
    }>({
        query: '',
        filteredItems: null,
        isLoading: false,
    });

    useEffect(() => {
        let debounceTimer;

        debounceTimer = setTimeout(() => {
            if (state.query === '') {
                setState(prevState => ({
                    ...prevState,
                    filteredItems: [],
                    isLoading: false,
                }));
            } else {
                setState(prevState => ({...prevState, isLoading: true}));
            }
        }, 500);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [state.query]);

    useEffect(() => {
        if (state.isLoading) {
            const fetchSearchResult = () => {
                setTimeout(() => {
                    const categoryProductsMap: any = require('../../assets/json/products_data.json');
                    const categoryProductsList: Array<ProductItem> =
                        Object.values(
                            categoryProductsMap,
                        ).flat() as Array<ProductItem>;
                    const filteredData = categoryProductsList.filter(item =>
                        item.name
                            .toLowerCase()
                            .includes(state.query.toLowerCase()),
                    );
                    setState(prevState => ({
                        ...prevState,
                        filteredItems: filteredData,
                        isLoading: false,
                    }));
                }, 1000);
            };
            fetchSearchResult();
        }
    }, [state.isLoading, state.query]);

    // Debounced search function
    const handleSearch = (text: string) => {
        setState(prevState => ({...prevState, query: text}));
    };

    const searchItem = ({item} : {item: ProductItem}) => (
        <TouchableParent
            onPress={() =>
                navigation.replace(SCREENS.PRODUCT_DETAIL_SCREEN, {
                    productId: item.id,
                })
            }>
            <View style={styles.productItem}>
                <Image
                    source={productImages[item.image]}
                    style={styles.productImage}
                    resizeMode="contain"
                />
                <Text>{item.name}</Text>
            </View>
        </TouchableParent>
    );

    return (
        <View style={[styles.container, {paddingTop: insets.top + 15}]}>
            <TouchableParent
                style={styles.alignSelfEnd}
                onPress={() => navigation.goBack()}>
                <Image
                    source={appIcons.CloseIcon}
                    style={[styles.searchIcon, styles.alignSelfEnd]}
                />
            </TouchableParent>
            <View style={styles.searchbar}>
                <Image
                    source={appIcons.SearchIcon}
                    style={styles.searchIcon}
                    resizeMode="cover"
                />
                <TextInput
                    style={styles.searchbarText}
                    onChangeText={handleSearch}
                    value={state.query}
                    placeholder="Search products"
                />
            </View>
            {state.isLoading ? (
                <View style={[styles.container, {paddingTop: insets.top + 15}]}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View>
            ) : (
                <FlatList
                    data={state.filteredItems}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={
                        state.filteredItems == null ||
                        state.query.length <= 0 ? (
                            <></>
                        ) : (
                            <Text style={styles.noItemText}>
                                No items found...
                            </Text>
                        )
                    }
                    renderItem={searchItem}
                />
            )}
        </View>
    );
};

export default SearchScreen;
