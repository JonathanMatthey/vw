import React from 'react'
import { Header } from './Header.jsx'
import { VideoSwipe } from './VideoSwipe.jsx'
import { VideoList } from './VideoList.jsx'

export const MainSection = React.createClass({

  getInitialState:function() {
    return {
      channel: 'staffpicks',
      videos: [],
      likeVideos: [],
      dislikeVideos: []
    };
  },

  componentDidMount:function() {
    this.getChannelVideos(this.state.channel);
  },

  handleDislikeVideo:function(video) {
    let self = this;
    this.setState({
      dislikeVideos: self.state.dislikeVideos.concat(video)
    })
  },

  handleLikeVideo:function(video) {
    let self = this;
    this.setState({
      likeVideos: self.state.likeVideos.concat(video)
    })
  },

  onChannelChange:function(e) {
    this.setState({'channel': e.target.value});
    this.getChannelVideos(this.state.channel);
  },

  getChannelVideos:function(channel) {
    var self = this;
    return fetch('http://vimeo.com/api/v2/channel/' + channel + '/videos.json').then(function(response) {
      if (response.status !== 200) return Promise.reject('Failed to get vimeo staff picks')
      return response.json().then(function(json) {
        self.setState({
          videos: json
        });
      })
    })
  },

  render: function() {
    return (
      <div style={styles.mainContainer}>
        <Header channelChange={this.onChannelChange} channel={this.state.channel}/>
        <VideoSwipe videos={this.state.videos} onLikeVideo={this.handleLikeVideo} onDislikeVideo={this.handleDislikeVideo} />
        <VideoList title="Likes" style={styles.likeVideos} videos={this.state.likeVideos}/>
        <VideoList title="Dislikes" style={styles.dislikeVideos} videos={this.state.dislikeVideos}/>
      </div>
    );
  }
});

let styles = {
  mainContainer: {
    maxWidth: 960,
    margin: '0 auto'
  },
  likeVideos: {
    right: 10
  },
  dislikeVideos: {
    left: 10
  },
  heading: {
    color: 'white',
    fontSize: '24px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '10px',
    position: 'absolute',
    top: '10px',
    left: '10px ',
    margin: 0
  }
};
