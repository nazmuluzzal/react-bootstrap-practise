import React, { useEffect, useState } from "react";
import News from "../News/News";

const TopHeadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a9c2c1fde411408380cc3c5811cd7134";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h2>Top Headline: {articles.length}</h2>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
};

export default TopHeadline;
