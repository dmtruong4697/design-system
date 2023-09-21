import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from "prop-types";
import { AppIcons } from '../constants/AppResource';

TestButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  prefixIcon: PropTypes.string,
  suffixIcon:PropTypes.string
};

TestButton.defaultProps = {
  title: '',
  style: {},
  prefixIcon: undefined,
  suffixIcon:undefined
};

function TestButton (props) {
    const {title, style, prefixIcon, suffixIcon} = props
  return (
    <TouchableOpacity style={{width:100, height:50, backgroundColor:'red', justifyContent:'center', alignItems:'center', flexDirection:'row', borderRadius: title && title.length>0 ?undefined:100000, ...style}}>
        {prefixIcon && <View>
            <Image source={prefixIcon}/>
        </View>}
        {title && <Text>{title}</Text>}
        {suffixIcon && <View>
            <Image source={suffixIcon}/>
        </View>}
    </TouchableOpacity>
  )
}

export default TestButton
