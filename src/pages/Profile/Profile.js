import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/getUser';
import SideMenu from '../../components/SideMenu/SideMenu';
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props.getUser();
    this.props.getPlaylist();
    this.state = {
      loading: true,
    }
    console.log(props);
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
    console.log(user.playload.user.display_name)
  }
  
  render() {
    
    return (
      <div>
        <Layout 
          header={ <Header />}  
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Profile);
