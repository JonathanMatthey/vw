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
    this.setState({
      'playing': !this.state.playing
    })
    this.props.onVideoSquareClick();
  },

  render:function() {
    let video = this.props.video || {};
    styles.square.backgroundImage = 'url(' + video.thumbnail_large + ')'
    styles.userAvatar.backgroundImage = 'url(' + video.user_portrait_medium + ')'

    if(video.url) {
    }

    return (
      <div style={styles.square} onClick={this.handleClick}>
        <Vimeo className='vimeo-player' videoId={ video.id } />
        <div className={ClassNames('video-meta',{'hide':this.state.playing})} style={styles.meta}>
          <div style={styles.userAvatar}></div>
          <div style={styles.metaText}>
            <div style={styles.title}>{video.title}</div>
            <div style={styles.author}>{video.user_name}</div>
          </div>
        </div>
      </div>
    );
  }
});

let styles = {
  square: {
    display: 'inline-block',
    paddingTop: '20%',
    width: '33.3%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  meta: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  metaText: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '80%'
  },
  title: {
    fontSize: 18,
    marginTop: 8,
    lineHeight: '24px',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: '"Helvetica Neue", Helvetica, Arial',
    whiteSpace: 'nowrap',
    maxWidth: '90%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  author: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial',
    lineHeight: '20px',
    fontSize: 14,
    color: 'white',
  },
  userAvatar: {
    margin: 5,
    marginRight: 10,
    display: 'inline-block',
    width: 50,
    height: 50,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    zIndex: 9
  }
};
