import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
const About = () => {
  return (
    <Box sx={{ width: '100%'}}>
      <Container>
      <Grid container sx={{mt:10, textAlign:'justify'}}>
        <Grid xs={12} md={12}>
          <Typography sx={{textAlign:'center'}} variant="h3" gutterBottom component="div">
            ABOUT US
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            saint-martin is not only famous of the beauty of its nature, in saintmartin you
            also can find many kinds of the beauty of culture and art like the
            art of dancing, the art of carving, the art of painting, and etc.
            Gayona as a company engaged wholesale arts products have been built
            since 2002 located at Jl. Raya Andong, Peliatan, Ubud by I Nyoman
            Sudarta. He is an entrepreneur and also a saintmartinnese craftsman. He
            selling traditionally and get positive response. Nowadays, Looking
            at art lover’s needs his son Komang Tisna then make a site which can
            make you easier to find a kind of Handicraft, Wooden Homeware,
            wooden handicraft, souvenir, Wedding souvenir, Silver jewelry,
            Wooden jewelry, Shell Jewelry, Beaded Jewelry, Souvenir and other
            Home Decoration through a simple, systematic, and easy to use
            website. We supply the best quality of Handicraft, Wooden Homeware,
            wooden handicraft, souvenir We cooperate directly with the
            manufacturers of handicrafts and jewelry so we can offer the best
            price for all products in our product catalog that always up to
            date. Our product is handmade so we guarantee that our product
            always unique. We have been marketing our products to several
            countries in the world such as America, Australia, and other
            countries while ensuring the quality of products in accordance with
            we show in our product catalog because we want to maintain our
            costumer’s trust. We hope you love our products and happy shopping.
          </Typography>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default About;
