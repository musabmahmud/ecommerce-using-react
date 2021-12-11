import React, { useEffect, useState } from 'react';
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
import { commerce } from '../../../Lib/Commerce';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = ({cart}) => {

    console.log(commerce);
    const [checkoutToken, setCheckoutToken] = useState(null);

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
            //   const token = await commerce.checkout.generateToken(`prod_NqKE50b9EDwdgB`, { type: 'product_id' });
            //   const token = await commerce.checkout.generateToken(cart.id, { type: 'permalink' });
            //   console.log(token);
                const url = new URL(
                    "https://api.chec.io/v1/checkouts/"+cart.id
                );
                
                let params = {
                    "type": "cart",
                };
                Object.keys(params)
                    .forEach(key => url.searchParams.append(key, params[key]));
                
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
                .then(data => setCheckoutToken(data));
            } 
            catch(error) {
                console.log(error);
            }
          };
    
          generateToken();
        }
    }, [cart]);

    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    const classes = useStyles();

    const Form = () => activeStep === 0 
        ? <ShippingForm checkoutToken={checkoutToken}/>
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
                        : checkoutToken && <Form/>}
                    </Grid>
                </Grid>
            </Paper>
        </div>
        </Box>
    );
};

export default Checkout;