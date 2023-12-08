import { useState } from 'react';
import { ImageGalleryItemPicture } from './ImageGalleryItem.styled';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const GalleryImage = ({
  item: { webformatURL, tags, largeImageURL },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div>
      <ImageGalleryItemPicture
        src={webformatURL}
        alt={tags}
        load="lazy"
        onClick={toggleModal}
      />

      <ModalWindow
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        largeImageURL={largeImageURL}
        tags={tags}
      ></ModalWindow>
    </div>
  );
};
