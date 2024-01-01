import { useContext } from "react";
import AppContext from "../Data/Contex";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../style/Movie.css"


export default function Movies() {
  const { movie,isloading} = useContext(AppContext);


  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ margin: "20px" }}
    >
      {movie.map((currMovie) => {
        const movieName = currMovie.Title.substring(0, 15);
        return (
          <Grid item xs={3} key={currMovie.imdbID}>
            <Card sx={{ maxWidth: 270 , maxHeight:500 }}>
              <CardActionArea>
                <NavLink to={`movie/${currMovie.imdbID}`}>
                  <CardMedia
                    component="img"
                   className="card"
                    image={currMovie.Poster}
                    alt={currMovie.imdbID}
                  />
                  <CardContent className="movie-title">
                    {/* <Typography gutterBottom variant="h5" component="div"> */}
                    <Typography gutterBottom variant="h5" component="div" >
                      {movieName.length >= 15 ? `${movieName}... ` : movieName}
                    </Typography>
                  </CardContent>
                </NavLink>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
