import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
