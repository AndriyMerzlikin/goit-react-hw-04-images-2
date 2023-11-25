import { Searchbar } from './Saerchbar/Searchbar';
import { Component } from 'react';
import { LoadMoreButton } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './api';
import { MagnifyingGlass } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    page: 1,
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log('hello');
      this.fetchUpdatedImages();
    }
  }

  fetchUpdatedImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { query, page } = this.state;
      const receivedImages = await fetchImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...receivedImages.hits],
        showBtn: this.state.page < Math.ceil(receivedImages.totalHits / 12),
        isLoading: false,
      }));
    } catch (error) {
      toast.error('There is an error fetching images');
      this.setState({ isLoading: false });
    }
  };

  onSearch = async value => {
    if (value === '') {
      toast.error('Please enter something to search');
    } else {
      this.setState({
        isLoading: true,
        query: value,
        page: 1,
        images: [],
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, showBtn } = this.state;
    return (
      <div>
        <Searchbar addGalery={this.onSearch} />
        {isLoading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
        <ImageGallery imagesRender={images} />
        {showBtn && <LoadMoreButton addPage={this.handleLoadMore} />}
        <Toaster />
      </div>
    );
  }
}
