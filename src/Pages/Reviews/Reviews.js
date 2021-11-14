import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {

        
        const [reviews, setreviews] = useState([]);
        useEffect(()=> {
           
            const url = `https://ancient-coast-36281.herokuapp.com/reviews`;
            fetch(url)
            .then(res => res.json())
            .then(data => setreviews(data));
        },[]);
    return (
        <div>         
            <h2>Reviews</h2>
            <Box sx={{ flexGrow: 1, mt:10 }}>
            <Container>
            <Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                reviews.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
            }
            </Grid>
       </Grid>
        </Container>
      </Box>
        </div>
    );
};

export default Reviews;