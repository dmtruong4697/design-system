import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import PropTypes from "prop-types";

function Icons(props) {

    const { size, uri} = props;

    const sizeStyle = {
        width: size,
        height: size,
    }
  return (
    <View style={styles.container}>
        <Image style={[styles.image, sizeStyle]} source={{uri: uri}}></Image>
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({
    image: {
        // width: 20,
        // height:20,
        //alignContent: 'center',
        //alignItems: 'center',
        //backgroundColor: ColorsSkin.Gray_4Background,
        margin: 5,
        borderRadius: 100,
    },
})