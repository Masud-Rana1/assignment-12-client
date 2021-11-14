import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Product = ({product}) => {

    const {_id,name, img, description,price} = product;
    return (
      <>
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ width: "100%", height:"100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          width="100%"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price} tk
          </Typography>
          <Link style={{"text-decoration": "none"}} to={`/purchase/${_id}`}>
           <Button variant="contained">Buy Now</Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        </>
    );
};

export default Product;