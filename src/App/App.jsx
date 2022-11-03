import React, { Component } from 'react';
// import '../index.scss'


//*      Libraries      //
// import { Audio } from 'react-loader-spinner';
// import { nanoid } from 'nanoid';
// import styled from 'styled-components'

//*      Components      //
// import SearchBar from 'components/SearchBar';
// import Modal from 'components/Modal';
// import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
// import Loader from 'components/Loader';
// import Button from 'components/Button';
// import fetchImages from '../components/Service'




//*      Root      //
class App extends Component {
  state = {
   searchQuery: "",
    page: 1,
    status: "idle",
    error: null,
    result: [],
    modalOpen: false,
    largeImg: "",
    
  };
// componentDidUpdate(prevProps, prevState) {
//     // const { query } = this.state;
//      if (
//       prevProps.searchName !== this.props.searchName ||
//       prevState.page !== this.state.page
//      ) {
//        this.fetchImages()
//     .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loader: false }));
//     }
//   }

//  toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//  };
//   hideLoaderInModal = () => this.setState({ loader: false });
  
// onSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       page: 1,
//       articles: [],
//       search: e.target[1].value,
//       loading: true,
//     });
// };
  
  onModalOpen = (event) => {
    this.setState({
      modalOpen: true,
      largeImg: event.target.dataset.large,
    });
  };

  onModalClose = () => {
    this.setState({
      modalOpen: false,
      largeImg: "",
    });
  };
  
  // //*  что бы при постоянном нажатии не перерендывался компонент  //
  // shouldComponentUpdate (nextProps, nextState) {
  //  return  this.setState.activeTabIdx !== this.state.activeTabIdx;
  // };

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
    // const {showModal, url, tag} = this.state;
    return (
      <>
        {/* <Modal onClose={this.toggleModal} />
        <button type='button' onClick={this.toggleModal}>Open Modal</button>
        {showModal && (<Modal>
          <h1>Hello</h1>
          <button type= 'button' onClick={this.toggleModal}>Close Modal</button>
        </Modal>)}  */}
         {/* <SearchBar />
        
        <ImageGallery hits={ this.hits} />
        <ImageGalleryItem /> */}
        {/*<Loader />
        <Button/> */}
           {/* {this.state.modalOpen && (
              <Modal onClose={this.onModalClose} link={this.state.largeImg} />
            )} */}
      </>
    );
  }
}

export default App;
