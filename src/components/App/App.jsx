import toast, { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import { fetchArticles } from '../../articles-api';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setCurrentPage(1);
    setArticles([]);

    toast.success('Here is your toast.');
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(topic, currentPage);
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setTotalPages(data.totalPages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentPage, topic]);

  const isLastPage = currentPage === totalPages - 1;
  const hasArticles = articles.length > 0;

  return (
    <div className={css.container}>
      <SearchForm onSearch={handleSearch} />
      {isError && <strong>Oops ERROR HELP!!!!!</strong>}
      {hasArticles && <ArticleList items={articles} />}
      {isLoading && <strong>Loading articles, please wait...</strong>}
      {hasArticles && !isLoading && !isLastPage && (
        <button onClick={incrementPage}>Load more</button>
      )}
      <Toaster position="top-right" />
    </div>
  );
}
