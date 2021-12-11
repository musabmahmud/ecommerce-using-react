import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useForm,FormProvider } from "react-hook-form";
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CustomTextField from './CustomTextField';
import {commerce} from "../../Lib/Commerce";
const ShippingForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shipCountry, setShippingCountry] = useState('');

    const [shipSubDivisions, setshipSubDivisions] = useState([]);
    const [shipSubDivision, setshipSubDivision] = useState('');
    
    const [shipOptions, setshipOptions] = useState([]);
    const [shipOption, setshipOption] = useState('');

    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
        // const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        const url = new URL(
            `https://api.chec.io/v1/services/locale/${checkoutToken.id}/countries`
        );
        
        let headers = {
            "X-Authorization": "pk_36656c5d3d55995f7cc0722b6c12b1abc3db08a7acb89",
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        
        fetch(url, {
            method: "GET",
            headers: headers,
        })
        .then(response => response.json())
        .then(json => setShippingCountries(json.countries));

        // setShippingCountry(Object.keys(countries)[0]);
    };
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
      }, []);

    console.log(shippingCountries);

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