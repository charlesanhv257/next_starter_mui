"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 6 }}>
    <Typography variant="body2" color="text.secondary">
      &copy; {new Date().getFullYear()} Next.js MUI Atomic Starter. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
