// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/styled-components';
import axios from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/axios';
import NewsItem from './NewsItem';
import { usePromise } from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fc59d8e67e2a4729bc9fa464f388240f`
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    console.log(query);
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fc59d8e67e2a4729bc9fa464f388240f`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>Still Loading...</NewsListBlock>;
  }
  if (!response) {
    // console.log(response);
    return null;
  }
  if (error) {
    return <NewsListBlock>Error has occured!</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
