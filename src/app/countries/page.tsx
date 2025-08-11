'use client';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '../../services/apolloClient';
import AtomButton from '../../components/atoms/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      capital
      currency
      phone
      continent {
        name
      }
      languages {
        name
        native
      }
    }
  }
`;

import CountryTemplate from '../../components/templates/CountryTemplate';

import type { CountriesData } from '../../types/country';

const CountriesPage: React.FC = () => {
  const { data, loading, error, refetch } = useQuery<CountriesData>(GET_COUNTRIES, { client });
  const [selected, setSelected] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelected(event.target.value);
  };

  const country = data?.countries.find((c) => c.code === selected);

  return (
    <CountryTemplate>
      <Box maxWidth={500} mx="auto" mt={6}>
        <Typography variant="h4" gutterBottom align="center">
          Country Explorer
        </Typography>
        <Box display="flex" justifyContent="center" mb={3}>
          <AtomButton variant="outlined" onClick={() => refetch()}>
            Refresh List
          </AtomButton>
        </Box>
        {loading && <Typography align="center">Loading...</Typography>}
        {error && (
          <Typography color="error" align="center">
            Error: {error.message}
          </Typography>
        )}
        {data && (
          <FormControl fullWidth>
            <InputLabel id="country-select-label">Select a country</InputLabel>
            <Select
              labelId="country-select-label"
              value={selected}
              label="Select a country"
              onChange={handleChange}
            >
              {data.countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.emoji} {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {country && (
          <Card sx={{ mt: 4, bgcolor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {country.emoji} {country.name}
              </Typography>
              <Typography>
                Capital: <b>{country.capital || 'N/A'}</b>
              </Typography>
              <Typography>
                Continent: <b>{country.continent.name}</b>
              </Typography>
              <Typography>
                Currency: <b>{country.currency || 'N/A'}</b>
              </Typography>
              <Typography>
                Phone code: <b>+{country.phone}</b>
              </Typography>
              <Typography>
                Languages:{' '}
                <b>{country.languages.map((l) => `${l.name} (${l.native})`).join(', ') || 'N/A'}</b>
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </CountryTemplate>
  );
};

export default CountriesPage;
