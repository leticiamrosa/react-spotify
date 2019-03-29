import React from 'react';
import { Grid } from '@material-ui/core';
import { MenuItem, Container } from './HeaderStyles';

const Header = ({
    params,
}) => (
  <Container container direction="row" justify="space-around" align="center">
      <Grid item xs={12} sm={12} >
          <MenuItem>EM DESTAQUE</MenuItem>
          <MenuItem>PODCASTS</MenuItem>
          <MenuItem>PARADAS</MenuItem>
          <MenuItem>GÊNEROS</MenuItem>
          <MenuItem>LANÇAMENTOS</MenuItem>
          <MenuItem>DESCOBRIR</MenuItem>
      </Grid>

  </Container>
);

export default Header;
