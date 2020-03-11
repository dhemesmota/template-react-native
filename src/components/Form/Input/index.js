import React, { useRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { Container, TInput, Label, Error } from './styles';

export default function Input({ style, name, label, icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={style} error={error}>
      {label && <Label>{label}</Label>}

      {icon && <Icon name={icon} size={20} color="#333040" />}

      <TInput ref={inputRef} defaultValue={defaultValue} {...rest} />

      {error && <Error>{error}</Error>}
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  label: null,
  icon: null,
};
