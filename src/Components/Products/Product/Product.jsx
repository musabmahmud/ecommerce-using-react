import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product = ({product,addedToCart}) => {
    console.log(product.id);
    return (
        <Card>
            <CardMedia
                component="img"
                height="300"
                image={product.image.url}
                alt={product.name}
            />
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">{product.categories.name}</Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                <Typography variant="h5" mt={2}>{product.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add to cart" onClick={()=>addedToCart(product.id, 1)}>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
    </Card>
    );
};

export default Product;