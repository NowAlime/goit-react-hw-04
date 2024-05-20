import style from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onChange }) => {
  return (
    <button className={style.loadMore} onClick={onChange}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;