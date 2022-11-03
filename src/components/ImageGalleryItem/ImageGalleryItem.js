import React, { Component } from 'react';
import Modal from 'components/Modal';
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    modalOptions: {
      // show: false,
      src: '',
      alt: '',
    },
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  // showModal = e => {
  //   this.setState({
  //     modalOptions: {
  //       show: true,
  //       src: e.target.dataset.src,
  //       alt: e.target.alt,
  //     },
  //   });
  // };

  closeModal = () => {
    this.setState({ showModal: false, modalOptions: { src: '', alt: '' } });
  };
  render() {
    const {
      modalOptions: { show, src, alt },
    } = this.state;
    const { images } = this.props;
    return (
      <>
        {images.map(e => (
          <li className="gallery-item" key={e.id}>
            <img
              onClick={this.toggleModal}
              className="galleryItemImg"
              src={e.webformatURL}
              alt={e.tags}
              data-src={e.largeImageURL}
            />
          </li>
        ))}
        {show && <Modal src={src} alt={alt} closeModal={this.closeModal} />}
      </>
    );
  }
}

export default ImageGalleryItem;
