import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';




const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
      fetch("https://ancient-coast-36281.herokuapp.com/products")
      .then(res => res.json())
      .then(data=> setProducts(data))
    },[])

    

    return (
        <Box sx={{ flexGrow: 1, mt:10 }}>
            <Container>
            <Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              products.map(product => <Product
              key={product._id}
              product={product}
              ></Product>)
          }
        </Grid>
  </Grid>
        </Container>
      </Box>
    );
};

export default Products;

/* 
{
              products.map(product => <Product
              key={product.id}
              product={product}
              ></Product>)
          }
*/