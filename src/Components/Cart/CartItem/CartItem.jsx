import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './styles.js';
const CartItem = ({item,handleUpdateToCart,handleRemoveFromCart}) => {
    const classes = useStyles();
    return (
      <Card className="cart-item">
       <CardMedia
        component="img"
        height="200"
        image={item.image.url}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateToCart(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateToCart(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="error" onClick={handleRemoveFromCart}>Remove</Button>
      </CardActions>
    </Card>
    );
};

export default CartItem;