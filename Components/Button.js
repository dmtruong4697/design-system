import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ColorsStyle from '../Styles/ColorsStyle';
import ColorsSkin from '../Styles/ColorsSkin';
import Icons from '../Icons/Icons';

const Button = (props) => {
    
    const { style, size, position, state, content } = props;

    let styleStyle = {};
    let sizeStyle = {};
    let positionStyle = {};
    let stateColor = '';
    let textColor = '';

    switch (state) {
        case 'Primary':
            stateColor = ColorsSkin.PrimaryColor;
            break;
        case 'Defaul':
            stateColor = ColorsSkin.Gray_3Background;
            break;
        case 'Success':
            stateColor = ColorsSkin.SuccessPrimary;
            break;
        case 'Error':
            stateColor = ColorsSkin.ErrorPrimary;
            break;
        case 'Warning':
            stateColor = ColorsSkin.WarningPrimary;
            break;
        case 'Disable':
            stateColor = ColorsSkin.DisableBackground;
            break;
    }

    switch (style) {
        case 'Solid':
            styleStyle = {
                backgroundColor: stateColor,
            };
            textColor = '#FFFFFF';
        break;
        case 'Ghost':
            styleStyle = {
                borderWidth: 1,
                backgroundColor: null,
                borderColor: stateColor,
            }
            textColor = stateColor;
        break;
        case 'Dash':
            styleStyle = {
                borderWidth: 1,
                borderStyle: 'dashed',
                backgroundColor: null,
                borderColor: stateColor,
            }
            textColor = stateColor;
    }

    switch (size) {
        case 48:
            sizeStyle = {
                width: 'auto',
                height: 48,
                paddingTop: 12,
                paddingRight: 24,
                paddingBottom: 12,
                paddingLeft: 24,
                borderRadius: 8,
            }
            break;
        case 40:
            sizeStyle = {
                width: 'auto',
                height: 40,
                paddingTop: 9,
                paddingRight: 16,
                paddingBottom: 9,
                paddingLeft: 16,
                borderRadius: 8,
            }
            break;
        case 32:
            sizeStyle = {
                width: 'auto',
                height: 32,
                paddingTop: 5,
                paddingRight: 12,
                paddingBottom: 5,
                paddingLeft: 12,
                borderRadius: 4,
            }
            break;
        case 24:
            sizeStyle = {
                width: 'auto',
                height: 24,
                paddingTop: 1,
                paddingRight: 8,
                paddingBottom: 1,
                paddingLeft: 8,
                borderRadius: 4,
            }
        break;
    }

    const textColorStyle = {
        color:(state === 'Disable')? ColorsSkin.SecondaryText:textColor,
        marginLeft: 4,
        marginRight: 4,
    }

  return (
    <TouchableOpacity style={[styles.container, sizeStyle, styleStyle]}>
        { (position === 'IconLeft' || position === 'IconOnly') && <Icons size={20}></Icons>}
        { position !== 'IconOnly' && <Text style={[textColorStyle]}>{content}</Text>}
        { position === 'IconRight' && <Icons size={20}></Icons>}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
    }
})