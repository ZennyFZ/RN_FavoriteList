import DummyData from "../assets/DummyData"
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
    try {
        await AsyncStorage.setItem('orchidList', JSON.stringify(DummyData));
    } catch (e) {
        console.log(e);
    }
}

const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('orchidList');
        if (value !== null) {
            return JSON.parse(value)
        }
    } catch (e) {
        console.log(e);
    }
}

const updateData = async (data) => {
    try {
        await AsyncStorage.setItem('orchidList', JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
}

const getOrchidCategory = () => {
    let category = []
    DummyData.map((item) => {
        if (!category.includes(item.category)) {
            category.push(item.category)
        }
    })
    return category
}

const filterOrchid = async (category) => {
    let orchid = await retrieveData()
    if (category === "all") {
        return orchid
    } else {
        return orchid.filter((item) => item.category === category)
    }
}

const getOrchidById = async (id) => {
    let orchid = await retrieveData()
    return orchid[id]
}

const removeFromFavorite = async (id) => {
    let orchid = await retrieveData()
    orchid[id].favorite = false
    updateData(orchid)
}

const clearFavorite = async () => {
    let orchid = await retrieveData()
    orchid.forEach((item) => item.favorite = false)
    updateData(orchid)
}

const addToFavorite = async (id) => {
    let orchid = await retrieveData()
    orchid[id].favorite = true
    updateData(orchid)
}

const retrieveFavorite = async () => {
    let orchid = await retrieveData()
    return orchid.filter((item) => item.favorite === true)
}

export { storeData, retrieveData, getOrchidCategory, filterOrchid, getOrchidById, removeFromFavorite, clearFavorite, addToFavorite, retrieveFavorite }