import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const MenuItems = (props) => {
const {data}= props;

const [selected, setSelected] = useState()  
    
    const _renderMenuItem =()=> (
        data?.map((item,index) => {
            return <TouchableOpacity key={index} onPress={() => {
                setSelected(index)}} style={{opacity:selected === index ? 1 : 0.5}}>
                <Text >{item.title} {index}</Text>
            </TouchableOpacity>
        }))
    

    return (
       
        <View>
            <Text>Page title</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>{_renderMenuItem()}</View>
        </View>
      )
}
export default MenuItems
