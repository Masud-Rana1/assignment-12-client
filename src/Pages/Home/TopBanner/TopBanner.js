import React from "react";
import img from "../../../images/950x350-banner-craft-stationery.jpg";
import Grid from "@mui/material/Grid";
const TopBanner = () => {
  return (
    <Grid>
      <Grid>
        <img style={{maxWidth: "100%", height:'auto'}} src={img} alt="" />
      </Grid>
    </Grid>
  );
};

export default TopBanner;
