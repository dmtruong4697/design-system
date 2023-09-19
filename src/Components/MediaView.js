import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';

const MediaView = (props) => {

    const {style, size, mediaUri} = props;

    const mediaStyle = {
        borderRadius: (style === 'BoundingBoxCircle')? 1000:8,
        backgroundColor: ColorsSkin.Gray_3Background,
    }

    const sizeStyle = {
        height: size,
        width: size,
    }

  return (
    <View style={[styles.container, sizeStyle, mediaStyle]}>
      <Image style={[mediaStyle, sizeStyle]} source={{uri: mediaUri}}>
      </Image>
    </View>
  )
}

export default MediaView

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsSkin.Gray_3Background,
  }
})