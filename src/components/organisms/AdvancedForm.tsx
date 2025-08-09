"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AtomTextField from '../atoms/TextField';
import AtomButton from '../atoms/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

interface FormData {
  name: string;
  email: string;
  age: number;
}

const AdvancedForm: React.FC = () => {
  const { handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: { name: '', email: '', age: 18 },
  });
  const [result, setResult] = useState<FormData | null>(null);

  const onSubmit = async (data: FormData) => {
    // Giả lập submit async
    await new Promise(res => setTimeout(res, 1000));
    setResult(data);
    reset();
  };

  return (
    <Box maxWidth={400} mx="auto" mt={4}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <AtomTextField
              label="Name"
              error={!!errors.name}
              helperText={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <AtomTextField
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          rules={{
            required: 'Age is required',
            min: { value: 18, message: 'Must be at least 18' },
            max: { value: 99, message: 'Must be under 100' },
          }}
          render={({ field }) => (
            <AtomTextField
              label="Age"
              type="number"
              error={!!errors.age}
              helperText={errors.age?.message}
              {...field}
            />
          )}
        />
        <AtomButton type="submit" variant="contained" color="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </AtomButton>
      </form>
      {result && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Submitted: {JSON.stringify(result)}
        </Alert>
      )}
    </Box>
  );
};

export default AdvancedForm;
