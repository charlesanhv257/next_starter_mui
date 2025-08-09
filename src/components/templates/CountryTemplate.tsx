import React from 'react';
import Container from '@mui/material/Container';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface CountryTemplateProps {
  children: React.ReactNode;
}

const CountryTemplate: React.FC<CountryTemplateProps> = ({ children }) => (
  <>
    <Header />
    <Container maxWidth="md" sx={{ pt: 6, pb: 6 }}>
      {children}
    </Container>
    <Footer />
  </>
);

export default CountryTemplate;
