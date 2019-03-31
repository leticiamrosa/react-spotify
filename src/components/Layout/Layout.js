import React from 'react';
import {
  Container,
} from './LayoutStyles';
import SideMenu from '../../components/SideMenu/SideMenu';
import { Grid } from '@material-ui/core';

const Layout = ({
  header,
  main,
  player,
  sideMenuPlaylists,
  selectedIndex,
  onClickBiblioteca,
  onClickBuscar,
  onClickInicio,
}) => (
    <Container container direction="row">
      <SideMenu playlists={sideMenuPlaylists} />
      {/* <Container style={{ minHeight: 0}}> */}
        <Grid item sm={10}>
          {header}
          {main}
        </Grid>
        {player}
      {/* </Container> */}

    </Container>
);

export default Layout;
