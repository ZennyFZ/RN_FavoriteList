import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailHeader: {
        padding: 10,
        marginTop: 20
    },
    arrow: {
        width: 25,
        height: 25,
        marginTop: 25,
    },
    detailHeaderText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    category: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },
    detailBody: {
        padding: 20
    },
    detailImage: {
        width: '100%',
        height: 500
    },
    detailDescription: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    addFavoriteBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    favoriteIcon: {
        width: 40,
        height: 40
    },
    addFavorite: {
        color: 'white',
        marginLeft: 5, 
        padding: 10, 
        borderRadius: 10,
        width: 120,
        backgroundColor: '#92B4D3', 
    }
});

export default styles;