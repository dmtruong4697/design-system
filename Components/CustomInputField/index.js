import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes, {any, oneOfType} from 'prop-types';
import {AppIcons} from '../../constants/AppResource';
import {AppColors, AppTextStyle} from '../../constants/AppStyle';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardTypes} from '../../constants/constants';

CustomInputField.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borRadius: PropTypes.number,
  prefixIcon: PropTypes.any,
  suffixIcon: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  alertColor: PropTypes.string,
  control: PropTypes.any,
  render: PropTypes.object,
  errors: PropTypes.object,
  rules: PropTypes.exact({
    required: PropTypes.any,
    min: PropTypes.any,
    max: PropTypes.any,
    minLength: PropTypes.any,
    maxLength: PropTypes.any,
    pattern: PropTypes.any,
    validate: PropTypes.any,
  }),
  onReset: PropTypes.func,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
};

CustomInputField.defaultProps = {
  name: '',
  status: 'default',
  style: {},
  backgroundColor: AppColors.white,
  borderWidth: 1,
  borderColor: 'transparent',
  borRadius: 8,
  prefixIcon: AppIcons.icSearch.default,
  suffixIcon: AppIcons.icClear,
  height: 50,
  width: 200,
  placeholder: 'Placeholder',
  value: '',
  label: 'Label',
  alertColor: AppColors.error,
  control: any,
  errors: {},
  rules: {
    required: any,
    min: any,
    max: any,
    minLength: any,
    maxLength: any,
    pattern: any,
    validate: any,
  },
  onReset: () => {},
  keyboardType: KeyboardTypes.default,
  onChangeText: () => {},
};

function CustomInputField(props) {
  const {
    name,
    status,
    style,
    backgroundColor,
    borderColor,
    borRadius,
    borderWidth,
    height,
    width,
    placeholder,
    value,
    label,
    alertColor,
    prefixIcon,
    suffixIcon,
    control,
    errors,
    rules,
    onReset,
    keyboardType,
    onChangeText,
  } = props;

  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (errors && errors[name]) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [errors, errors[name]]);

  return (
    <>
      <View
        style={{
          backgroundColor:
            status === 'disable' ? AppColors.disable : AppColors.white,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: height,
          borderRadius: borRadius,
          width: width,
          borderWidth: borderWidth,
          borderColor: errors && errors[name] ? alertColor : borderColor,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={prefixIcon} style={{resizeMode: 'contain'}} />
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            height: '100%',
            justifyContent: 'center',
          }}>
          <View style={{height: '50%'}}>
            <Text
              style={{
                color:
                  status === 'disable'
                    ? 'rgba(191, 191, 191, 1)'
                    : AppColors.primary,
                ...AppTextStyle.regular1,
              }}>
              {label}
            </Text>
          </View>
          <View style={{height: '50%'}}>
            {control && name && (
              <Controller
                control={control}
                rules={rules}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    style={{margin: 0, padding: 0}}
                    onBlur={onBlur}
                    onChangeText={value => {
                      onChange(value);
                      onChangeText(name, value);
                    }}
                    value={value}
                    editable={!(status === 'disable')}
                  />
                )}
                name={name}
              />
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            onReset(name);
          }}>
          <Image source={suffixIcon} style={{resizeMode: 'contain'}} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          height: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 25],
          }),
          opacity: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}>
        {errors && errors[name] && (
          <Text
            style={{
              color: alertColor && alertColor,
            }}>
            {errors[name].message}
          </Text>
        )}
      </Animated.View>
    </>
  );
}

export default CustomInputField;
