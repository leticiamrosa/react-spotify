import styled from 'styled-components';
import { Grid, Typography, ListItemText, ListItem  } from '@material-ui/core';
import { colors, fonts } from '../../styles/styles';

export const styles = {
  menuItem: {
    fontFamily: 'Proxima Nova',
    color: colors.grey,
    letterSpacing: 2,
    
  }
}

export const Container = styled(Grid)`
  flex-grow: 1;
  min-height: 10vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.coolGrey};
  color: white;
  text-align: center;
`;

export default { Container };
