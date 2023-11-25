import { Searchbar } from './Saerchbar/Searchbar';
import { useState, useEffect } from 'react';
import { LoadMoreButton } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './api';
import { MagnifyingGlass } from 'react-loader-spinner';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (query === '') return;
    const fetchUpdatedImages = async () => {
      try {
        setIsLoading(true);
        const searchedImages = await fetchImages(query, page);

        setImages(prevImages => [...prevImages, ...searchedImages.hits]);
        setShowBtn(page < Math.ceil(searchedImages.totalHits / 12));
        setIsLoading(false);
      } catch (error) {
        toast.error('There is an error fetching images');
        setIsLoading(false);
      }
    };

    fetchUpdatedImages();
  }, [query, page]);

  const onSearch = async value => {
    if (value === '') {
      toast.error('Please enter something to search');
    } else {
      setIsLoading(true);
      setQuery(value);
      setPage(1);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar addGalery={onSearch} />
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
      {showBtn && <LoadMoreButton addPage={handleLoadMore} />}
      <Toaster />
    </div>
  );
};
