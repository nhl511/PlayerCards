import { Grid, Typography, ButtonBaseClasses, Button} from "@mui/material";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import React from "react";
import { Link, useParams } from "react-router-dom";
import { players } from "../shared/ListOfPlayers";

export default function Detail() {
  const userName = useParams();
  const player = players.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = player.cost.toLocaleString();

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  return (
    // <div className="container">
    //   <br />
    //   <nav aria-label="breadcrumb">
    //     <ol class="breadcrumb">
    //       <li class="breadcrumb-item">
    //         <Link to="/" style={{textDecoration:'none', color:'black'}}>Players</Link>
    //       </li>
    //       <li class="breadcrumb-item active" aria-current="page">
    //         {player.name}
    //       </li>
    //     </ol>
    //   </nav>
    //   <div className="row d-flex jusity-content-center pt-5 pb-5">
    //     <h2 className="text-center">{player.name}</h2>
    //   </div>

    //   <div className="row row-cols-2 d-flex justify-content-around pb-5 mb-5">
    //     <div className="col">
    //       <img src={`../${player.img}`} className="card-img-top" alt="..." />
    //     </div>
    //     <div className="col">
    //       <h3 style={{ color: "#f39c12" }}>
    //         Market value: <span class="badge bg-danger">€ {cost}</span>
    //       </h3>
    //       <h4>{player.club}</h4>
    //       <p style={{ color: "#7f8c8d" }}>{player.info}</p>
    //       <br />
    //       <button
    //         style={{ width: "100%" }}
    //         className="d-block btn btn-outline-dark d-flex justify-content-center"
    //       >
    //         Lorem ipsum{" "}
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Grid container>
      <Breadcrumbs aria-label="breadcrumb" pt={5} mt={6} ml={3}>
      <Link to="/" style={{textDecoration:'none'}}><StyledBreadcrumb label="Players"/></Link>
  <StyledBreadcrumb label={player.name} />

</Breadcrumbs>
      <Grid item xs={12} sm={12} mt={1} p={5}>
        <Typography variant="h3" align="center">
          {player.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5} pl={10} pt={2}>
        <img src={`../${player.img}`} width="500px" alt="..." />
      </Grid>
      <Grid item xs={12} sm={7} pt={2}>
      <Typography variant="h4" align="left" style={{ color: "#f39c12" }} pb={1}>
          Market value: € {cost}
        </Typography>
        <Typography variant="h4" align="left" pb={1}>
          {player.club}
        </Typography>
        <Typography paragraph={true} style={{ color: "#7f8c8d", fontSize:"20px" }} align="justify" pb={1} pr={3}>
          {player.info}
        </Typography>
        <Button size="large" variant="outlined" style={{color: '#063970'}}>Contained</Button>
      </Grid>
    </Grid>
    
  );
}
