import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookingModal from "../../BookingModal/BookingModal";
import Navigation from "../../Shared/Navigation/Navigation";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://ancient-coast-36281.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const { name, img, description, price } = product;

  const [openBuy, setOpenBuy] = React.useState(false);
  const handleBuyOpen = () => setOpenBuy(true);
  const handleBuyClose = () => setOpenBuy(false);

  return (
    <>
   <Navigation></Navigation>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ width: "100%", height: "100%" }}>
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

              <Button onClick={handleBuyOpen} variant="contained">
                Purchase
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <BookingModal
        openBuy={openBuy}
        handleBuyClose={handleBuyClose}
        product={product}
      ></BookingModal>
    </>
  );
};

export default Purchase;
