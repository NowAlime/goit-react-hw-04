import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onChange }) => {
  return (
    <button className={css.loadMore} onClick={onChange}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;