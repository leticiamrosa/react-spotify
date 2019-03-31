import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Container,
  Title,
  TitlePlaylist,
  TextFollowers,
  styles,
} from './MainStyle';

const Main = ({
  playlists,
}) => (
    <Container container>
      <Grid item sm={10}>
        <Title>Playlist públicas</Title>
      </Grid>
      {
        playlists.map((playlist) => (
          <Grid item sm={3} key={playlist.name} style={styles.contentPlaylist}>
            {
              playlist.images.filter(image => image.height === 300 || image.height === null)
              .map(playlistImage => (
                <img key={playlistImage.url} src={playlistImage.url} alt={`Imagem da playlist ${playlist.name}`} />
              ))
            }
            <div style={styles.playlistInfos}>
              <TitlePlaylist>{playlist.name}</TitlePlaylist>
              {/* <TextFollowers>0 Seguidores</TextFollowers> */}
            </div>
          </Grid>
        ))
      }

    </Container>
);

export default Main;
