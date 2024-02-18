import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    favoriteHeader: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    favoriteBody: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    favoriteImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    favoriteText: {
        fontSize: 18,
        marginLeft: 10
    },
    orchidAddButton: {
        position: 'absolute',
        right: 0,
        backgroundColor: '#92B4D3',
        padding: 10, 
        borderRadius: 10,
    },
    orchidFavoritedButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    orchidFavoritedImage: {
        height: 25, 
        width: 25
    },
    orchidFavoritedText: {
        color: 'white',
        marginLeft: 5
    },
    emptyFavorite: {
        display: 'flex',
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyFavoriteText: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default styles;