import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import fetchImages from "../fetchImg";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from '../Loader/Loader';


function App() {
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const handleOpenModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
    setIsOpen(false);
  };

  const handleSearch = (searchTerm) => {
    setImages([]);
    setPage(1);
    setSearchTerm(searchTerm);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const fetchImagesData = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchImages(searchTerm, page);
      setImages((prevImages) => (page === 1 ? data.results : [...prevImages, ...data.results]));
      setTotalPages(Math.ceil(data.total / 15));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImagesData();
  }, [searchTerm, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} isOpen={handleOpenModal} />
      )}
      {error && <ErrorMessage searchTerm={searchTerm} setError={setError} />}
      {loading && <Loader />}
      {page < totalPages && !loading && (
        <LoadMoreBtn onChange={handleLoadMore} />
      )}
      <ImageModal
        images={images}
        isOpen={isOpen}
        isClose={handleCloseModal}
        imageUrl={selectedImage}
      />
    </>
  );
}

export default App;