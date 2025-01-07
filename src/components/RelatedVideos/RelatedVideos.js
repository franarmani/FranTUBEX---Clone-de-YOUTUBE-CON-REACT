import React from 'react';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import './RelatedVideos.scss';
import {NextUpVideo} from './NextUpVideo/NextUpVideo';

export function RelatedVideos(props) {
  if (!props.videos || !props.videos.length) {
    return <div className='related-videos'/>;
  }

  const nextUpVideo = props.videos[0];
  const remainingVideos = props.videos.slice(1);

  const relatedVideosPreviews = remainingVideos.map(relatedVideo => (
      <VideoPreview video={relatedVideo}
                    key={relatedVideo.id}
                    pathname='/watch'
                    search={`?v=${relatedVideo.id}`}
                    horizontal={true}/>
  ));

  return (
    <div className='related-videos'>
      <NextUpVideo video={nextUpVideo}/>
      {relatedVideosPreviews}
    </div>
  );
}
