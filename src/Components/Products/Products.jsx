import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product/Product.jsx';
import useStyles from './styles';
const Products = ({products,addedToCart}) => {
    // const fakeApiUrl = 'https://fakestoreapi.com/products';
    console.log(products);
    const classes = useStyles();
    return (
    <Box sx={{ flexGrow: 1 }}>
        <div className={classes.productMg} />
        <Grid container justify="center" spacing={2}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
                    <Product product={product} addedToCart={addedToCart}/>
                </Grid>
            ))}
        </Grid>
      </Box>
    );
};

export default Products;