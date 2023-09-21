import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ListTitle from '../ListTitle'

const ExpansionItem = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <ListTitle
          contentViewAlign='Left'
          withMedia='Yes'
        ></ListTitle>
      </Pressable>
    </View>
  )
}

export default ExpansionItem

const styles = StyleSheet.create({
  container: {
    width: 414,
  }
})