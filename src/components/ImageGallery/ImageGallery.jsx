import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";


function ImageGallery({ images }) {


  return (
    <div className={styles.imageGalleryContainer}>
      <ul className={styles.imageGallery}>
        {images.map((image, index) => (
          <ImageGalleryItem key={index} image={image} />
        ))}
      </ul>
     
    </div>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;