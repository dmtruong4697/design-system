import React from 'react';
import {View} from 'react-native';
import {AppColors} from '../../constants/AppStyle';

function Divider(props) {
  const {style} = props;
  return (
    <View
      style={{
        ...style,
        height: 1,
        backgroundColor: AppColors.grey3,
        marginVertical: 20,
      }}
    />
  );
}

export default Divider;
