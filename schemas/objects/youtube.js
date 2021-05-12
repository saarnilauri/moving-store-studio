// youtube.js
import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({value}) => {
	const { url } = value;
	const id = getYouTubeId(url);
	return (id ? <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: '30px', height: 0, overflow: 'hidden' }}><YouTube style={ { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} videoId={id} /></div> : null)
}

export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube video URL'
      }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
  }