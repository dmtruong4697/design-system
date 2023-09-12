import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Icons = (props) => {

    const { size, uri } = props;

    const sizeStyle = {
        width: size,
        height: size,
    }
  return (
    <View style={[styles.container, sizeStyle]}>
        <Image source={{uri: uri}}></Image>
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 5,
        borderRadius: 100,
    },
})