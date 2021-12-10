import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import { Button, Typography } from '@mui/material';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
const Cart = ({cart,handleUpdateToCart,handleRemoveFromCart,handleEmptyCart}) => {
    const classes = useStyles();

    if (!cart.line_items) return 'Loading...';

    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className={classes.productMg} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        
        { !cart.line_items.length ? 
            <Typography variant="subtitle1">You have no items in your shopping cart,
                <Link className={classes.link} to="/">start adding some</Link>!
            </Typography>
            :
            <>
            <Grid container spacing={3}>
                {cart.line_items.map((product) => (
                <Grid item xs={12} sm={4} key={product.id}>
                    <CartItem item={product} handleUpdateToCart={handleUpdateToCart} handleRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
                ))}
                <Grid item xs={12} className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                    <Button style={{marginRight: '20px'}} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </Grid>
            </Grid>
            </>
        }
      </Box>
    );
};

export default Cart;