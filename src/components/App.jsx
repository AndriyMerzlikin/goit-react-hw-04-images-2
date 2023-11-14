import { Searchbar } from './Saerchbar/Searchbar';
import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidMount() {
    // this.fetchUpdatedImages();
    // console.log(this.state.images);
  }

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
      const recievedImages = await fetchImages(query, page);
      console.log(recievedImages);

      this.setState(prevState => ({
        images: [...prevState.images, ...recievedImages.hits],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, query, page } = this.state;
    return (
      <div>
        <Searchbar qqq={this.handleSubmit} />
        <ImageGallery />
        <Loader />
      </div>
    );
  }
}
