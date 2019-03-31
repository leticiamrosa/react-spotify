import React from 'react';
import {
    Grid,
    Avatar,
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
} from '@material-ui/core';
import { Container, styles } from './HeaderStyles';
import { Search } from '@material-ui/icons';

const Header = ({
    userName,
    userAvatar,
}) => (
  <Container container justify="space-between">
        <AppBar style={styles.containerApp} position="static" >
          <Toolbar style={styles.toolbar}>
            <div style={styles.search}>
              <div style={styles.searchIcon}>
                <Search />
              </div>
              <InputBase
                style={styles.inputInput}
                placeholder="Buscar"
              />
            </div>

            <div />
            <div style={styles.userContent}>
              <IconButton
                // aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                // onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt={`Imagem de perfil do usuário ${userName}`} src={userAvatar} />
                <span style={styles.userName}>{userName}</span>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

  </Container>
);

export default Header;
