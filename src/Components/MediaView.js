import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';
import PropTypes from "prop-types";

MediaView.propTypes = {
  style: PropTypes.string,
  size: PropTypes.number,
  mediaUri: PropTypes.string,
};

MediaView.defaultProps = {
  style: 'BoundingBoxCircle',
  size: 60,
  mediaUri: '',
}

function MediaView(props) {

    const {style, size, mediaUri} = props;

    const mediaStyle = {
        borderRadius: (style === 'BoundingBoxCircle')? 1000:8,
        //backgroundColor: ColorsSkin.Gray_3Background,
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