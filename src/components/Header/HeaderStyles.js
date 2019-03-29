import styled from 'styled-components';
import { colors, fonts } from '../../styles/styles';
import { Grid } from '@material-ui/core';

export const Container = styled(Grid)`
  flex-grow: 1;
  min-height: 100vh;
  background: linear-gradient(45deg, ${props => props.background || colors.primary} 30%, ${colors.black} 90%) !important;
`;

export const MenuItem = styled.span`
  color: ${colors.white};
  font-family: ${fonts.family};
  font-weight: ${fonts.medium};
  font-size: 0.8em;
  letter-spacing: 0.2em;
  padding: 1em;
`;

export default { MenuItem };