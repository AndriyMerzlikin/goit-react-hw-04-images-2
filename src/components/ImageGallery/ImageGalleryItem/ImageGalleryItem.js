import { Component } from 'react';
import { ImageGalleryItemPicture } from './ImageGalleryItem.styled';

export class GalleryImage extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item;
    const { isModalOpen } = this.state;

    return (
      <div>
        <ImageGalleryItemPicture
          src={webformatURL}
          alt={tags}
          load="lazy"
          onClick={'future modal window'}
        />
      </div>
    );
  }
}
