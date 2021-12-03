import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import { Typography } from '@mui/material';
import CartItem from './CartItem/CartItem';
const Cart = ({cart}) => {
    const classes = useStyles();
    if (!cart.line_items) return 'Loading';
    console.log('cartklaj',cart.line_items);
    //if the cart is empth
    const renderEmptyCart = () =>{
        <>
        <Typography variant="subtitle1">You have no items in your shopping cart</Typography>
        </>
    }
    // get the cart
    const renderCart = () =>{
         <>
         <Grid container justify="center" spacing={2}>
            {cart.line_items.map(product => (
                <Grid  xs={12} sm={12} md={4} lg={3}>
                    <CartItem cartItem={product.line_items}/>
                </Grid>
            ))}
        </Grid>
         </>
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <div className={classes.productMg} />
        { !cart.total_unique_items.length ? renderEmptyCart() : renderCart() }
      </Box>
    );
};

export default Cart;