import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticles = async (topic, currentPage) => {
  const response = await axios.get(`/search`, {
    params: {
      query: topic,
      page: currentPage,
      hitsPerPage: 10,
    },
  });
  return {
    articles: response.data.hits,
    totalPages: response.data.nbPages,
  };
};
