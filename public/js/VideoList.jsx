import React from 'react'
import { VideoSquare } from './VideoSquare.jsx'
import ClassNames from 'classnames'

export const VideoList = React.createClass({

  getInitialState:function() {
    return {
      videos: [],
      pauseWall: false
    };
  },

  componentDidMount:function() {
    this.getStaffPicks(1);
    this.getStaffPicks(2);
    this.getStaffPicks(3);
    this.getStaffPicks(1);
  },

  handleVideoClick:function() {
    console.log('handleVideoClick');
    this.setState({
      'pauseWall': !this.state.pauseWall
    })
  },

  getStaffPicks:function(page) {
    var self = this;
    return fetch('http://vimeo.com/api/v2/channel/staffpicks/videos.json?page=' + page).then(function(response) {
      if (response.status !== 200) return Promise.reject('Failed to get vimeo staff picks')
      return response.json().then(function(json) {
        let vids = self.state.videos;
        self.setState({
          videos: vids.concat(json)
        });
      })
    })
  },

  render:function() {
    const x = 'x';
    console.log('videos ??',this.state.videos);
    return (
      <div style={styles.videoList} className={ClassNames('video-wall', {'paused': this.state.pauseWall })}>
        {this.state.videos.map(function(video, i) {
          return (
            <VideoSquare onVideoSquareClick={this.handleVideoClick} video={video}/>
          )
        }, this)}
      </div>
    );
  }
});

let styles = {
  videoList: {
    fontSize: 0,
    width: '100%'
  }
};
