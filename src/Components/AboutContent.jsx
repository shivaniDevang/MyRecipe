import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import Recipe from "../Assets/Images/photo1.avif"
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={Recipe}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px", fontStyle:"oblique"}}
            >
              "From My Kitchen to 
              Your<span style={{ color: "#5a0c4a" }}> Heart"</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              "Tantalize Your Taste Buds"
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              We Bring People Together Around The Dinner Table.
              Spice it up, make it nice

            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Healthy food makes you feel good. I watch cooking change the cook, just as it transforms the Food and 
              a way to use your imagination and creativity.You are making your own, unique masterpiece with flavours and textures.
               Cooking is also great to relax and unwind, letting all your worries melt away like butter in a pan.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
