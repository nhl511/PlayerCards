// import React, { Component } from 'react'

// export default class Players extends Component {
//   render() {
//     return (
//         <div className="container">
//             <br/>
//             <div className="row row-cols-3 d-flex justify-content-around">
//                 <div className="card col ps-0 pe-0 mb-5">
//                     <img src="assets/images/cr.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body bg-light">
//                         <h5 className="card-title text-center">Cristiano Ronaldo</h5>
//                         <p className="card-text d-flex justify-content-center">Manchester United</p>
//                         <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
//                     </div>
//                 </div>
//                 <div className="card col ps-0 pe-0 mb-5">
//                     <img src="assets/images/kante.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body bg-light">
//                         <h5 className="card-title text-center">Kante</h5>
//                         <p className="card-text d-flex justify-content-center">Chelsea</p>
//                         <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
//                     </div>
//                 </div>
//                 <div className="card col ps-0 pe-0 mb-5">
//                     <img src="assets/images/messi.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body bg-light">
//                         <h5 className="card-title text-center">Messi</h5>
//                         <p className="card-text d-flex justify-content-center">PSG</p>
//                         <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
//                     </div>
//                 </div>
//                 <div className="card col ps-0 pe-0 mb-5">
//                     <img src="assets/images/neymar.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body bg-light">
//                         <h5 className="card-title text-center">Neymar</h5>
//                         <p className="card-text d-flex justify-content-center">PSG</p>
//                         <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
//                     </div>
//                 </div>
//                 <div className="card col ps-0 pe-0 mb-5">
//                     <img src="assets/images/kane.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body bg-light">
//                         <h5 className="card-title text-center">Kane</h5>
//                         <p className="card-text d-flex justify-content-center">Tottemham</p>
//                         <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
//                     </div>
//                 </div>
//                 <div className="card col ps-0 pe-0 mb-5">
//                     <img src="assets/images/haaland.jpg" className="card-img-top" alt="..."/>
//                     <div className="card-body bg-light">
//                         <h5 className="card-title text-center">Haaland</h5>
//                         <p className="card-text d-flex justify-content-center">Manchester City</p>
//                         <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//   }
// }

import React from "react";
import { Link } from "react-router-dom";
import { players } from "../shared/ListOfPlayers";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";

export default function Players() {
  return (
    <Grid container p={5} spacing={2} mt={5}>
      {players.map((player) => (
        <Grid item xs={12} sm={4}>
          <Link to={`Player/${player.id}`} style={{ textDecoration: "none" }}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="280"
                image={player.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {player.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {player.club}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" sx={{ flexGrow: 1, background: '#063970' }}>Detail</Button>
              </CardActions>
            </CardActionArea>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
