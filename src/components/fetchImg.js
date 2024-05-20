import axios from "axios";
const ACCESS_KEY = "Pzd5WHZvc1LGW1YiJXACZG630o_NjJimOba4WjnMaTw";
axios.defaults.baseURL = "https://api.unsplash.com";
const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos?query=${searchQuery}`, {
    params: {
      query: searchQuery,
      page: page,
      per_page: 15,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data;
};
export default fetchImages;