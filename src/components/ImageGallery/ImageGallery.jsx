import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

 function ImageGallery({ images, isOpen }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard
            small={image.urls.small}
            description={image.description}
            likes={image.likes}
            download={image.links.download}
            onClick={() => isOpen(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;