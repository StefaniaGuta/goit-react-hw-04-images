import { useState, useEffect, useCallback} from "react";
import SearchBar from "./SearchBar/SearchBar";
import getImages from "./GetImageAPI/GetImages";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadBtn from "./Button/LoadingBtn";
import styles from "./App.module.css";
import Loader from "./Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      const imageData = await getImages(searchTerm, page);
      setImages((prevImages) => {
        if (page === 1) {
          return [...imageData.hits]; 
        } else {
          return [...prevImages, ...imageData.hits];
        }
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); 
    }
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      handleSearch(); 
    }
  }, [page, searchTerm, handleSearch]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearchInput = (searchInput) => {
    setSearchTerm(searchInput);
    setPage(1); 
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchInput} />
      <ImageGallery images={images} />
      <div className={styles.btnContainer}>
        {loading && <Loader />}
        {searchTerm.trim() !== "" && !loading && (
          <LoadBtn onClick={handleLoadMore} />
        )}
      </div>
    </div>
  );
}

export default App;