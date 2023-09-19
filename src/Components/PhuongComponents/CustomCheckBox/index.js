import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import PropTypes, { any } from "prop-types";
import { Controller } from "react-hook-form";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AppColors } from "../../../constants/AppStyle";

CustomCheckBox.propTypes = {
  control: PropTypes.any,
  required: PropTypes.exact({
    value: PropTypes.bool,
    message: PropTypes.string,
  }),
  name: PropTypes.string,
  errors: PropTypes.object,
  alertColor: PropTypes.string,
  label: PropTypes.string,
  checkedIconSource: PropTypes.string,
  fillColor: PropTypes.string,
  unfillColor: PropTypes.string,
  iconStyle: PropTypes.object,
  innerIconStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

CustomCheckBox.defaultProps = {
  control: any,
  required: {
    value: false,
    message: "",
  },
  name: "",
  errors: {},
  alertColor: AppColors.error,
  label: "Label",
  checkedIconSource: undefined,
  fillColor: "red",
  unfillColor: "white",
  iconStyle: { borderColor: "black" },
  innerIconStyle: { borderWidth: 2 },
  textStyle: { fontFamily: "JosefinSans-Regular" },
};

function CustomCheckBox(props) {
  const {
    control,
    required,
    name,
    errors,
    alertColor,
    label,
    checkedIconSource,
    fillColor,
    unfillColor,
    iconStyle,
    innerIconStyle,
    textStyle,
  } = props;

  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(errors);
    if (errors && errors[name]) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      console.log("have error");
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
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, marginHorizontal: 10 }} numberOfLines={2}>
          {label}
        </Text>
        <Controller
          control={control}
          rules={{ required: { ...required } }}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <BouncyCheckbox
              size={25}
              fillColor={fillColor}
              unfillColor={unfillColor}
              disableText
              iconStyle={iconStyle}
              checkIconImageSource={checkedIconSource}
              innerIconStyle={innerIconStyle}
              textStyle={textStyle}
              onPress={(isChecked) => {
                onChange(isChecked);
              }}
            />
          )}
        />
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
        }}
      >
        {errors && errors[name] && (
          <Text style={{ color: alertColor && alertColor }}>
            {errors[name].message}
          </Text>
        )}
      </Animated.View>
    </>
  );
}

export default CustomCheckBox;
