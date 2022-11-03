import React from 'react';

const ImageGalleryItem = ({ hit, onModalOpen }) => {
  return (
    <li className="gallery-item">
      <img
        className="galleryItemImg"
        onClick={onModalOpen}
        data-large={hit.largeImageURL}
        src={hit.previewURL}
        alt={hit.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
