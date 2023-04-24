import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const JobCart = ({ onPress }) => {


    return (
        <Pressable style={styles.container} onPress={onPress}  >
            <Text style={styles.title}>JobCart</Text>
            <Text style={styles.smallTitle}>JobCart</Text>
            <Text style={styles.locationDesc}>JobCart</Text>
            <Text style={styles.level}>JobCart</Text>
        </Pressable>
    )
}

export default JobCart

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 5.5,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flex: 0
    },
    title: {
        fontSize: 22,
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
        width: 180
    },
    level: {
        fontSize: 20,
        color: '#EF5350',
        fontWeight: 'bold',
        textAlign: 'right'

    }
})