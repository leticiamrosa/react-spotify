import styled from 'styled-components';
import { Grid, Typography, ListItemText, ListItem  } from '@material-ui/core';
import { colors, fonts } from '../../styles/styles';

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
  font-family: ${fonts.family} !important;
  font-weight: ${fonts.bold} !important;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const MenuListItem = styled(ListItem)`
  :hover {
    background: black !important;
    border-left: 5px solid ${colors.secondary} !important;
    font-weight: ${fonts.regular} !important;
  }

  :active {
    background: black !important;
    border-left: 5px solid ${colors.secondary} !important;
    font-weight: ${fonts.regular} !important;
  }
`;

export const MenuListItemText = styled(ListItemText)`

  span {
    color: ${colors.white};
    font-family: ${fonts.family} !important;
    font-weight: ${fonts.light};

      :hover {
        font-weight: ${fonts.regular} !important;
      }
  }


`;

export default { Container };
