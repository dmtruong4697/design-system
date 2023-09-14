import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin'

const DateElement = (props) => {

    const {state, eventBadge, content} = props;
    let stateStyle = {};
    let textStyle = {};

    switch (state) {
        case 'Selected': {
            stateStyle = {
                width: 24,
                height: 24,
                borderRadius: 100,
                backgroundColor: ColorsSkin.PrimaryColor,
                justifyContent: 'center',
                alignItems: 'center',
            }
            textStyle = {
                color: ColorsSkin.OnColorBackground,
            }
        }
        break;

        case 'Present': {
            stateStyle = {
                width: 24,
                height: 24,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: ColorsSkin.PrimaryColor,
                backgroundColor: null,
                justifyContent: 'center',
                alignItems: 'center',
            }
            textStyle = {
                color: ColorsSkin.Title,
            }
        }
        break;

        case 'Default': {
            stateStyle = {
                width: 24,
                height: 24,
                borderRadius: 100,
                backgroundColor: null,
                justifyContent: 'center',
                alignItems: 'center',
            }
            textStyle = {
                color: ColorsSkin.Title,
            }
        }
        break;

        case 'Disable': {
            stateStyle = {
                width: 24,
                height: 24,
                borderRadius: 100,
                backgroundColor: null,
                justifyContent: 'center',
                alignItems: 'center',
            }
            textStyle = {
                color: ColorsSkin.Disable,
            }
        }
        break;
    }

    // const stateStyle = {
    //     width: 24,
    //     height: 24,
    //     borderRadius: 100,
    //     backgroundColor: ColorsSkin.PrimaryColor,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }

    const eventBadgeStyle = {
        width: 8,
        height: 8,
        borderRadius: 100,
        backgroundColor: ColorsSkin.PrimaryColor,
        margin: 3,
    }

    // const textStyle = {
    //     color: (state === 'Selected')? ColorsSkin.OnColorBackground:ColorsSkin.Title,
    // }

  return (
    <View style={[styles.container]}>
      <View style={[stateStyle]}>
        <Text style={[textStyle]}>{content}</Text>
      </View>

      {(eventBadge === 'Yes') && <View style={[eventBadgeStyle]}></View>}
    </View>
  )
}

export default DateElement

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 40,
        //backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
    }
})