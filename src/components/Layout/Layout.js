import React from 'react';
import {
  Container,
} from './LayoutStyles';
import SideMenu from '../../components/SideMenu/SideMenu';

const Layout = ({
  header,
  selectedIndex,
  onClickBiblioteca,
  onClickBuscar,
  onClickInicio,
}) => (
    <Container container direction="row">
      <SideMenu />
      <Container style={{ paddingTop: '2em'}}>
        {header}
      </Container>
    </Container>
);

export default Layout;
