import React from 'react'
import { VideoSquare } from './VideoSquare.jsx'
import ClassNames from 'classnames'

export const VideoList = React.createClass({

  componentDidMount:function() {
  },

  handleVideoClick:function() {
  },

  render:function() {
    let videoListColStyles = {};
    // not ideal, ...spread operator should prob be used... or Classnames
    $.extend(true,videoListColStyles,styles.videoListCol,this.props.style);
    return (
      <div id="video-list-col" style={videoListColStyles}>
        <h4 style={styles.heading}>{this.props.title}</h4>
        <ul id="video-list" style={styles.videoList}>
          {this.props.videos.map(function(video, i) {
            return (
              <li key={i} style={styles.videoItem}>
                {video.title}
              </li>
            )
          }, this)}
        </ul>
      </div>
    );
  }
});

let styles = {
  videoListCol: {
    position: 'absolute',
    bottom: 10,
    margin: 0,
    padding: 0,
  },
  heading: {
    color:'#aaa',
    margin:5,
    padding:0,
    fontFamily: '"Helvetica Neue", Helvetica, Arial',
  },
  videoList: {
    color: '#999',
    fontSize: 15,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  videoItem:{
    padding: '5px 10px',
    fontSize: 14,
    background: '#333',
    margin: 2,
    fontFamily: '"Helvetica Neue", Helvetica, Arial',
    maxWidth: 150,
  }
};
