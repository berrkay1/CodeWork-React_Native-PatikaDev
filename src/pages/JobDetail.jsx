import { Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html';

const JobDetail = ({ route }) => {

  const job = route.params.item

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBody}>
        <Text style={styles.jobName}>{job.name}</Text>
        <Text style={styles.location}>
          <Text style={styles.titleHeader}>Locations:</Text>
          {job.locations[0].name}
        </Text>
        <Text style={styles.jobLevel}>
          <Text style={styles.titleHeader}>Job Level:</Text>
          {job.levels[0].name}
        </Text>
        <Text style={styles.jobTitle}>JOB DETAİL</Text>
      </View>
      <View style={styles.descBody}>

        <RenderHtml
          source={{ html: job.contents }}
          contentWidth={Dimensions.get('window').width}
          baseStyle={styles.jobDesc}
        />

      </View>
      <View style={styles.buttonBody}>
        <TouchableOpacity >
          <Text style={styles.btn}>SUBMIT</Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.btn}>FAVORUITE</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default JobDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  headerBody: {
    flex: 1
  },
  jobName: {
    color: '#6B767C',
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleHeader: {
    fontSize: 15,
    color: '#EF5350'
  },
  location: {
    fontSize: 15,
    color: '#000'
  },
  jobLevel: {
    fontSize: 15,
    color: '#000'
  },
  jobTitle: {
    fontSize: 18,
    color: '#37474F',
    textAlign: 'center',
    marginBottom:10
  },
  descBody: {

    backgroundColor: '#fff',
    flex: 3
  },
  jobDesc: {
    fontSize: 15,
    color: '#000',
    padding: 5
  },
  buttonBody: {
    display: 'flex',
    justifyContent: 'center',
    flex: 2,
    flexDirection:'row',
    padding:10
  },
  btn: {
    backgroundColor: '#EF5350',
    fontSize: 22,
    fontWeight: 'bold',
    padding:10,
    color:'#fff',
    margin:5,
    borderRadius:10
  }
})