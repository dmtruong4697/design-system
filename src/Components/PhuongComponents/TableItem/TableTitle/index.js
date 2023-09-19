import React from "react";
import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import { AppIcons } from "../../../../constants/AppResource";

TableTitle.propTypes = {
  title: PropTypes.string,
  iconSrc: PropTypes.any,
};

TableTitle.defaultProps = {
  title: "Table Title",
  iconSrc: AppIcons.collapse,
};

function TableTitle(props) {
  const { title, iconSrc } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
      }}
    >
      <Text style={{ color: "black" }}>{title}</Text>
      <Image source={iconSrc} />
    </View>
  );
}

export default TableTitle;
