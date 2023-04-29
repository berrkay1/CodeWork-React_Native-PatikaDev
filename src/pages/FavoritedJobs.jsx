import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavoriJobCart from '../components/FavoriJobCart'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const FavoritedJobs = () => {

  const listFavori = useSelector(selector => selector.FavouiteList);

  const renderItemList = ({ item }) => <FavoriJobCart favoriJob={item} />

  return (
    <View>

      <FlatList
        data={listFavori}
        renderItem={renderItemList}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default FavoritedJobs

const styles = StyleSheet.create({})