import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import CustomInputField from '../CustomInputField';
import PropTypes from 'prop-types';

CustomForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
};

CustomForm.defaultProps = {
  fields: [''],
};

function CustomForm(props) {
  const {fields, control, resetField, handleSubmit, errors} = props;

  const _renderContent = () =>
    fields &&
    fields.map((field, index) => {
      const {label, name, placeholder} = field;
      return (
        // <CustomInputField
        //   control={control}
        //   onReset={resetField}
        //   name={name}
        //   key={index}
        //   label={label}
        //   placeholder={placeholder}
        // />
        <Button />
      );
    });

  return <View style={{}}>{_renderContent()}</View>;
}

export default CustomForm;
