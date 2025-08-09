"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Countries', href: '/countries' },
];

const Header: React.FC = () => (
  <AppBar position="static" color="primary" enableColorOnDark>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        🌍 Next.js MUI Starter
      </Typography>
      <Box>
        {navLinks.map((link) => (
          <Button
            key={link.href}
            color="inherit"
            component={Link}
            href={link.href}
            sx={{ ml: 1 }}
          >
            {link.label}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
