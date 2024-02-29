import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { retrieveFavorite, removeFromFavorite, clearFavorite } from "../../utils/OrchidUtils";
import { useEffect, useState } from "react";

const FavoriteScreen = () => {
    const [favoriteOrchid, setFavoriteOrchid] = useState([])

    const getFavoriteOrchid = async () => {
        retrieveFavorite().then((data) => {
            setFavoriteOrchid(data)
        })
    }

    const removeFavorite = (id) => {
        Alert.alert(
            "Remove Favorite",
            "Are you sure you want to remove this orchid from favorite?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        removeFromFavorite(id)
                    }
                }
            ]
        )
    }

    const removeFavoriteAll = () => {
        Alert.alert(
            "Remove All Favorite",
            "Are you sure you want to remove all orchid from favorite?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        clearFavorite()
                    }
                }
            ]
        )
    }

    useEffect(() => {
        getFavoriteOrchid()
    }, [favoriteOrchid])


    return (
        <View>
            <Text style={styles.favoriteHeader}>Favorite</Text>
            {
                favoriteOrchid.length > 0 ? (
                    <View>
                        <FlatList
                            data={favoriteOrchid}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View key={item.id - 1} style={styles.favoriteBody}>
                                    <Image source={{ uri: item.image }} style={styles.favoriteImage} />
                                    <Text style={styles.favoriteText}>{item.name}</Text>
                                    <TouchableOpacity style={styles.orchidAddButton} onPress={() => removeFavorite(item.id - 1)}>
                                        <Text style={styles.orchidFavoritedText}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />

                        <TouchableOpacity style={styles.orchidRemoveAllButton} onPress={() => removeFavoriteAll()}>
                            <Text style={styles.orchidFavoritedText}>Remove All</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.emptyFavorite}>
                        <Text style={styles.emptyFavoriteText}>No Favorite Orchid</Text>
                    </View>
                )
            }
        </View>
    );
}

export default FavoriteScreen;