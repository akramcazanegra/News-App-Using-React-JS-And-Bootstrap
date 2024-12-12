import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const NEWS_API_KEY = '5841e79ab4094f86a5a4a284a3f7fe01';

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [category]);

  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.length > 0 ? (
        articles.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })
      ) : (
        <p>No articles found.</p> // Message if no articles are available
      )}
    </div>
  );
};

export default Newsboard;