import React, { createContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import CustomInputField from "../../CustomInputField";
import PropTypes, { any, oneOfType } from "prop-types";
import { InputType } from "../../../constants/constants";
import CustomCheckBox from "../../CustomCheckBox";

FormContainer.propTypes = {
  onSubmitting: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.object),
  customSubmitButton: PropTypes.func,
  onChangeForm: PropTypes.func,
};

FormContainer.defaultProps = {
  onSubmitting: () => {},
  fields: [{}],
  customSubmitButton: () => {},
  onChangeForm: () => {},
};

function FormContainer(props) {
  const { children, onSubmitting, fields, customSubmitButton, onChangeForm } =
    props;

  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValueFilter,
  });

  const textInput = (field, index, errors) => {
    const { label, name, placeholder, rules } = field;
    return (
      <CustomInputField
        control={control}
        onReset={resetField}
        rules={{ ...rules }}
        borderWidth={1}
        borderColor={"black"}
        name={name}
        key={index}
        onChangeText={onChangeForm}
        label={label}
        errors={errors}
        placeholder={placeholder}
      />
    );
  };

  const checkbox = (field, index) => {
    const { label, name, required } = field;
    return (
      <CustomCheckBox
        control={control}
        key={index}
        name={name}
        errors={errors}
        label={label}
        required={required}
      />
    );
  };

  const _renderContent = (errors) =>
    fields &&
    fields.map((field, index) => {
      switch (field?.type) {
        case InputType.textInput:
          return textInput(field, index, errors);
        case InputType.checkBox:
          return checkbox(field, index, errors);
        default:
          return textInput(field, index, errors);
      }
    });

  const defaultValueFilter = {};
  fields.forEach(
    (field) =>
      (defaultValueFilter[field.name] =
        field?.type === InputType.checkBox ? false : ""),
  );

  const onSubmit = (data) => onSubmitting(data);

  const sayHello = () => {
    console.log(errors);
  };

  return (
    <View>
      {_renderContent(errors)}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {customSubmitButton(sayHello)}
      {/* {React.cloneElement(children, {
        sayHello,
      })} */}
    </View>
  );
}

export default FormContainer;
