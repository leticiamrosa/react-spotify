import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { colors } from '../../styles/styles';

export const Container = styled(Grid)`
  flex-grow: 1;
  min-height: 100vh;
  background: linear-gradient(45deg, ${props => props.background || colors.primary} 30%, ${colors.black} 90%) !important;
`;

export default { Container };
