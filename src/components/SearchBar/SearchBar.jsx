import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import style from './SearchBar.module.css';
import toast, { Toaster } from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";


const SearchBar = ({ onSearch }) => {
  const searchId = useId();

  const handleSubmit = (values, action) => {
    const { text } = values;
    if (!text) {
      toast.error(
        <p className={style.errorToast}>
          <FaTimes className={style.errorIcon} />
          Please enter a search query!
        </p>
      );
      return;
    } else {
      onSearch(text);
    }

    action.resetForm();
  };

  return (
    <header className={style.topHeader}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "red",
            color: "#fff",
          },

          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Formik onSubmit={handleSubmit} initialValues={{ text: "" }}>
        <Form className={style.form}>
          <div>
            <label className={style.nameOfLabel} htmlFor={searchId}>
              Search
            </label>
            <Field
              className={style.searchText}
              type="text"
              name="text"
              autoComplete="off"
              id={searchId}
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage name="topic" component="span" />
          </div>
          <button className={style.formBtn} type="submit">
            <IoSearchOutline className={style.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;