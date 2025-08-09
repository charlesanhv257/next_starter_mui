import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const AtomTextField: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default AtomTextField;
