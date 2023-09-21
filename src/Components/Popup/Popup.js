import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomButton from '../CustomButton'

const Popup =(props) =>{
    return(

    <View style={{width:382,height:196,padding :12}}>
      <View style ={{backgroundColor:'blue',alignContent:'center'}} >
        <Text style={{ textAlign: 'center'}} > Popup Over </Text>
        <Text  style={{ textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
      </View>
      <View style={{ flexDirection:'row',width:334}}>
        <CustomButton
         
        style='Solid'
        size={40}
        state='Primary'
        content='Cancel'
      ></CustomButton>
        <CustomButton style='Solid'
        size={40}
        state='Primary'
        content='Ok'></CustomButton>
      </View>

    </View>

    )
}
export default Popup