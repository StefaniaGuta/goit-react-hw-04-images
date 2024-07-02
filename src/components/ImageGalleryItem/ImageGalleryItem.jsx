import { useState } from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

function ImageGalleryItem({ image }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryImg}
        src={image.largeImageURL}
        alt={image.tags}
        onClick={openModal} 
      />
      {modalOpen && ( 
        <Modal imageUrl={image.largeImageURL} onClose={closeModal} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};


export default ImageGalleryItem;