import styled from 'styled-components';
import { Grid, Typography, ListItemText, ListItem  } from '@material-ui/core';
import { colors, fonts } from '../../styles/styles';

export const styles = {
  menuItem: {
    fontFamily: fonts.normal,
    color: colors.grey,
    letterSpacing: 2,
    marginBottom: 0,
    fontSize: '0.8rem',
  }
}

export const Container = styled(Grid)`
  flex-grow: 1;
  min-height: 100vh;
  background: linear-gradient(45deg, ${props => props.background || colors.primary} 30%, ${colors.black} 90%) !important;
`;

export const SideLeft = styled(Grid)`
  background: ${colors.coolGrey};
  min-height: 100vh;
`;

export const Title = styled(Typography)`
  color: ${colors.white} !important;
  font-family: ${fonts.normal} !important;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 0.5em;
`;

export const MenuListItem = styled(ListItem)`
  :hover {
    background: black !important;
    border-left: 5px solid ${colors.secondary} !important;
    font-family: ${fonts.bold} !important;
  }

  :active {
    background: black !important;
    border-left: 5px solid ${colors.secondary} !important;
    font-family: ${fonts.bold} !important;
  }
`;

export const MenuListItemText = styled(ListItemText)`

  span {
    color: ${colors.grey};
    font-family: ${fonts.bold} !important;

      :hover {
        color: ${colors.white};
      }
  }

`;

export const MenuItemPlaylist = styled(ListItemText)`
  padding-top: 0.4em !important;
  padding-bottom: 0.4em !important;
  
  span {
    color: ${colors.grey};
    font-family: ${fonts.normal} !important;

      :hover {
        color: ${colors.white};
        font-family: ${fonts.bold} !important;
      }
  }

`;

export default { Container };
