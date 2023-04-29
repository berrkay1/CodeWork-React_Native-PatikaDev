import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'

const FavoriJobCart = ({ favoriJob }) => {

    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id: id } })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{favoriJob?.name}</Text>
            <Text style={styles.smallTitle}>{favoriJob?.company.name}</Text>
            <Text style={styles.locationDesc}>{favoriJob.locations[0]?.name}</Text>
            <Text style={styles.level}>{favoriJob.levels[0]?.name}</Text>
            <TouchableOpacity onPress={() => removeItem(favoriJob.id)}   >
                <Text style={styles.btn}>REMOVE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriJobCart

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 3.5,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        margin: 10,
        borderRadius: 10,

    },
    title: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    smallTitle: {
        fontSize: 17,
        fontWeight: '400'
    },
    locationDesc: {
        backgroundColor: '#EF5350',
        padding: 8,
        borderRadius: 30,
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 5,
        width: 195
    },
    level: {
        fontSize: 20,
        color: '#EF5350',
        fontWeight: 'bold',
        textAlign: 'right'

    },

    btn: {
        backgroundColor: '#EF5350',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 7,
        color: '#fff',
        margin: 10,
        borderRadius: 10,
        textAlign: 'center'
    }
})