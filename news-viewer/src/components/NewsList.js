import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
