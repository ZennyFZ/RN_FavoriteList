import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./Style"
import { getOrchidById } from "../../utils/OrchidUtils"
import { useNavigation } from "@react-navigation/native";

const DetailScreen = ({ route }) => {
    const navigation = useNavigation()
    const orchidId = route.params.id
    const orchidData = getOrchidById(orchidId)

    const goToHome = () => {
        navigation.navigate("Home")
    }

    return (
        <View>
            <TouchableOpacity onPress={goToHome}>
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
            <TouchableOpacity style={styles.addFavoriteBox}>
                <Text style={styles.addFavorite}>Add to Favorite</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetailScreen;