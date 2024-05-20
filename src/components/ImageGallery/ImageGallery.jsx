import ImageCard from "../ImageCard/ImageCard";
import style from "../ImageGallery/ImageGallery.module.css";

 function ImageGallery({ images, isOpen }) {
  return (
    <ul className={style.list}>
      {images.map((image) => (
        <li className={style.listItem} key={image.id}>
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