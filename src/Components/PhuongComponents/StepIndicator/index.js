import React, { createRef, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StepIndicator from "react-native-step-indicator";
import PropTypes from "prop-types";
import { AppIcons } from "../../../constants/AppResource";

CustomStepIndicator.propTypes = {
  successColor: PropTypes.string,
  errorColor: PropTypes.string,
  successIcon: PropTypes.any,
  errorIcon: PropTypes.any,
  indicatorComponent: PropTypes.element,
  labels: PropTypes.arrayOf(PropTypes.string),
  currentPosition: PropTypes.number,
  isLoading: PropTypes.bool,
  nextTo: PropTypes.func,
};

CustomStepIndicator.defaultProps = {
  successColor: "#2EB553",
  errorColor: "#F5222D",
  successIcon: AppIcons.success,
  errorIcon: AppIcons.error,
  labels: [""],
  currentPosition: 0,
  isLoading: false,
  indicatorComponent: <ActivityIndicator size="small" color="#0000ff" />,
  nextTo: () => {},
};

const ref = createRef();

function CustomStepIndicator(props) {
  const {
    labels,
    successColor,
    errorColor,
    successIcon,
    errorIcon,
    currentPosition,
    isLoading,
    indicatorComponent,
    nextTo,
  } = props;

  const customStyles = {
    stepIndicatorSize: 16,
    currentStepIndicatorSize: 24,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 0,
    stepStrokeWidth: 0,
    stepStrokeUnFinishedColor: "#F3F3F3",
    separatorUnFinishedColor: "#F3F3F3",
    stepIndicatorUnFinishedColor: "#F3F3F3",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
  };

  const [status, setStatus] = useState([]);

  useEffect(() => {
    ref.current = {
      setSuccess: (curPo) => {
        const newStatus = status;
        newStatus[curPo] = true;
        setStatus(newStatus);
      },
      setFailed: (curPo) => {
        const newStatus = status;
        newStatus[curPo] = false;
        setStatus(newStatus);
      },
      clear: () => {
        console.log("clear status", status);
        setStatus([]);
      },
    };
  }, []);

  return (
    <>
      <StepIndicator
        stepCount={labels.length}
        customStyles={{ ...customStyles }}
        currentPosition={currentPosition}
        labels={labels}
        renderLabel={({ label }) => (
          <Text style={{ textAlign: "center" }}>{label}</Text>
        )}
        renderStepIndicator={({ position, stepStatus }) => {
          let icon = null;
          let bgColor = "#F3F3F3";
          switch (stepStatus) {
            case "current":
              if (isLoading) {
                icon = indicatorComponent;
              } else {
                bgColor = status[position] ? successColor : errorColor;
                icon = (
                  <Image
                    source={status[position] ? successIcon : errorIcon}
                    style={{ resizeMode: "contain", height: "70%" }}
                  />
                );
              }
              break;
            case "unfinished":
              icon = null;
              bgColor = "#F3F3F3";
              break;
            case "finished":
              bgColor = status[position] ? successColor : errorColor;
              icon = (
                <Image
                  source={status[position] ? successIcon : errorIcon}
                  style={{ resizeMode: "contain", height: "70%" }}
                />
              );
              break;
            default:
              null;
          }
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: stepStatus === "current" ? 1 : 0,
                borderRadius: 1000,
                borderColor: isLoading
                  ? "#F3F3F3"
                  : status[position]
                  ? successColor
                  : errorColor,
                backgroundColor: bgColor,
              }}
              onPress={() => {
                nextTo(position);
              }}
            >
              {icon}
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

export default CustomStepIndicator;

export const CustomStepIndicatorUtils = {
  setSuccess: (curPo) => {
    if (ref.current) {
      ref.current.setSuccess(curPo);
    }
  },
  setFailed: (curPo) => {
    if (ref.current) {
      ref.current.setFailed(curPo);
    }
  },
  clear: () => {
    if (ref.current) {
      ref.current.clear();
    }
  },
};
