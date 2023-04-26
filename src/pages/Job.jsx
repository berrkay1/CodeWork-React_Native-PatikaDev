import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import JobCart from '../components/JobCart'
import fetchHook from '../Hooks/fetchHook'

const Job = ({ navigation }) => {

    const { data, error, loading } = fetchHook('https://www.themuse.com/api/public/jobs?page=1');


    const goToDetail = (item) => {
        navigation.navigate('JobDetail', { item })
    }

    const renderItemJobCart = ({ item }) => <JobCart onPress={()=>goToDetail(item)} job={item} />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.results}
                renderItem={renderItemJobCart}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

export default Job

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
})