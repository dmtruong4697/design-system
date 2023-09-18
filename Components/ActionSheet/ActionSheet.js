import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ActionState from './ActionState'
import ColorsSkin from '../../Styles/ColorsSkin'
import TypoSkin from '../../Styles/TypoSkin'
import ListTitle from '../ListTitle'
import Button from '../Button/Button'

const ActionSheet = (props) => {

    const {WithSubtitle, ItemNumber} = props;

  return (
    <View style={styles.container}>
        <View style={[styles.actionSheets]}>
          {(WithSubtitle === 'Yes') && <ListTitle
            contentViewAlign='Center'
            withMedia='No'
          ></ListTitle>}

          <Pressable>
            <ActionState
              state='PositiveState'
              content='Action'
            ></ActionState>
          </Pressable>

          <Pressable style={styles.ActionState}>
            <ActionState
              state='PositiveState'
              content='Action'
            ></ActionState>
          </Pressable>

          <Pressable style={styles.ActionState}>
            <ActionState
              state='PositiveState'
              content='Action'
            ></ActionState>
          </Pressable>

        </View>

        <View style={[styles.navigationBottom]}>
          <Button
            style='TextAction'
            size={48}
            state='Primary'
            position='TextOnly'
            content='Cancel'
          ></Button>
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
    }
})