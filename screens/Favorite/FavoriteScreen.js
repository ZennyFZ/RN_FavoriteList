import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Style";
import { retrieveFavorite, removeFromFavorite } from "../../utils/OrchidUtils";
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
                    favoriteOrchid.map((item, index) => {
                        return (
                            <View key={index} style={styles.favoriteBody}>
                                <Image source={{ uri: item.image }} style={styles.favoriteImage} />
                                <Text style={styles.favoriteText}>{item.name}</Text>
                                <TouchableOpacity style={styles.orchidAddButton} onPress={() => removeFromFavorite(item.id - 1)}>
                                    <Text style={styles.orchidFavoritedText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
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