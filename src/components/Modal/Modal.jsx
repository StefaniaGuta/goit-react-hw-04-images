import basicLightbox from "basiclightbox";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal({ imageUrl, onClose }) {
    const closeModal = () => {
      onClose();
      document.querySelector(".imageGalleryContainer").style.overflow = "auto";
    };
  
    const openModal = () => {
      document.querySelector(".imageGalleryContainer").style.overflow = "hidden"
      const instance = basicLightbox.create(`
        <img src="${imageUrl}" width="800" height="600">
      `);
      instance.show();
    };
  
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.imgContainer} onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} onClick={openModal} alt="Click to open" />
        </div>
      </div>
    );
  }
  
  Modal.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  };
  
  export default Modal;