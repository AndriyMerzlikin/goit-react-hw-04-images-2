import { Searchbar } from './Saerchbar/Searchbar';
import { Component } from 'react';
import { LoadMoreButton } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log('hello');
    }
    this.fetchUpdatedImages();
  }

  fetchUpdatedImages = async () => {
    const { page, query } = this.state;

    try {
      const receivedImages = await fetchImages(query, page);
      console.log(receivedImages);

      this.setState(prevState => ({
        images: [...prevState.images, ...receivedImages.hits],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  onSearch = async event => {
    // event.preventDefault();
    const newQuery = event.target.value;
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, query, page } = this.state;
    return (
      <div>
        <Searchbar addGalery={this.onSearch} />
        <ImageGallery imagesRender={images} />
        <LoadMoreButton />
      </div>
    );
  }
}
