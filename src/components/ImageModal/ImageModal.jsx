import style from '../ImageModal/ImageModal.module.css';
import ReactModal from "react-modal";


const ImageModal = ({ imageUrl, isOpen, isClose }) => {
    return (
      <ReactModal
        isOpen={isOpen}
        style={{
          overlay: { background: "#000000cd" },
          content: {
            borderRadius: "4px",
            width: "600px",
            height: "500px",
  
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        onRequestClose={isClose}
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        preventScroll={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className={style.imageContainer}>
          <img className={style.image} src={imageUrl} alt="" />
        </div>
      </ReactModal>
    );
  };
  export default ImageModal;