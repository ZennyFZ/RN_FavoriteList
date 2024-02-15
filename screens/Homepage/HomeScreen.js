import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./Style"
import { filterOrchid, getOrchidCategory } from "../../utils/OrchidUtils"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

const Homepage = () => {
    const [selectedOrchid, setSelectedOrchid] = useState(-1)
    const [orchidData, setOrchidData] = useState()
    const navigation = useNavigation()

    const goToDetail = (index) => {
        navigation.navigate("Detail", { id: index - 1 })
    }

    useEffect(() => {
        setOrchidData(filterOrchid("all"))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image source={require("../../assets/Banner.jpg")} resizeMode='stretch' style={styles.banner} />
                <Text style={styles.headerText}>Welcome to Orchid</Text>
            </View>

            <View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={styles.scrollView}
                >
                    <TouchableOpacity style={[styles.allOrchids, { backgroundColor: selectedOrchid < 0 ? '#92B4D3' : '#d3d8e0' }]} onPress={() => { setSelectedOrchid(-1), setOrchidData(filterOrchid("all")) }}>
                        <Text style={styles.allOrchidText}>All Orchids</Text>
                    </TouchableOpacity>
                    {getOrchidCategory().map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.allOrchids, { backgroundColor: selectedOrchid === index ? '#92B4D3' : '#d3d8e0' }]} onPress={() => { setSelectedOrchid(index), setOrchidData(filterOrchid(item)) }}>
                                <Text style={styles.allOrchidText}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

            <FlatList
                data={orchidData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.flatList}>
                            <Image source={{ uri: item.image }} style={styles.orchidImage} />
                            <View style={styles.orchidInformationBox}>
                                <Text style={styles.orchidName}>{item.name}</Text>
                                <Text style={styles.orchidCategory}>Category: {item.category}</Text>
                                <View style={styles.orchidButtonBox}>
                                    <TouchableOpacity style={styles.orchidViewButton} onPress={() => goToDetail(item.id)}>
                                        <Text style={styles.orchidButtonColor}>View</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.orchidAddButton}>
                                        <Text style={styles.orchidButtonColor}>Add to Favorite</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Homepage