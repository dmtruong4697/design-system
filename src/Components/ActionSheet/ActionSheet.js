import { StyleSheet, Text, View, Pressable, FlatList, } from 'react-native'
import React from 'react'
import ActionState from './ActionState'
import ListTitle from '../ListTitle'
import CustomButton from '../Button'
import ColorsSkin from '../../../Styles/ColorsSkin'

const ActionSheet = (props) => {

    const {WithSubtitle, ItemNumber, actionStateData} = props;

  return (
    <View style={styles.container}>
        <View style={[styles.actionSheets]}>
          {(WithSubtitle === 'Yes') && <ListTitle
            contentViewAlign='Center'
            withMedia='No'
          ></ListTitle>}

        <FlatList style={styles.flatList}
            data={actionStateData}
            renderItem={({item}) => 
            <View style={styles.ActionState}>
              <ActionState
                state={item.state}
                content={item.content}
              ></ActionState>
            </View>}
            keyExtractor={item => item.id}
        />
        </View>

        <View style={[styles.navigationBottom]}>
          <CustomButton
            style='TextAction'
            size={48}
            state='Primary'
            position='TextOnly'
            content='Cancel'
          ></CustomButton>
        </View>
    </View>
  )
}

export default ActionSheet

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '90%',
        justifyContent: 'center',
        height: 'auto',
    },
    actionSheets: {
      backgroundColor: ColorsSkin.OnColorBackground,
      borderRadius: 8,
    },
    navigationBottom: {
      //backgroundColor: 'pink'
      backgroundColor: ColorsSkin.OnColorBackground,
      borderRadius: 8,
      marginTop: 10,
    },
    ActionState: {
      borderTopWidth: 1,
      borderTopColor: ColorsSkin.Disable
    },
    flatList: {
      height: 'auto',
      flexGrow: 0
    },
})