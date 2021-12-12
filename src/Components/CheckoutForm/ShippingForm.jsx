import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useForm,FormProvider } from "react-hook-form";
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CustomTextField from './CustomTextField';
import {commerce} from "../../Lib/Commerce";
const ShippingForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [ShippingCountry, setShippingCountry] = useState('');

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

    };

    const countries =  Object.entries(shippingCountries).map(([code, nameCountry]) => ({id: code, label : nameCountry}));

    const fetchSubdivisions = async (countryCode) => {
        
        const url = new URL(
            `https://api.chec.io/v1/services/locale/${countryCode}/subdivisions`
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
        .then(json => setshipSubDivisions(json.subdivisions));
    };

    const subdivisions =  Object.entries(shipSubDivisions).map(([code, namediv]) => ({id: code, label : namediv}));
                                    
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
      }, []);

    useEffect(() => {
    if (ShippingCountry) fetchSubdivisions(ShippingCountry);
    }, [ShippingCountry]);

    return (
        <Box
            component="form"
            autoComplete="off">
            <Typography variant="h5" mb={3}>Shipping Form</Typography>
            <FormProvider {...methods}>
                    <Grid container spacing={2}>
                        <CustomTextField required name="firstName" label="FirstName"/>
                        <CustomTextField required name="lastName" label="LastName"/>
                        <CustomTextField required name="email" label="Email"/>
                        <CustomTextField required name="address1" label="Address"/>
                        <CustomTextField required name="city" label="City"/>
                        <CustomTextField required name="zip" label="Zip / Postal Code"/>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Shipping Country</InputLabel>
                                <Select value={ShippingCountry} label="Shipping Country" onChange={(e) => setShippingCountry(e.target.value)}>
                                    {countries.map((country) => 
                                    <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sub Division</InputLabel>
                                <Select value={shipSubDivision} label="Sub Division" onChange={(e) => setshipSubDivision(e.target.value)}>
                                    {subdivisions.map((subdivision) => 
                                     <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
            </FormProvider>
        </Box>
    );
};

export default ShippingForm;