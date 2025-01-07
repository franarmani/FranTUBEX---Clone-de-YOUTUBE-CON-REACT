import React, { useEffect } from 'react';
import './Search.scss';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { getSearchNextPageToken, getSearchResults } from '../../store/reducers/search';
import * as searchActions from '../../store/actions/search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { VideoList } from '../../components/VideoList/VideoList';

const Search = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getSearchQuery = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get('search_query');
  };

  useEffect(() => {
    if (!getSearchQuery()) {
      // Redirigir al inicio si no hay consulta de búsqueda
      navigate('/');
    } else {
      searchForVideos();
    }
  }, [location, navigate]);

  useEffect(() => {
    if (props.youtubeApiLoaded) {
      searchForVideos();
    }
  }, [props.youtubeApiLoaded]);

  const searchForVideos = () => {
    const searchQuery = getSearchQuery();
    if (props.youtubeApiLoaded) {
      props.searchForVideos(searchQuery);
    }
  };

  const bottomReachedCallback = () => {
    if (props.nextPageToken) {
      props.searchForVideos(getSearchQuery(), props.nextPageToken, 25);
    }
  };

  return (
    <VideoList
      bottomReachedCallback={bottomReachedCallback}
      showLoader={true}
      videos={props.searchResults}
    />
  );
};

function mapDispatchToProps(dispatch) {
  const searchForVideos = searchActions.forVideos.request;
  return bindActionCreators({ searchForVideos }, dispatch);
}

function mapStateToProps(state, props) {
  return {
    youtubeApiLoaded: getYoutubeLibraryLoaded(state),
    searchResults: getSearchResults(state, props.location.search),
    nextPageToken: getSearchNextPageToken(state, props.location.search),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
