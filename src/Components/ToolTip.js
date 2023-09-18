import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToolTipArrow from './ToolTipArrow'
import Button from './Button'

const ToolTip = (props) => {

    const {arrowPosition, align, message} = props;
    let top, left, rotate;
    let arrowPositionStyle = {};
    let containerStyle = {};

    switch (arrowPosition) {
        case 'Top': {
            containerStyle = {
              flexDirection: 'column',
            }
            rotate = "0deg";
            if(align === 'Left'){
              arrowPositionStyle = {
                width: 14,
                height: 14,
                top: 6,
                alignSelf: 'flex-start',
                left: 12,
              }
            } else if(align === 'Right'){
              arrowPositionStyle = {
                width: 14,
                height: 14,
                top: 6,
                alignSelf: 'flex-end',
                right: 12,
              }
            } else if(align === 'Center'){
              arrowPositionStyle = {
                width: 14,
                height: 14,
                top: 6,
                alignSelf: 'center',
              }
            }
        }
        break;
        case 'Bottom': {
          containerStyle = {
            flexDirection: 'column-reverse',
          }
          rotate = "180deg";
          if(align === 'Left'){
            arrowPositionStyle = {
              width: 14,
              height: 14,
              //top: 46,
              alignSelf: 'flex-start',
              left: 12,
            }
          } else if(align === 'Right'){
            arrowPositionStyle = {
              width: 14,
              height: 14,
              //top: 46,
              alignSelf: 'flex-end',
              right: 12,
            }
          } else if(align === 'Center'){
            arrowPositionStyle = {
              width: 14,
              height: 14,
              //top: 46,
              alignSelf: 'center',
            }
          }
        }
        break;
        case 'Center': {
          if(align === 'Left'){
            containerStyle = {
              flexDirection: 'row',
            };
            rotate = "270deg";
            arrowPositionStyle = {
              width: 14,
              height: 14,
              alignSelf: 'center',
              left: 3,
            }
          } else if(align === 'Right'){
            containerStyle = {
              flexDirection: 'row-reverse',
            };
            rotate = "90deg";
            arrowPositionStyle = {
              width: 14,
              height: 14,
              alignSelf: 'center',
              right: -3,
            }
          }
        }
        break;
    }


  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[arrowPositionStyle]}>
        <ToolTipArrow
          rotate={rotate}
        ></ToolTipArrow>
      </View>
      <Button
        style='Solid'
        size={32}
        state='Primary'
        position='TextOnly'
        content={message}
      ></Button>
    </View>
  )
}

export default ToolTip

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        //flexDirection: 'column'
    },
})