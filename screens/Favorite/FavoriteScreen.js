import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
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
                                    <TouchableOpacity style={styles.orchidAddButton} onPress={() => removeFromFavorite(item.id - 1)}>
                                        <Text style={styles.orchidFavoritedText}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />

                        <TouchableOpacity style={styles.orchidRemoveAllButton} onPress={() => clearFavorite()}>
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