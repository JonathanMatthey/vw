import React from 'react'
import { VideoList } from './VideoList.jsx'

export const MainSection = React.createClass({
  render: function() {
    return (
      <div>
        <VideoList />
      </div>
    );
  }
});

let styles = {
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
