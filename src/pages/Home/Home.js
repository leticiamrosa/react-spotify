import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/getUser';
import { Container } from './HomeStyle';
import { Grid, Button } from '@material-ui/core';
import SpinnerIf from '../../components/SpinnerIf/SpinnerIf';
import If from '../../components/If/If';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getToken();
    this.props.getUser();
    this.props.getPlaylist();
    console.log(props)
    this.state = {
      user: null,
      loading: true,
      logged: false,
    }
  }

 
  componentDidMount() {
    // await for setStage of Users
    setTimeout(() => { this.getUserFromRedux() }, 1000);
  }

  getUserFromRedux() {
    const { user } = this.props;
    this.setState({ 
      user: user.playload,
      name: user.playload.user.display_name,
      loading: false,
      logged: true,
    })
    // console.log(user.playload.user.display_name)
  }
  
  render() {
    const { loading, logged, user, name} = this.state;
    console.log(user)

    return (
      <Container container justify="center" alignItems="center" spacing={16}>
        <SpinnerIf show={loading} />

        <If show={logged}>
          <Grid item xs={12} sm={12} align="center">
          <h1>{name}</h1>
              <Button variant="contained" onClick={() => window.location = 'http://localhost:8888/login'}>
                Sign In With Spotify
              </Button>
          </Grid>
        </If>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);