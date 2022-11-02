import React, { Component } from 'react';
// import '../index.scss'


//*      Libraries      //
// import { Audio } from 'react-loader-spinner';
// import { nanoid } from 'nanoid';
// import styled from 'styled-components'

//*      Components      //
import SearchBar from 'components/SearchBar';
import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';


// const API_KEY = `30114983 - 364137b9a9ec33f130a531f95`;
// const API_LINK = `https://pixabay.com/api/?key=30114983-364137b9a9ec33f130a531f95&q=yellow+flowers&image_type=photo`;


//*      Root      //
class App extends Component {
  state = {
    page: 1,
  };
  //
  //*     //
  //
  render() {
    //
    return (
      <>
        <SearchBar />
        <Modal/>
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button/>
         
      </>
    );
  }
}

export default App;
