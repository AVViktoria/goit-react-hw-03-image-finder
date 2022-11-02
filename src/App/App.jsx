import React, { Component } from 'react';
// import '../index.scss'


//*      Libraries      //
// import { Audio } from 'react-loader-spinner';
// import { nanoid } from 'nanoid';
// import styled from 'styled-components'

//*      Components      //
// import SearchBar from 'components/SearchBar';
import Modal from 'components/Modal';
// import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
// import Loader from 'components/Loader';
// import Button from 'components/Button';


// const API_KEY = `30114983 - 364137b9a9ec33f130a531f95`;
// const API_LINK = `https://pixabay.com/api/?key=30114983-364137b9a9ec33f130a531f95&q=yellow+flowers&image_type=photo`;


//*      Root      //
class App extends Component {
  state = {
    largeImageURL:"",
    page: 1,
    showModal:false,
  };
 
 toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  //*     //
  //onImgClick
    // //*  слушатель событий по кнопке  //
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };
  // //*  очищаем   сбрасываем   форму  //
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Modal onClose={this.toggleModal} />
        <button type='button' onClick={this.toggleModal}>Open Modal</button>
        {showModal && (<Modal>
          <h1>Hello</h1>
          <button type= 'button' onClick={this.toggleModal}>Close Modal</button>
        </Modal>)}
        {/* <SearchBar />
        
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button/> */}
         
      </>
    );
  }
}

export default App;
