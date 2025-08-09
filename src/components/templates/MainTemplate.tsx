

import React from 'react';
import Container from '@mui/material/Container';
import SimpleForm from '../organisms/SimpleForm';
import AdvancedForm from '../organisms/AdvancedForm';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';


const MainTemplate: React.FC = () => (
  <>
    <Header />
    <Container maxWidth="sm" style={{ paddingTop: 40 }}>
      <h1>Welcome to the Next.js MUI Atomic Starter</h1>
      <SimpleForm />
      <h2 style={{ marginTop: 40 }}>Advanced Form Example</h2>
      <AdvancedForm />
    </Container>
    <Footer />
  </>
);

export default MainTemplate;
