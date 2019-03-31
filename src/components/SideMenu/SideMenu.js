import React from 'react';
import {
  SideLeft,
  Title,
  MenuListItemText,
  MenuListItem,
  MenuItemPlaylist,
  styles,
} from './SideMenuStyles';
import { List, ListItem } from '@material-ui/core';
import { Home, Search, LibraryMusic } from '@material-ui/icons/';


const SideMenu = ({
  selectedIndex,
  onClickBiblioteca,
  onClickBuscar,
  onClickInicio,
  playlists,
}) => (
      <SideLeft item sm={2}>
        <Title variant="h4" align="left">React Spotify</Title>
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
            <ListItem style={{ marginBottom: 0, paddingBottom: 0}}>
              <p style={styles.menuItem}>SUA BIBLIOTECA</p>
            </ListItem>
          </List>
          <List component="nav">
            <ListItem style={{ marginBottom: 0, paddingBottom: 0}}>
              <p style={styles.menuItem}>PLAYLISTS</p>
            </ListItem>
              {
                playlists.map(playlist => (
                  <MenuItemPlaylist key={playlist.name}>
                    <span>{playlist.name}</span>
                  </MenuItemPlaylist>
                ))
              }
          </List>
      </SideLeft>
);

export default SideMenu;
