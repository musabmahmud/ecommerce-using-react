import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import logo from './../../assets/img/logo.png';
import useStyles from './styles.js';
import { Link,useLocation } from "react-router-dom";

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    
    const location = useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" className={classes.title} variant="h6" color="inherit">
                        <img className={classes.image} src={logo} alt="Ecommerce Js" height="25px"/> Ecommerce
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        {location.pathname === '/' ?
                        (<IconButton aria-label="show cart item" component={Link} to="/cart" color="inherit">
                            <Badge badgeContent={totalItems} color="primary">
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </Badge>
                        </IconButton>)
                        : null}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;