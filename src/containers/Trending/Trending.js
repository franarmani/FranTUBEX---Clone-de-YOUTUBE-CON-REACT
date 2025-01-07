import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as videoActions from "../../store/actions/video";
import {
  allMostPopularVideosLoaded,
  getMostPopularVideos,
  getMostPopularVideosNextPageToken
} from '../../store/reducers/videos';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { VideoList } from '../../components/VideoList/VideoList';

class Tendencias extends React.Component {
  componentDidMount() {
    this.cargarVideosPopulares();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibraryLoaded !== this.props.youtubeLibraryLoaded) {
      this.cargarVideosPopulares();
    }
  }

  render() {
    const loaderActivo = this.deberiaMostrarCargador();

    return (<VideoList
      bottomReachedCallback={this.cargarMasVideos}
      showLoader={loaderActivo}
      videos={this.props.videos}/>);
  }

  cargarMasVideos = () => {
    const { nextPageToken } = this.props;
    if (this.props.youtubeLibraryLoaded && nextPageToken) {
      this.props.fetchMostPopularVideos(12, true, nextPageToken);
    }
  };

  cargarVideosPopulares() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos(20, true);
    }
  }

  deberiaMostrarCargador() {
    return !this.props.allMostPopularVideosLoaded;
  }
}

function mapStateToProps(state) {
  return {
    videos: getMostPopularVideos(state),
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    allMostPopularVideosLoaded: allMostPopularVideosLoaded(state),
    nextPageToken: getMostPopularVideosNextPageToken(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({ fetchMostPopularVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tendencias);
