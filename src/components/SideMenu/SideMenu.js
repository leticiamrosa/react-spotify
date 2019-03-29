import React from 'react';
import {
  SideLeft,
  Title,
  MenuListItemText,
  MenuListItem,
} from './SideMenuStyles';
import { List, ListItem } from '@material-ui/core';
import { Home, Search, LibraryMusic } from '@material-ui/icons/';


const SideMenu = ({
  selectedIndex,
  onClickBiblioteca,
  onClickBuscar,
  onClickInicio,
}) => (
      <SideLeft item sm={2}>
        <Title variant="h4" align="center">React Spotify</Title>
          <List component="nav">
            <MenuListItem
              button
              selected={selectedIndex === 0}
              onClick={onClickInicio}
            >
              <Home style={{ color: 'white'}}/>
              <MenuListItemText primary="Início" />
            </MenuListItem>
            <MenuListItem
              button
              selected={selectedIndex === 1}
              onClick={onClickBuscar}
            >
              <Search style={{ color: 'white'}}/>
              <MenuListItemText primary="Buscar" />
            </MenuListItem>
            <MenuListItem
              button
              selected={selectedIndex === 2}
              onClick={onClickBiblioteca}
            >
              <LibraryMusic style={{ color: 'white' }} />
              <MenuListItemText primary="Sua Biblioteca" />
            </MenuListItem>
          </List>
          <List component="nav">
            <ListItem>
              <h5 style={{ color: 'white' }}>TOCADO RECENTEMENTE</h5>
            </ListItem>
          </List>
      </SideLeft>
);

export default SideMenu;
