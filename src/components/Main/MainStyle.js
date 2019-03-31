import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { colors, fonts } from '../../styles/styles';

export const styles  = {
  playlistInfos: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'red',
  },
  contentPlaylist: {
    marginBottom: '1em',
  }
};

export const Container = styled(Grid)`
  flex-grow: 1;
  overflow: auto;
  max-height: 90vh;
  margin-left: 2em;
  background: linear-gradient(45deg, ${props => props.background || colors.primary} 30%, ${colors.black} 90%) !important;
`;

export const Title = styled.h3`
  font-family: ${fonts.bold};
  color: ${colors.white};
  font-weight: ${fonts.medium};
`;

export const TitlePlaylist = styled.p`
  font-family: ${fonts.normal};
  color: ${colors.white};
  font-weight: ${fonts.medium};
  margin-top: 0.5em !important;
`;

export const TextFollowers = styled.span`
  font-family: ${fonts.thin};
  color: ${colors.grey};
  margin-top: 0 !important;
`;


export default { Container };
