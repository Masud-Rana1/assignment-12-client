import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



  

const Review = ({review}) => {
    const {name, description} = review;
    return (
        <Card sx={{ maxWidth: 345, display:'flex' , margin:"10px" }}>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {name}`s Review
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
    </Card>
    );
};

export default Review;