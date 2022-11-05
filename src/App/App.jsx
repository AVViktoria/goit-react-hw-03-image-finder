import React, { Component } from 'react';
import { ToastContainer, toast} from 'react-toastify';

// import '../index.scss'


//*      Libraries      //
// import { nanoid } from 'nanoid';
// import styled from 'styled-components'

//*      Components      //
import SearchBar from 'components/SearchBar';
import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import LoadButton from 'components/Button';
// import fetchImages from '../components/Service'
import api from '../components/Service/FetchApi'

//* status   //
// 'idle'
// 'pending'
// 'resolved'
// 'rejected'


//*      Root      //
class App extends Component {
  state = {
    searchQuery: "",
    page: 0,
    status: "idle",
    error: null,
    images: [],
    modalOpen: false,
    largeImg: "",
    loading: false,
  };
  //   componentDidMount() {
  //     this.setState({ loading: true });
  // if (
  //       prevProps.searchQuery !== this.props.searchQuery ||
  //       prevState.page !== this.state.page
  //      ) {
  //        this.fetchImages()
  //     .catch(error => this.setState({ error }))
  //         .finally(() => this.setState({ loader: false }));
  //     }

  // }

  //     this.setState({ query: params.get('query') });
  //   }  
  
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPageNumber = prevState.page;
    const nextPageNumber = this.state.page;
    const prevImages = prevState.images;
    if (
      prevQuery !== nextQuery ||
      prevPageNumber !== nextPageNumber
    ) {
     
      api
        .fetchImages(nextQuery, nextPageNumber)
        .then(res => {
          if (nextPageNumber === 1) {
            if (res.hits.length === 0) {
              toast.error('No pictures, sorry. Enter another name, please!');
              this.setState({ images: [], status: "idle" });
              //  return;
            } else {
              toast.success("We found ${res.total} pictures")
        
              this.setState({ images: res.hits, status: "resolved" });
              if (this.state.images.length === res.total) {
                this.setState({ status: "endOfList" });
              }
            }
          }
          if (nextPageNumber > 1) {
            this.setState(() => ({
              images: [...prevImages, ...res.hits],
              status: "resolved",
            }));
            if (this.state.images.length === res.total) {
              toast.info("End of list,sorry!");
              this.setState({ status: "endOfList" });
            }
          }
        })
        .catch((error) => {
          this.setState({ error, status: "rejected" });
        });
    }
  }
        
  // componentDidUpdate(prevProps, prevState) {
  //   const prevQuery = prevState.searchQuery;
  //   const prevPageNumber = prevState.page;
  //   const { searchQuery, page, images } = this.state;
  //   if (prevQuery !== searchQuery || prevPageNumber !== page) {
  //     try {
  //       this.setState({ loading: true });
  //       api
  //         .fetchImages()
  //         .then(res => {
  //           res.data.hits.length === 0
  //              toast.error('No found, try again!')
  //             : res.data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
  //               images.some(image => image.id === id) && this.setState(({ images }) => ({
  //                 images: [...images, { id, webformatURL, largeImageURL }],
  //               }))
  //             })
  //           this.setState({ loading: false });
  //         });
  //     } catch (error) {
  //       this.setState({ error, loading: false });
  //     }
  //   }
  // }


//     if (this.state.page > 2) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   };
  

//  fetchImages = () => {
//     const { searchQuery, page } = this.state;
//     const options = { searchQuery, page };
//     this.setState({ loading: true });
//     api
//       .fetchImages(options)
//       .then(hits => {
//         this.setState(prevState => ({
//           hits: [...prevState.hits, ...hits],
//           page: prevState.page + 1,
//           fetchLength: hits.length,
//         }));
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => {
//         this.setState({ loading: false })
//       });
//   };

    //*   load next 12 pictures, next page  //
   onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  //*  on search submit searchQuery  //
  //*  trim() отрезает пробелы      /
  handleFormSubmit = searchQuery => {
    // this.setState({ searchQuery });
     if (searchQuery.trim() === '') {
      return toast.error('Enter correct name, please!')
    } else if (searchQuery === this.state.searchQuery) {
      return;
    }
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      images: [],
    });
  };

  //*  open and close modal window  //
  onModalOpen = (event) => {
    this.setState({
      modalOpen: true,
      largeImg: event.target.dataset.large,
      // largeImage: images[event].largeImageURL,
    });
  };
  onModalClose = () => {
    this.setState({
      modalOpen: false,
      largeImg: "",
    }); 
    // this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  //*                                  //
  // //*  что бы при постоянном нажатии не перерендывался компонент  //
  // shouldComponentUpdate (nextProps, nextState) {
  //  return  this.setState.activeTabIdx !== this.state.activeTabIdx;
  // };

  

  render() {
  const { onLoadMore, onModalOpen, onModalClose, handleFormSubmit } = this;
  const { images,  largeImg, modalOpen, status } = this.state;
    return (
      <>
         <SearchBar onSubmit={handleFormSubmit} />

         {status === "pending" && <Loader />}
        {status === "resolved" && (
          <>
            <ImageGallery
              onModalOpen={onModalOpen}
              images={images}
            />
            <LoadButton onLoadMore={onLoadMore} />
            {modalOpen && (
              <Modal closeModal={onModalClose} link={largeImg} />
            )}
          </>)} 
        
         {status === "endOfList" && (
          <>
            <ImageGallery
              onModalOpen={onModalOpen}
              hits={images}
            />
            {modalOpen && (
              <Modal closeModal={onModalClose} link={largeImg} />
            )}
          </>
        )}
         {status === "rejected" && (
          toast.error('No found, try again!') 
        )}

        {/* {images.length !== 0 && (
          <ImageGallery images={images} onModalOpen={onModalOpen} />
        )}

         {modalOpen && (
          <Modal onModalClose={onModalClose} largeImg={largeImg} />
        )}


        {loading && <Loader />}
         {images.length >= 12 && <LoadButton onLoadMore={onLoadMore} />} */}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
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
// };//*     //
  //onImgClick
    // //*  слушатель событий по кнопке  //
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // onSubmit = searchData => {
  //   if (searchData.trim() === '') {
  //     return toast.error('Enter the meaning for search');
  //   } else if (searchData === this.state.searchData) {
  //     return;
  //   }
  //   this.setState({
  //     searchData: searchData,
  //     page: 1,
  //     images: [],
  //   });
  // };
  // };
  // //*  очищаем   сбрасываем   форму  //
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };