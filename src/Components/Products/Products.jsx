import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './../Product/Product.jsx';
import useStyles from './styles';

const Products = () => {

    const [products, setProducts] = useState([]);

    const classes = useStyles();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])

    console.log(products);
    // const classes = useStyles();

    return (
    <Box sx={{ flexGrow: 1 }}>
        <div className={classes.productMg} />
        <Grid container justify="center" spacing={2}>
            {products.map(pd => (
                <Grid item key={pd.id} xs={12} sm={12} md={4} lg={3}>
                    <Product product={pd}/>
                </Grid>
            ))}
        </Grid>
      </Box>
    );
};

export default Products;