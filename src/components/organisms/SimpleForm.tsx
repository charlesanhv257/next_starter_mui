"use client";
import React, { useState } from 'react';
import FormField from '../molecules/FormField';

const SimpleForm: React.FC = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (data: { value: string }) => {
    setSubmitted(data.value);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <FormField
        label="Your Name"
        onSubmit={handleSubmit}
        buttonText="Send"
      />
      {submitted && <div style={{ marginTop: 16 }}>Hello, {submitted}!</div>}
    </div>
  );
};

export default SimpleForm;
