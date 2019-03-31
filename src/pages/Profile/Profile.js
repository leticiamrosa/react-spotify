import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/getUser';
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Player from '../../components/Player/Player';
import If from '../../components/If/If';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props.getUser();
    this.props.getPlaylist();
    this.props.getAlbum();
    this.state = {
      loading: true,
    }
    console.log(props);
  }

  componentDidMount() {
    // await for setStage of Users
    setTimeout(() => { this.getUserFromRedux() }, 1000);
  }

  componentDidUpdate() {
    // console.log(this.props.playlist)
  }

  getUserFromRedux() {
    const { user, playlist } = this.props;
    this.setState({ 
      user: user.playload,
      name: user.playload.user.display_name,
      loading: false,
      logged: true,
      playlist: playlist.playload.playlist,
    })

    const userImageAvatar = user.playload.user.images;
    userImageAvatar.map(avatar => this.setState({ avatar: avatar.url }));

    // console.log(user.playload.user.images)
    // console.log(playlist.playload.playlist)
    // console.log(user.playload.user.display_name)
  }
  
  render() {
   const { playlist, loading, name, avatar} = this.state;
  //  console.log(playlist)
  //  console.log(avatar)
    return (
      <div>
        <If show={!loading}>
          <Layout 
            header={<Header userName={name} userAvatar={avatar} />}
            main={<Main playlists={playlist} />}
            player={<Player />}
            sideMenuPlaylists={playlist}
          />
        </If>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Profile);
