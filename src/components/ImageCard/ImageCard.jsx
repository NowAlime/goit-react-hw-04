import style from "./ImageCard.module.css";
import { IoMdCloudDownload } from "react-icons/io";
import { SlLike } from "react-icons/sl";

const ImageCard = ({ small, description, likes, onClick }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(small, "_blank");
  };

  return (
    <div className={style.imageContainer}>
      <img
        className={style.listImage}
        src={small}
        alt={description || "image"}
        onClick={onClick}
      />
      <div className={style.descriptionImage}>
        <p className={style.likes}>
          <SlLike aria-label="Likes" />
          {likes}
        </p>
        {description && <p className={style.desc}>{description}</p>}
        <a
          href={small}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownload}
          aria-label="Download"
        >
          <IoMdCloudDownload className={style.icon} />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;