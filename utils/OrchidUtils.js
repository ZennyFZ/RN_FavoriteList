import DummyData from "../assets/DummyData"

const getOrchidCategory = () => {
    let category = []
    DummyData.map((item) => {
        if (!category.includes(item.category)) {
            category.push(item.category)
        }
    })
    return category
}

const filterOrchid = (category) => {
    if (category.toLowerCase() === "all") {
        return DummyData
    } else {
        return DummyData.filter((item) => item.category === category)
    }
}

const getOrchidById = (id) => {
    return DummyData[id]
}

export { getOrchidCategory, filterOrchid, getOrchidById }