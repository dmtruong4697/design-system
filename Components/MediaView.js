import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin';

const MediaView = (props) => {

    const {style, size} = props;

    const styleStyle = {
        borderRadius: (style === 'BoundingBoxCircle')? 1000:8,
        backgroundColor: ColorsSkin.Gray_3Background,
    }

    const sizeStyle = {
        height: size,
        width: size,
    }

  return (
    <View style={[styleStyle, sizeStyle]}>
    </View>
  )
}

export default MediaView

const styles = StyleSheet.create({})