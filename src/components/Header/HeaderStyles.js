import styled from 'styled-components';
import { colors, fonts } from '../../styles/styles';
import { Grid } from '@material-ui/core';

export const styles = {
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  containerApp: {
    backgroundColor: colors.coolGrey,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.black,
    },
    marginRight: '1em',
    marginLeft: 0,
    // width: '100%',
  },
  searchIcon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    // paddingTop: 15,
    // paddingRight: 20,
    // paddingBottom: 20,
    paddingLeft: 15,
    // transition: theme.transitions.create('width'),
    width: '100%',
  },
  userContent: {
  
  },
  userName: {
    fontFamily: fonts.normal,
    color: colors.white,
    fontSize: '1rem',
    marginLeft: '0.5em',
  }
};

export const Container = styled(Grid)`
  /* flex-grow: 1; */
  display: flex,
  /* min-height: 100vh; */
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