import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useForm,FormProvider } from "react-hook-form";
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CustomTextField from './CustomTextField';
import {commerce} from "../../Lib/Commerce";
const ShippingForm = () => {
    const [shipCountries, setShipCountries] = useState([]);
    const [shipCountry, setShipCountry] = useState('');

    const [shipSubDivisions, setshipSubDivisions] = useState([]);
    const [shipSubDivision, setshipSubDivision] = useState('');
    
    const [shipOptions, setshipOptions] = useState([]);
    const [shipOption, setshipOption] = useState('');

    const methods = useForm();

    const fetchShippingCountry = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShipCountries(countries);
    }

    return (
        <Box
            component="form"
            autoComplete="off">
            <Typography variant="h5" mb={3}>Shipping Form</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={2}>
                        <CustomTextField required name="firstName" label="FirstName"/>
                        <CustomTextField required name="lastName" label="LastName"/>
                        <CustomTextField required name="email" label="Email"/>
                        <CustomTextField required name="address1" label="Address"/>
                        <CustomTextField required name="city" label="City"/>
                        <CustomTextField required name="zip" label="Zip / Postal Code"/>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Country Name</InputLabel>
                                <Select label="Country Name">
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sub Division</InputLabel>
                                <Select label="Sub Division">
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Shipping Option</InputLabel>
                                <Select label="Shipping Option">
                                    <MenuItem value={10}>Ten</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </Box>
    );
};

export default ShippingForm;