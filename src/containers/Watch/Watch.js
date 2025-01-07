import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as watchActions from '../../store/actions/watch';
import * as commentActions from '../../store/actions/comment';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import WatchContent from './WatchContent/WatchContent';
import { getSearchParam } from '../../services/url';
import { getChannelId } from '../../store/reducers/videos';
import { getCommentNextPageToken } from '../../store/reducers/comments';
import { useLocation, useNavigate } from 'react-router-dom';

const Watch = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const youtubeLibraryLoaded = useSelector(state => getYoutubeLibraryLoaded(state));
  const channelId = useSelector(state => getChannelId(state, location, 'v'));
  const nextPageToken = useSelector(state => getCommentNextPageToken(state, location));

  useEffect(() => {
    if (youtubeLibraryLoaded) {
      fetchWatchContent();
    }
  }, [youtubeLibraryLoaded]);

  const getVideoId = () => {
    return getSearchParam(location, 'v');
  };

  const fetchWatchContent = () => {
    const videoId = getVideoId();
    if (!videoId) {
      navigate('/');
    } else {
      dispatch(watchActions.details.request(videoId, channelId));
    }
  };

  const fetchMoreComments = () => {
    if (nextPageToken) {
      dispatch(commentActions.thread.request(getVideoId(), nextPageToken));
    }
  };

  const videoId = getVideoId();

  return (
    <WatchContent 
      videoId={videoId} 
      channelId={channelId} 
      bottomReachedCallback={fetchMoreComments} 
      nextPageToken={nextPageToken} 
    />
  );
};

export default Watch;
