import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import ToolTipArrow from './ToolTipArrow';
import PropTypes from "prop-types";
import ColorsSkin from '../../Styles/ColorsSkin';

ToolTip.propTypes = {
  arrowPosition: PropTypes.string,
  align: PropTypes.string,
  message: PropTypes.string,
}

ToolTip.defaultProps = {
  arrowPosition: "Bottom",
  align: "Left",
  message: "Message",
}

function ToolTip (props) {

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
      {/* <CustomButton
        style='Solid'
        size={32}
        state='Primary'
        position='TextOnly'
        content={message}
      ></CustomButton> */}
      <View style={styles.messageBox}>
        <Text style={{color: ColorsSkin.OnColorBackground}}>{message}</Text>
      </View>
    </View>
  )
}

export default ToolTip

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '100%'
        //flexDirection: 'column'
    },
    messageBox: {
      borderRadius: 8,
      backgroundColor: ColorsSkin.PrimaryColor,
      padding: 5,
    }
})