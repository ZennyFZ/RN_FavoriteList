import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./Style"
import { getOrchidById, addToFavorite, removeFromFavorite } from "../../utils/OrchidUtils"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const DetailScreen = ({ route }) => {
    const [orchidData, setOrchidData] = useState({})
    const navigation = useNavigation()
    const orchidId = route.params.id
    const prevScreen = route.params.prevScreen

    const getOrchidData = async () => {
        getOrchidById(orchidId).then((data) => {
            setOrchidData(data)
        })
    }

    const goBack = () => {
        navigation.navigate(prevScreen)
    }

    useEffect(() => {
        getOrchidData()
    }, [orchidData])

    return (
        <View>
            <TouchableOpacity onPress={goBack}>
                <Image source={require('../../assets/Arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
            <View style={styles.detailHeader}>
                <Text style={styles.detailHeaderText}>{orchidData.name}</Text>
            </View>
            <View style={styles.category}>
                <Text style={styles.categoryText}>{orchidData.category}</Text>
            </View>
            <View style={styles.detailBody}>
                <Image source={{ uri: orchidData.image }} style={styles.detailImage} />
                <Text style={styles.detailDescription}>{orchidData.description}</Text>
            </View>
            <View style={styles.orchidButtonBox}>
                {orchidData.favorite ? (
                    <TouchableOpacity style={styles.orchidAddButton} onPress={() => {removeFromFavorite(orchidData.id - 1)}}>
                        <View style={styles.orchidFavoritedButton}>
                            <Image source={require('../../assets/Favorite.png')} style={styles.orchidFavoritedImage} />
                            <Text style={styles.orchidFavoritedText}>Favorited</Text>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.orchidAddButton} onPress={() => {addToFavorite(orchidData.id - 1)}}>
                        <Text style={styles.orchidButtonColor}>Add to Favorite</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

export default DetailScreen;