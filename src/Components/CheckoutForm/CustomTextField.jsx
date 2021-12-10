import React from 'react';
import { TextField,Grid, FormControl } from '@mui/material';
import { useFormContext,Controller } from 'react-hook-form';
const CustomTextField = ({name,label,required}) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                as={TextField}
                control={control}
                name={name}
                required={required}
                render = {({ field })=> (
                <FormControl fullWidth >
                    <TextField
                        fullWidth
                        label={label}
                        required
                        autoFocus
                    />
                </FormControl>
               )}
            />
        </Grid>
    );
};

export default CustomTextField;