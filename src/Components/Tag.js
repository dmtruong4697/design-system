import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';
import Icons from './Icons/Icons';
import PropTypes from "prop-types";

Tag.propTypes = {
    size: PropTypes.number,
    position: PropTypes.string,
    content: PropTypes.string,
    iconUri: PropTypes.string,
    iconSize: PropTypes.number
}

Tag.defaultProps = {
    size: 48,
    position: 'IconRight',
    content: 'Tag',
    iconUri: '',
    iconSize: 20,
}

function Tag(props) {
    
    const { size, position, content, iconUri, iconSize } = props;

    let styleStyle = {};
    let sizeStyle = {};

    switch (size) {
        case 48:
            sizeStyle = {
                width: 'auto',
                height: 48,
                paddingTop: 12,
                paddingRight: 24,
                paddingBottom: 12,
                paddingLeft: 24,
                borderRadius: 48,
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
                borderRadius: 40,
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
                borderRadius: 32,
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
                borderRadius: 24,
            }
        break;
    }

    const textColorStyle = {
        color: ColorsSkin.PrimaryColor,
        marginLeft: 0,
        marginRight: 0,
    }

  return (
    <View>
    <Pressable style={[styles.container, sizeStyle]}>
        { (position === 'IconLeft' || position === 'IconOnly') && <Icons size={20} uri={iconUri}></Icons>}
        { position !== 'IconOnly' && <Text style={[textColorStyle]}>{content}</Text>}
        { position === 'IconRight' && <Icons size={iconSize} uri={iconUri}></Icons>}
    </Pressable>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: ColorsSkin.PrimaryTagBackgroundColor,
        
    }
})