import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';
import PropTypes from "prop-types";

NumberPicker.propTypes = {
    size: PropTypes.number,
    style: PropTypes.string,
}

NumberPicker.defaultProps = {
    size: 24,
    style: 'Ghost'
}

function NumberPicker(props) {

    const [number, setNumber] = useState(0);
    const {size, style} = props;
    let containerStyle = {};
    let textStyle = {
        fontSize: 16,
        color: (style === 'Solid')? ColorsSkin.OnColorBackground:ColorsSkin.Title,
    };
    let sizeStyle = {};

    switch (size) {
        case 48: {
            sizeStyle = {
                width: 106,
                height: 48,
                borderRadius: 8,
            }
        }
        break;

        case 40: {
            sizeStyle = {
                width: 106,
                height: 40,
                borderRadius: 8,
            }
        }
        break;

        case 32: {
            sizeStyle = {
                width: 106,
                height: 32,
                borderRadius: 4,
            }
        }
        break;

        case 24: {
            sizeStyle = {
                width: 106,
                height: 24,
                borderRadius: 4,
            }
        }
        break;
    }

    if(style === 'TextAction'){
        sizeStyle = {
            width: 106,
            height: 24,
            borderRadius: 4,
        }
    }

    switch (style) {
        case 'Solid': {
            containerStyle = {
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                backgroundColor: ColorsSkin.PrimaryColor,
            }
        }
        break;

        case 'Ghost': {
            containerStyle = {
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                backgroundColor: null,
                borderWidth: 1,
                borderColor: ColorsSkin.Disable,
            }
        }
        break;

        case 'TextAction': {
            containerStyle = {
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'row',
            }
        }
        break;
    }

    const pressableStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 24,
        height: 24,
        backgroundColor: (style === 'TextAction')? ColorsSkin.Gray_3Background:null,
        borderRadius: (style === 'TextAction')? 100:0,
    }

  return (
    <View style={[containerStyle, sizeStyle]}>
        <Pressable 
        style={[pressableStyle]}
        onPress={() => setNumber(number-1)}>
            <Text style={[textStyle]}>-</Text>
        </Pressable>

        <Text style={[textStyle]}>{number}</Text>

        <Pressable 
        style={[pressableStyle]}
        onPress={() => setNumber(number+1)}>
            <Text style={[textStyle]}>+</Text>
        </Pressable>
    </View>
  )
}

export default NumberPicker

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    }
})