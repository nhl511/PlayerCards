import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Grid container>
        <Box style={{backgroundColor:'#063970', color:'white', height:'50px'}} sx={{ flexGrow: 1 }} mt={15}>
            <Typography align='center' pt={2}>
              copyright &copy; 2022
            </Typography>
        </Box>
      </Grid>
    )
  }
}
