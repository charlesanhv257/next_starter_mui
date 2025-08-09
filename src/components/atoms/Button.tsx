import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';

const AtomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

export default AtomButton;
