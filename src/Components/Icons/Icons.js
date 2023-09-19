import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'

const Icons = (props) => {

    const { size, uri} = props;

    // const sizeStyle = {
    //     width: size,
    //     height: size,
    // }
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: uri}}></Image>
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({
    image: {
        width: 20,
        height:20,
        //alignContent: 'center',
        //alignItems: 'center',
        //backgroundColor: ColorsSkin.Gray_4Background,
        margin: 5,
        borderRadius: 100,
    },
})