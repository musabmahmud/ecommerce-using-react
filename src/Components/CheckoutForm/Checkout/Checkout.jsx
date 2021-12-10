import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShippingForm from '../ShippingForm';
import PaymentForm from '../PaymentForm';
import Paper from '@mui/material/Paper';
import useStyles from './styles.js';
const Checkout = () => {
    const steps = ['Shipping Address', 'Payment Details'];
    
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    const classes = useStyles();

    const Form = () => activeStep === 0 
        ? <ShippingForm/>
        : <PaymentForm/>
    return (
        <Box>
        <div className={classes.toolbar} />
        <div className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper nonLinear activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                    ))}
                </Stepper>
                <Grid container p={3}>
                    <Grid item xs={12}>
                        {activeStep === steps.length 
                        ? "Completed"
                        : <Form/>}
                    </Grid>
                </Grid>
            </Paper>
        </div>
        </Box>
    );
};

export default Checkout;