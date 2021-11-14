import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ bgcolor: 'text.primary' , color: 'background.paper', mt: 5}} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="div" gutterBottom>
            POPULAR CATEGORY
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Teak Wood Bowl
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Teak Wood Coaster
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Teak Wood Utensil
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Teak Wood Plate
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="div" gutterBottom>
            Contact
          </Typography>
          <Typography  variant="subtitle1" gutterBottom component="div">
            Jl. Raya Andong, Peliatan, Ubud, Gianyar
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Email : info@gayona.com
          </Typography>
          <Typography  variant="subtitle1" gutterBottom component="div">
            Whatsapp : +62 81-383838
          </Typography>
          <Typography  variant="subtitle1" gutterBottom component="div">
            Bangladesh, Dhaka-1216
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
