import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin'

const PaginationItems = (props) => {

    const {status, content} = props;
    let statusStyle, textStyle;

    switch (status) {
        case 'Default': {
            statusStyle = {
                backgroundColor: ColorsSkin.Gray_3Background,
            }
            textStyle = {
                fontSize: 16,
                color: ColorsSkin.Title,
            }
        }
        break;

        case 'Active': {
            statusStyle = {
                backgroundColor: ColorsSkin.InfoPrimary,
            }
            textStyle = {
                fontSize: 16,
                color: ColorsSkin.OnColorBackground,
            }
        }
        break;

        case 'Disable': {
            statusStyle = {
                backgroundColor: ColorsSkin.DisableBackground,
            }
            textStyle = {
                fontSize: 16,
                color: ColorsSkin.OnColorBackground,
            }
        }
        break;
    }
  return (
    <View style={[styles.container, statusStyle]}>
      <Text style={[textStyle]}>{content}</Text>
    </View>
  )
}

export default PaginationItems

const styles = StyleSheet.create({
    container: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
})