import React, { useEffect } from 'react';
import Home from './containers/Home/Home';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Routes, Route } from 'react-router-dom';  
import Watch from './containers/Watch/Watch';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';
import Trending from './containers/Trending/Trending';
import Search from './containers/Search/Search';
import { useLocation } from 'react-router-dom';  

const API_KEY = process.env.REACT_APP_YT_API_KEY;

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();  

  useEffect(() => {
    loadYoutubeApi();
  }, []);  

  const loadYoutubeApi = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          dispatch(youtubeLibraryLoaded());
        });
      });
    };

    document.body.appendChild(script);
  };

  return (
    <AppLayout>
      <Routes> 
        <Route path="/feed/trending" element={<Trending />} />
        <Route path="/results" element={<Search key={location.key} />} />
        <Route path="/watch" element={<Watch key={location.key} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
