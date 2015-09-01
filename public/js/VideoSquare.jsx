const React = require('react');
import Vimeo from 'react-vimeo';
import ClassNames from 'classnames'

export const VideoSquare = React.createClass({

  getInitialState:function() {
    return {
      playing: false,
    };
  },

  handleClick: function(e){
    this.props.onVideoSquareClick();
  },

  componentDidMount: function() {
    var self = this;
  },

  render:function() {
    let video = this.props.video || {};
    let videoId = video.id.toString();

    styles.square.backgroundImage = 'url(' + video.thumbnail_large + ')'
    styles.userAvatar.backgroundImage = 'url(' + video.user_portrait_medium + ')'

    return (
      <li className={'video-square pane'+this.props.index} onClick={this.handleClick}>
        <Vimeo className='vimeo-player' videoId={ videoId } />
        <div className={ClassNames('video-meta',{'hide':this.state.playing})} style={styles.meta}>
          <div style={styles.metaText}>
            <div style={styles.userAvatar}></div>
            <div style={styles.title}>{video.title}</div>
            <div style={styles.author}>from {video.user_name}</div>
          </div>
        </div>
      </li>
    );
  }
});

let styles = {
  square: {
    display: 'inline-block',
    height: 170,
    width: '320px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  meta: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
  },
  metaText: {
    verticalAlign: 'top',
    width:'100%',
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    lineHeight: '24px',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: '"Helvetica Neue", Helvetica, Arial',
  },
  author: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial',
    lineHeight: '20px',
    fontSize: 14,
    color: 'white',
    opacity: 0.5
  },
  userAvatar: {
    width: 50,
    height: 50,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    zIndex: 9,
    position: 'absolute',
    left: 0,
    bottom: 10
  }
};
