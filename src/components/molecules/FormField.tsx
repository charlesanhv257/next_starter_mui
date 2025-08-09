"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import AtomTextField from '../atoms/TextField';
import AtomButton from '../atoms/Button';


interface FormFieldProps {
  label: string;
  defaultValue?: string;
  onSubmit: (data: { value: string }) => void;
  buttonText?: string;
}


const FormField: React.FC<FormFieldProps> = ({ label, defaultValue = '', onSubmit, buttonText = 'Submit' }) => {
  const { handleSubmit, control, reset } = useForm<{ value: string }>({
    defaultValues: { value: defaultValue },
  });

  const submitHandler = (data: { value: string }) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} style={{ display: 'flex', gap: 8 }}>
      <Controller
        name="value"
        control={control}
        render={({ field }) => (
          <AtomTextField
            label={label}
            variant="outlined"
            size="small"
            {...field}
          />
        )}
      />
      <AtomButton type="submit" variant="contained" color="primary">
        {buttonText}
      </AtomButton>
    </form>
  );
};

export default FormField;
